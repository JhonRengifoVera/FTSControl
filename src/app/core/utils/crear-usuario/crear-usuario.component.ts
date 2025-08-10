import { Component, inject, Input, EventEmitter, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { AdministracionService } from 'src/app/modules/administracion/services/administracion.service';
import { cargo, departamento, Rol, tipoDocumento } from 'src/app/core/models/global.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [
    DialogModule, FileUploadModule, ToastModule,
    ReactiveFormsModule, FormsModule, DropdownModule,
    InputTextModule, InputSwitchModule, ButtonComponent,
    CommonModule
  ],
  templateUrl: './crear-usuario.component.html',
  providers: [MessageService]

})
export class CrearUsuarioComponent {
  @Input() visible: boolean = false;
  @Output() cerrar = new EventEmitter<void>();

  formUsuario!: FormGroup;
  submitted = false;
  messageService = inject(MessageService);
  administracionService = inject(AdministracionService);

  constructor(private formBuilder: FormBuilder) {
    this.getRoles();
    this.getTipoDocumentos();
    this.getDepartamentos();
    this.getCargoOptions();
  }

  roles: Rol[] = [];
  tipoDocumento: tipoDocumento[] = [];
  departamentos: departamento[] = [];
  cargos: cargo[] = [];

  ngOnInit() {
    this.formValidations();
    this.estadosNotificaciones(this.formUsuario);
    this.formUsuario.get('correo')?.valueChanges.subscribe(correo => {
      this.formUsuario.patchValue({ nombreUsuario: correo }, { emitEvent: false });
    });

    // Generar contraseña aleatoria al iniciar
    const randomPass = this.generarContrasena(10);
    this.formUsuario.patchValue({ contrasena: randomPass });
  }


  guardarUsuario() {
    this.submitted = true;
    if (this.formUsuario.invalid) return;
    const datos = this.formUsuario.value;
    console.log('Usuario a guardar:', datos);
  }

  cancelar() {
    this.submitted = false;
    this.formUsuario.reset();
    this.formUsuario.markAsPristine();
    this.formUsuario.markAsUntouched();
    this.cerrar.emit();
  }


  get f() {
    return this.formUsuario.controls;
  }

  formValidations() {
    this.formUsuario = this.formBuilder.group({
      nombres: ['', [Validators.required, Validators.minLength(2)]],
      apellidos: ['', [Validators.required, Validators.minLength(2)]],
      tipoDocumento: [null, Validators.required],
      numero_documento: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s()]+$/)]],
      nombreUsuario: ['', [Validators.required, Validators.minLength(4)]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      rol: [null, Validators.required],
      departamento: [null, Validators.required],
      cargo: [null, Validators.required],
      notificacion_sistema: [false],
      notificacion_email: [true],
    });
  }

  getRoles() {
    this.administracionService.obtenerRoles().subscribe({
      next: (roles) => {
        this.roles = roles;
      },
      error: (err) => {
        console.error('Error al cargar roles:', err);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudieron cargar los roles.' });
      }
    });
  }


  getTipoDocumentos() {
    this.administracionService.obtenerTipoDocumentos().subscribe({
      next: (tipoDocumentos) => {
        this.tipoDocumento = tipoDocumentos;
      },
      error: (err) => {
        console.error('Error al cargar tipos de documentos:', err);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudieron cargar los tipos de documentos.' });
      }
    });
  }

  getDepartamentos() {
    this.administracionService.obtenerDepartamentos().subscribe({
      next: (departamentos) => {
        this.departamentos = departamentos;
      },
      error: (err) => {
        console.error('Error al cargar departamentos:', err);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudieron cargar los departamentos.' });
      }
    });
  }

  getCargoOptions() {
    this.administracionService.obtenerCargos().subscribe({
      next: (cargos) => {
        this.cargos = cargos;
      },
      error: (err) => {
        console.error('Error al cargar cargos:', err);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudieron cargar los cargos.' });
      }
    });
  }

  estadosNotificaciones(form: FormGroup) {
    form.valueChanges.subscribe(({ notificacion_sistema, notificacion_email }) => {
      if (!notificacion_sistema && !notificacion_email) {
        // Si ambas están apagadas, encendemos la otra según cuál disparó el cambio
        const lastChanged = form.get('notificacion_sistema')?.dirty
          ? 'notificacion_sistema'
          : 'notificacion_email';
        const toTurnOn = lastChanged === 'notificacion_sistema'
          ? 'notificacion_email'
          : 'notificacion_sistema';

        form.get(toTurnOn)?.setValue(true, { emitEvent: false });
      }
    });
  }

  generarContrasena(length: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let pass = '';
    for (let i = 0; i < length; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return pass;
  }
}
