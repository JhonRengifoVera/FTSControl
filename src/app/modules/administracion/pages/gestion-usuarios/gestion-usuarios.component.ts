import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DialogModule } from 'primeng/dialog';
import { CrearUsuarioComponent } from 'src/app/core/utils/crear-usuario/crear-usuario.component';
@Component({
  selector: 'app-gestion-usuarios',
  standalone: true,
  imports: [
    RouterOutlet, TableModule, CommonModule,
    ButtonComponent, IconFieldModule, InputIconModule,
    DialogModule,CrearUsuarioComponent
  ],
  templateUrl: './gestion-usuarios.component.html',
  styleUrl: './gestion-usuarios.component.scss'
})
export class GestionUsuariosComponent {
  data: any;
  usuarios: any;
  searchValue: string = '';
  visibleCrearUsuario: boolean = false;

  ngOnInit() {
    this.usuarios = [
      { id: 1, nombre: 'Jhon Rengifo',identificacion: 123456,correo: 'jhon@fts.com', rol: 'Administrador', area: 'Software' },
      { id: 2, nombre: 'Ana López',   identificacion: 123456,correo: 'ana@fts.com', rol: 'Usuario', area: 'Ventas' }, ,
      { id: 3, nombre: 'Carlos Ruiz', identificacion: 123456,correo: 'carlos@fts.com', rol: 'Supervisor', area: 'SST' },
      { id: 4, nombre: 'Carlos Ruiz', identificacion: 123456,correo: 'carlos@fts.com', rol: 'Supervisor', area: 'SST' },
      { id: 5, nombre: 'Carlos Ruiz', identificacion: 123456,correo: 'carlos@fts.com', rol: 'Supervisor', area: 'SST' },
      { id: 6, nombre: 'Carlos Ruiz', identificacion: 123456,correo: 'carlos@fts.com', rol: 'Supervisor', area: 'SST' },
      { id: 7, nombre: 'Carlos Ruiz', identificacion: 123456,correo: 'carlos@fts.com', rol: 'Supervisor', area: 'SST' },
      { id: 8, nombre: 'Carlos Ruiz', identificacion: 123456,correo: 'carlos@fts.com', rol: 'Supervisor', area: 'SST' },
      { id: 9, nombre: 'Carlos Ruiz', identificacion: 123456,correo: 'carlos@fts.com', rol: 'Supervisor', area: 'SST' },
      { id: 10, nombre: 'Carlos Ruiz',identificacion: 123456, correo: 'carlos@fts.com', rol: 'Supervisor', area: 'SST' },
      { id: 11, nombre: 'Carlos Ruiz',identificacion: 123456, correo: 'carlos@fts.com', rol: 'Supervisor', area: 'SST' },
      { id: 12, nombre: 'Carlos Ruiz',identificacion: 123456, correo: 'carlos@fts.com', rol: 'Supervisor', area: 'SST' },
    ]
  }

  filtrarGlobal(event: Event) {
    const input = event.target as HTMLInputElement;
    const dt: any = document.querySelector('p-table');
    dt?.filterGlobal?.(input.value, 'contains');
  }

  abrirModalCrearUsuario() {
    this.visibleCrearUsuario = true;
  }
}
