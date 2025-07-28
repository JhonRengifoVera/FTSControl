import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { TagModule } from 'primeng/tag';
@Component({
  selector: 'app-consultar-permisos',
  standalone: true,
  imports: [TableModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ButtonComponent,
    TagModule
  ],
  templateUrl: './consultar-permisos.component.html',
  styleUrl: './consultar-permisos.component.scss'
})
export class ConsultarPermisosComponent {
  filtroNombre = '';
  filtroRol: string | null = null;

  roles = [
    { label: 'Colaborador', value: 'colaborador' },
    { label: 'Jefe Directo', value: 'jefe' },
    { label: 'RRHH', value: 'rrhh' },
  ];

  permisos = [
    {
      nombre: 'Ana Torres',
      correo: 'ana.torres@empresa.com',
      rol: 'rrhh',
      fecha: '2025-07-20',
      motivo: 'Cita médica',
      estado: 1,
    },
    {
      nombre: 'Luis Díaz',
      correo: 'luis.diaz@empresa.com',
      rol: 'colaborador',
      fecha: '2025-07-18',
      motivo: 'Permiso personal',
      estado: 2,
    },
    {
      nombre: 'Marta Ríos',
      correo: 'marta.rios@empresa.com',
      rol: 'jefe',
      fecha: '2025-07-19',
      motivo: 'Evento familiar',
      estado: 3,
    },
  ];

  get permisosFiltrados() {
    return this.permisos.filter(p =>
      (!this.filtroNombre || p.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase())) &&
      (!this.filtroRol || p.rol === this.filtroRol)
    );
  }

  getColorEstado(estado: number): { severity: any; icon: string } {
    switch (estado) {
      case 1:
        return { severity: 'success', icon: 'm-0 pi pi-check' };
      case 2:
        return { severity: 'danger', icon: 'm-0 pi pi-times' };
      case 3:
        return { severity: 'warning', icon: 'm-0 pi pi-clock' };
      default:
        return { severity: 'info', icon: 'm-0 pi pi-question' };
    }
  }

  limpiarFiltros() {
    this.filtroNombre = '';
    this.filtroRol = null;
  }
}
