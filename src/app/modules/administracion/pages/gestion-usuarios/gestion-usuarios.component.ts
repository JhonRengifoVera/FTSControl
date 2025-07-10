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
    DialogModule, CrearUsuarioComponent
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
        { id: 1, nombre: 'Jhon Rengifo', identificacion: 1023456789, correo: 'jhon.rengifo@fts.com', rol: 'Administrador', area: 'Software' },
        { id: 2, nombre: 'Ana López', identificacion: 987654321, correo: 'ana.lopez@fts.com', rol: 'Usuario', area: 'Ventas' },
        { id: 3, nombre: 'Carlos Ruiz', identificacion: 123789456, correo: 'carlos.ruiz@fts.com', rol: 'Supervisor', area: 'SST' },
        { id: 4, nombre: 'Marta Fernández', identificacion: 456123789, correo: 'marta.fernandez@fts.com', rol: 'Usuario', area: 'Finanzas' },
        { id: 5, nombre: 'Luis Gómez', identificacion: 321654987, correo: 'luis.gomez@fts.com', rol: 'Administrador', area: 'Logística' },
        { id: 6, nombre: 'Patricia Ríos', identificacion: 789456123, correo: 'patricia.rios@fts.com', rol: 'Supervisor', area: 'Calidad' },
        { id: 7, nombre: 'David Morales', identificacion: 654987321, correo: 'david.morales@fts.com', rol: 'Usuario', area: 'Producción' },
        { id: 8, nombre: 'Laura Herrera', identificacion: 852963741, correo: 'laura.herrera@fts.com', rol: 'Administrador', area: 'Marketing' },
        { id: 9, nombre: 'Santiago Torres', identificacion: 147258369, correo: 'santiago.torres@fts.com', rol: 'Usuario', area: 'Compras' },
        { id: 10, nombre: 'Valentina Castro', identificacion: 963852741, correo: 'valentina.castro@fts.com', rol: 'Supervisor', area: 'Recursos Humanos' },
        { id: 11, nombre: 'Ricardo Méndez', identificacion: 159753486, correo: 'ricardo.mendez@fts.com', rol: 'Usuario', area: 'Legal' },
        { id: 12, nombre: 'Natalia Vargas', identificacion: 357951468, correo: 'natalia.vargas@fts.com', rol: 'Administrador', area: 'Innovación' }
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
