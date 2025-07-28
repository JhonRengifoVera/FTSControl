import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-asignacion-jefes-roles',
  standalone: true,
  imports: [TableModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ButtonComponent
  ],
  templateUrl: './asignacion-jefes-roles.component.html',
  styleUrl: './asignacion-jefes-roles.component.scss'
})
export class AsignacionJefesRolesComponent {
  filtroNombre = '';
  filtroRol: any = null;

  roles = [
    { label: 'Colaborador', value: 'colaborador' },
    { label: 'Jefe Directo', value: 'jefe' },
    { label: 'RRHH', value: 'rrhh' },
  ];

  jefes = [
    { label: 'Carlos Pérez', value: 'carlos.perez@empresa.com' },
    { label: 'Ana Ramírez', value: 'ana.ramirez@empresa.com' },
    // Rellenar desde backend idealmente
  ];

  colaboradores = [
    {
      nombre: 'Ana Torres',
      correo: 'ana.torres@empresa.com',
      rol: 'rrhh',
      jefeDirecto: 'carlos.perez@empresa.com',
    },
    {
      nombre: 'Luis Díaz',
      correo: 'luis.diaz@empresa.com',
      rol: 'colaborador',
      jefeDirecto: '',
    },    {
      nombre: 'Luis Díaz',
      correo: 'luis.diaz@empresa.com',
      rol: 'colaborador',
      jefeDirecto: '',
    },    {
      nombre: 'Luis Díaz',
      correo: 'luis.diaz@empresa.com',
      rol: 'colaborador',
      jefeDirecto: '',
    },    {
      nombre: 'Luis Díaz',
      correo: 'luis.diaz@empresa.com',
      rol: 'colaborador',
      jefeDirecto: '',
    },    {
      nombre: 'Luis Díaz',
      correo: 'luis.diaz@empresa.com',
      rol: 'colaborador',
      jefeDirecto: '',
    },    {
      nombre: 'Luis Díaz',
      correo: 'luis.diaz@empresa.com',
      rol: 'colaborador',
      jefeDirecto: '',
    },    {
      nombre: 'Luis Díaz',
      correo: 'luis.diaz@empresa.com',
      rol: 'colaborador',
      jefeDirecto: '',
    },    {
      nombre: 'Luis Díaz',
      correo: 'luis.diaz@empresa.com',
      rol: 'colaborador',
      jefeDirecto: '',
    },    {
      nombre: 'Luis Díaz',
      correo: 'luis.diaz@empresa.com',
      rol: 'colaborador',
      jefeDirecto: '',
    },    {
      nombre: 'Luis Díaz',
      correo: 'luis.diaz@empresa.com',
      rol: 'colaborador',
      jefeDirecto: '',
    },    {
      nombre: 'Luis Díaz',
      correo: 'luis.diaz@empresa.com',
      rol: 'colaborador',
      jefeDirecto: '',
    },    {
      nombre: 'Luis Díaz',
      correo: 'luis.diaz@empresa.com',
      rol: 'colaborador',
      jefeDirecto: '',
    },    {
      nombre: 'Luis Díaz',
      correo: 'luis.diaz@empresa.com',
      rol: 'colaborador',
      jefeDirecto: '',
    },    {
      nombre: 'Luis Díaz',
      correo: 'luis.diaz@empresa.com',
      rol: 'colaborador',
      jefeDirecto: '',
    },
  ];

  colaboradoresFiltrados() {
    return this.colaboradores.filter((c) => {
      const nombreMatch =
        c.nombre.toLowerCase().includes(this.filtroNombre.toLowerCase()) ||
        c.correo.toLowerCase().includes(this.filtroNombre.toLowerCase());
      const rolMatch = !this.filtroRol || c.rol === this.filtroRol.value;
      return nombreMatch && rolMatch;
    });
  }

  guardarCambios(colaborador: any) {
    // Aquí iría la lógica de API: this.usuarioService.actualizarRol(colaborador)
    console.log('Cambios guardados para:', colaborador);
  }
}
