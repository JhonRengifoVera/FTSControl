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

@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [
    DialogModule, FileUploadModule, ToastModule,
    ReactiveFormsModule, FormsModule,DropdownModule,
    InputTextModule,InputSwitchModule,ButtonComponent,
    CommonModule
  ],
  templateUrl: './crear-usuario.component.html',
  providers: [MessageService]

})
export class CrearUsuarioComponent {
  @Input() visible: boolean = false;
  @Output() cerrar = new EventEmitter<void>();


  formUsuario!: FormGroup;

  messageService = inject(MessageService)

  constructor(private formBuilder: FormBuilder) { }

  roles = [{ nombre: 'Administrador' }, { nombre: 'Jefe' }, { nombre: 'RRHH' }];
  departamentos = [{ nombre: 'Sistemas' }, { nombre: 'Ventas' }];
  cargos = [{ nombre: 'Ingeniero' }, { nombre: 'Coordinador' }];
  jefes = [{ nombre: 'Carlos Ruiz' }, { nombre: 'Ana López' }];

  ngOnInit() {
    this.formUsuario = this.formBuilder.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      rol: [null, Validators.required],
      departamento: [null, Validators.required],
      cargo: [null, Validators.required],
      jefe: [null],
      activo: [true],
      password: ['', Validators.required],
    });
  }

  onUpload(event: any) {
    const archivo = event.files?.[0];
    console.log('Archivo cargado:', archivo);
    // Puedes guardarlo en una propiedad si vas a enviarlo al backend después
  }

  guardarUsuario() {
    if (this.formUsuario.valid) {
      const datos = this.formUsuario.value;
      console.log('Usuario a guardar:', datos);
      // Aquí iría tu servicio para guardar
    }
  }

  cancelar() {
    this.cerrar.emit();
  }

  get f() {
    return this.formUsuario.controls;
  }

}
