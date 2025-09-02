import { Component, inject, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';
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
import { ToastService } from '../../services/toast-service.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { EMPTY, finalize, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [
    DialogModule, FileUploadModule, ToastModule,
    ReactiveFormsModule, FormsModule, DropdownModule,
    InputTextModule, InputSwitchModule, ButtonComponent,
    CommonModule, ProgressSpinnerModule
  ],
  templateUrl: './crear-usuario.component.html',
  providers: [MessageService]

})
export class CrearUsuarioComponent {
  @Input() visible: boolean = false;
  @Input() usuario?: any;  // si llega, estamos editando
  @Input() modo: 'crear' | 'editar' = 'crear';
  @Output() cerrar = new EventEmitter<void>();

  formUsuario!: FormGroup;
  submitted = false;
  messageService = inject(MessageService);
  administracionService = inject(AdministracionService);

  constructor(private formBuilder: FormBuilder, private toastService: ToastService) {
    this.getRoles();
    this.getTipoDocumentos();
    this.getDepartamentos();
    this.getCargoOptions();
  }

  //Modelos
  roles: Rol[] = [];
  tipoDocumento: tipoDocumento[] = [];
  departamentos: departamento[] = [];
  cargos: cargo[] = [];

  loading: boolean = false;

  randomPass = '';

  ngOnInit() {
    this.formValidations();
    this.estadosNotificaciones(this.formUsuario);
    this.formUsuario.get('email')?.valueChanges.subscribe(email => {
      this.formUsuario.patchValue({ nombre_usuario: email }, { emitEvent: false });
    });
    this.randomPass = this.generarContrasena(10);
    this.formUsuario.patchValue({ password: this.randomPass });
    if (this.modo === 'editar' && this.usuario) {
      this.formUsuario.patchValue(this.usuario); // rellenas el formulario con los datos
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['usuario'] && this.usuario && this.modo === 'editar') {
      this.formUsuario.patchValue(this.usuario);
    }
  }

  get f() {
    return this.formUsuario.controls;
  }

  formValidations() {
    this.formUsuario = this.formBuilder.group({
      nombres: ['', [Validators.required, Validators.minLength(2)]],
      apellidos: ['', [Validators.required, Validators.minLength(2)]],
      tipo_documento: [null, Validators.required],
      numero_documento: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s()]+$/)]],
      nombre_usuario: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rol_id: [null, Validators.required],
      departamento_id: [null, Validators.required],
      cargo_id: [null, Validators.required],
      notificacion_sistema: [false],
      notificacion_email: [true],
    });
  }

  guardarUsuario() {
    this.submitted = true;

    // 🔹 Si es crear → validamos todo el form
    if (this.modo === 'crear' && this.formUsuario.invalid) {
      Object.keys(this.formUsuario.controls).forEach((campo) => {
        const control = this.formUsuario.get(campo);
        control?.markAsTouched();
      });

      this.toastService.showToast({
        titulo: 'Formulario incompleto',
        tipo: 'error',
        mensaje: 'Por favor revisa los campos marcados en rojo.'
      });
      return;
    }

    this.loading = true;
    let huboError = false;

    if (this.modo === 'crear') {
      // ---------------- CREAR ----------------
      const datos = this.formUsuario.value;

      this.administracionService.crearUsuariosAdmin(datos).pipe(
        switchMap((response) => {
          if (!response.status) {
            this.toastService.showToast({ titulo: 'Info', tipo: 'info', mensaje: response.message });
            return EMPTY;
          }

          const credenciales = {
            nombre_completo: `${datos.nombres} ${datos.apellidos}`,
            usuario: datos.email,
            contrasena: datos.password,
            rol: datos.rol_id
          };

          return this.administracionService.crearUsuario(credenciales).pipe(
            tap(() => {
              this.toastService.showToast({ titulo: 'Éxito', tipo: 'success', mensaje: response.message });
            })
          );
        }),
        finalize(() => {
          this.loading = false;
          if (!huboError) {
            this.limpiarCampos();
          }
        })
      ).subscribe({
        error: (err) => {
          huboError = true;
          this.toastService.showToast({
            titulo: 'Error',
            tipo: 'error',
            mensaje: err.error?.message || 'No se pudo crear el usuario.'
          });
        }
      });

    } else {
      // ---------------- EDITAR ----------------
      const cambios = Object.keys(this.formUsuario.controls).reduce((acc: any, key) => {
        const nuevoValor = this.formUsuario.get(key)?.value;
        const valorOriginal = this.usuario ? this.usuario[key] : null;
        if (nuevoValor !== valorOriginal) {
          acc[key] = nuevoValor;
        }
        return acc;
      }, {});

      if (Object.keys(cambios).length === 0) {
        this.toastService.showToast({
          titulo: 'Sin cambios',
          tipo: 'info',
          mensaje: 'No realizaste ninguna modificación.'
        });
        this.loading = false;
        return;
      }

      this.administracionService.editarUsuario(this.usuario.id, cambios).pipe(
        tap(() => {
          this.toastService.showToast({
            titulo: 'Éxito',
            tipo: 'success',
            mensaje: 'Usuario actualizado correctamente.'
          });
        }),
        finalize(() => {
          this.loading = false;
        })
      ).subscribe({
        error: (err) => {
          huboError = true;
          this.toastService.showToast({
            titulo: 'Error',
            tipo: 'error',
            mensaje: err.error?.message || 'No se pudo actualizar el usuario.'
          });
        }
      });
    }
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

  cancelar() {
    this.limpiarCampos();
    this.cerrar.emit();
  }

  limpiarCampos() {
    this.submitted = false;
    const currentPass = this.formUsuario.get('password')?.value;
    this.formUsuario.reset();
    this.formUsuario.patchValue({ password: currentPass });
  }

}
