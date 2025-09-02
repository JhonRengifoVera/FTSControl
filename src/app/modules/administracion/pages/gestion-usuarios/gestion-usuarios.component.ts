import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';

import { CrearUsuarioComponent } from 'src/app/core/utils/crear-usuario/crear-usuario.component';
import { ToastService } from 'src/app/core/services/toast-service.service';
import { AdministracionService } from '../../services/administracion.service';
@Component({
  selector: 'app-gestion-usuarios',
  standalone: true,
  imports: [
    RouterOutlet, TableModule, CommonModule,
    ButtonComponent, IconFieldModule, InputIconModule,
    DialogModule, CrearUsuarioComponent, ToastModule
  ],
  templateUrl: './gestion-usuarios.component.html',
  styleUrl: './gestion-usuarios.component.scss',
  providers: [ToastService]
})
export class GestionUsuariosComponent {
  data: any;
  usuarios: any;
  searchValue: string = '';
  visibleDialogUsuario = false;
  modoDialog: 'crear' | 'editar' = 'crear';
  usuarioSeleccionado: any = null;

  verUsuario: any
  constructor(private toastService: ToastService, private administracionService: AdministracionService) { }

  ngOnInit() {
    this.obtenerUsuariosAdministrativos();
  }

  obtenerUsuariosAdministrativos() {
    this.administracionService.obtenerUsuariosAdministrativos().subscribe({
      next: (data) => {
        this.usuarios = data.map((usuario: any) => ({
          id: usuario.id,
          nombre: usuario.nombres,
          apellidos: usuario.apellidos,
          identificacion: usuario.numero_documento,
          email: usuario.email,
          rol: usuario.rol_id,
          cargo: usuario.cargo_id,
          departamento: usuario.departamento_id,
          estado: this.getEstadosUsuario(usuario.estado_cuenta)
        }));
      },
      error: (error) => {
        console.error('Error al obtener usuarios administrativos', error);
      }
    });
  }

  getUsuarioById(id: number) {
    this.administracionService.obtenerUsuarioById(id).subscribe({
      next: (data) => {
        this.verUsuario = data;
      },
      error: (error) => {
        console.error('Error al obtener usuario por ID', error);
      }
    });
  }

  editarUsuario(id: number) {
    this.administracionService.editarUsuario(id, this.verUsuario).subscribe({
      next: (data) => {
        console.log(data);
        this.modoDialog = 'editar';
        this.usuarioSeleccionado = data;
        this.visibleDialogUsuario = true;
        this.obtenerUsuariosAdministrativos();
      },
      error: (error) => {
        console.error('Error al editar usuario', error);
      }
    });
  }

  getEstadosUsuario(estado: any) {
    switch (estado) {
      case 1:
        return 'Activo';
      case 2:
        return 'Inactivo';
      case 3:
        return 'Retirado';
      default:
        return 'Desconocido';
    }
  }

  getUtilsById(id: number, utilName: string) {
    this.administracionService.getUtilsById(id, utilName).subscribe({
      next: (data) => {
        return data.nombre;
      },
      error: (error) => {
        console.error('Error al obtener datos de utilidad', error);
      }
    });
  }

  filtrarGlobal(event: Event) {
    const input = event.target as HTMLInputElement;
    const dt: any = document.querySelector('p-table');
    dt?.filterGlobal?.(input.value, 'contains');
  }

  abrirModalCrearUsuario() {
    this.modoDialog = 'crear';
    this.usuarioSeleccionado = null;
    this.visibleDialogUsuario = true;
  }

  cerrarDialog() {
    this.visibleDialogUsuario = false;
    this.obtenerUsuariosAdministrativos(); // refrescar la lista
  }


}
