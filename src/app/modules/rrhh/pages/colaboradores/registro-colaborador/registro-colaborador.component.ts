import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DialogModule } from 'primeng/dialog';
import { CrearUsuarioComponent } from 'src/app/core/utils/crear-usuario/crear-usuario.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-registro-colaborador',
  standalone: true,
  imports: [
    RouterOutlet, TableModule, CommonModule,
    ButtonComponent, IconFieldModule, InputIconModule,
    DialogModule, CrearUsuarioComponent
  ],
  templateUrl: './registro-colaborador.component.html',
  styleUrl: './registro-colaborador.component.scss'
})
export class RegistroColaboradorComponent {
  data: any;
  usuarios: any;
  searchValue: string = '';
  visibleCrearUsuario: boolean = false;

    router = inject(Router);
  

  ngOnInit() {
    this.usuarios = [
        { id: 1, nombre: 'Jhon Rengifo', identificacion: 1023456789, correo: 'jhon.rengifo@fts.com', rol: 'Administrador', area: 'Software', estado: 'Activo', fechaIngreso: '2025-07-01', fechaSalida: '2025-09-30' },
        { id: 2, nombre: 'Ana López', identificacion: 987654321, correo: 'ana.lopez@fts.com', rol: 'Usuario', area: 'Ventas', estado: 'Activo', fechaIngreso: '2025-06-15', fechaSalida: '2025-09-15' },
        { id: 3, nombre: 'Carlos Ruiz', identificacion: 123789456, correo: 'carlos.ruiz@fts.com', rol: 'Supervisor', area: 'SST', estado: 'Activo', fechaIngreso: '2025-05-20', fechaSalida: '2025-12-31' },
        { id: 4, nombre: 'Marta Fernández', identificacion: 456123789, correo: 'marta.fernandez@fts.com', rol: 'Usuario', area: 'Finanzas', estado: 'Inactivo', fechaIngreso: '2025-02-01', fechaSalida: '2025-06-30' },
        { id: 5, nombre: 'Luis Gómez', identificacion: 321654987, correo: 'luis.gomez@fts.com', rol: 'Administrador', area: 'Logística', estado: 'Activo', fechaIngreso: '2025-07-10', fechaSalida: '2025-10-10' },
        { id: 6, nombre: 'Patricia Ríos', identificacion: 789456123, correo: 'patricia.rios@fts.com', rol: 'Supervisor', area: 'Calidad', estado: 'Activo', fechaIngreso: '2025-07-05', fechaSalida: '2025-12-01' },
        { id: 7, nombre: 'David Morales', identificacion: 654987321, correo: 'david.morales@fts.com', rol: 'Usuario', area: 'Producción', estado: 'Activo', fechaIngreso: '2025-07-12', fechaSalida: '2025-11-30' },
        { id: 8, nombre: 'Laura Herrera', identificacion: 852963741, correo: 'laura.herrera@fts.com', rol: 'Administrador', area: 'Marketing', estado: 'Inactivo', fechaIngreso: '2025-04-20', fechaSalida: '2025-07-15' },
        { id: 9, nombre: 'Santiago Torres', identificacion: 147258369, correo: 'santiago.torres@fts.com', rol: 'Usuario', area: 'Compras', estado: 'Activo', fechaIngreso: '2025-06-01', fechaSalida: '2025-08-31' },
        { id: 10, nombre: 'Valentina Castro', identificacion: 963852741, correo: 'valentina.castro@fts.com', rol: 'Supervisor', area: 'Recursos Humanos', estado: 'Activo', fechaIngreso: '2025-07-03', fechaSalida: '2025-10-31' },
        { id: 11, nombre: 'Ricardo Méndez', identificacion: 159753486, correo: 'ricardo.mendez@fts.com', rol: 'Usuario', area: 'Legal', estado: 'Activo', fechaIngreso: '2025-07-08', fechaSalida: '2025-12-20' },
        { id: 12, nombre: 'Natalia Vargas', identificacion: 357951468, correo: 'natalia.vargas@fts.com', rol: 'Administrador', area: 'Innovación', estado: 'Inactivo', fechaIngreso: '2025-03-01', fechaSalida: '2025-06-01' }
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

  redireccionar(ruta: any){
    this.router.navigate([ruta])

  }
}
