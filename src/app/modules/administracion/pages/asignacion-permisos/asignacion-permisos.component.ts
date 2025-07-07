import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TableModule } from 'primeng/table';
import { Perfiles } from 'src/app/core/models/global.model';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';


@Component({
  selector: 'app-asignacion-permisos',
  standalone: true,
  imports: [
    DropdownModule, TableModule, ButtonComponent,
    IconFieldModule, InputSwitchModule, FormsModule
  ],
  templateUrl: './asignacion-permisos.component.html',
  styleUrl: './asignacion-permisos.component.scss'
})
export class AsignacionPermisosComponent {

  perfiles: Perfiles[] | undefined;
  perfilesUsuarios: any;
  selectedPerfil: Perfiles | undefined;
  perfilesSistema: any;
  perfilSeleccionado: any = null;
  permisosFiltrados: any;

  ngOnInit() {
    this.perfilesSitema();
  }


  perfilesSitema() {
    this.perfilesSistema = [
      {
        nombre: 'Super Administrador',
        nivel: 10,
        permisos: [
          { id: 1, nombre: 'Crear usuarios', descripcion: 'Puede crear usuarios de cualquier rol, incluidos RRHH y Jefes Directos.' },
          { id: 2, nombre: 'Editar usuarios', descripcion: 'Puede editar información de cualquier usuario.' },
          { id: 3, nombre: 'Eliminar usuarios', descripcion: 'Puede eliminar usuarios del sistema.' },
          { id: 4, nombre: 'Asignar roles y jefes directos', descripcion: 'Puede asignar y modificar roles y jefes directos.' },
          { id: 5, nombre: 'Gestionar roles', descripcion: 'Crear, editar y eliminar roles.' },
          { id: 6, nombre: 'Gestionar cargos', descripcion: 'Crear, editar y eliminar cargos.' },
          { id: 7, nombre: 'Gestionar departamentos', descripcion: 'Crear, editar y eliminar departamentos.' },
          { id: 8, nombre: 'Consultar reportes generales', descripcion: 'Ver reportes generales de permisos y usuarios.' },
          { id: 9, nombre: 'Ver historial de permisos', descripcion: 'Consultar historial de permisos de todos los usuarios.' },
        ],
      },
      {
        nombre: 'Director RRHH',
        nivel: 7,
        permisos: [
          { id: 10, nombre: 'Registrar colaborador', descripcion: 'Registrar nuevos colaboradores y jefes directos.' },
          { id: 11, nombre: 'Asignar roles y jefes directos', descripcion: 'Asignar roles y jefes al registrar o actualizar un usuario.' },
          { id: 12, nombre: 'Actualizar información de colaboradores', descripcion: 'Actualizar datos de empleados y jefes bajo su gestión.' },
          { id: 13, nombre: 'Visualizar reportes de permisos', descripcion: 'Visualizar reportes filtrados por colaborador, área, fechas y estado.' },
          { id: 14, nombre: 'Ver historial de permisos', descripcion: 'Consultar historial detallado de permisos de su ámbito.' },
        ],
      },
      {
        nombre: 'Director SST',
        nivel: 7,
        permisos: [
          { id: 15, nombre: 'Registrar colaborador', descripcion: 'Registrar nuevos colaboradores y jefes directos.' },
          { id: 16, nombre: 'Visualizar reportes de permisos', descripcion: 'Visualizar reportes filtrados por colaborador, área, fechas y estado.' },
          { id: 17, nombre: 'Ver historial de permisos', descripcion: 'Consultar historial detallado de permisos de su ámbito.' },
        ],
      },
      {
        nombre: 'Director Implementación',
        nivel: 7,
        permisos: [
          { id: 18, nombre: 'Registrar colaborador', descripcion: 'Registrar nuevos colaboradores y jefes directos.' },
          { id: 19, nombre: 'Visualizar reportes de permisos', descripcion: 'Visualizar reportes filtrados por colaborador, área, fechas y estado.' },
          { id: 20, nombre: 'Ver historial de permisos', descripcion: 'Consultar historial detallado de permisos de su ámbito.' },
        ],
      },
      {
        nombre: 'Director Producción',
        nivel: 7,
        permisos: [
          { id: 21, nombre: 'Registrar colaborador', descripcion: 'Registrar nuevos colaboradores y jefes directos.' },
          { id: 22, nombre: 'Visualizar reportes de permisos', descripcion: 'Visualizar reportes filtrados por colaborador, área, fechas y estado.' },
          { id: 23, nombre: 'Ver historial de permisos', descripcion: 'Consultar historial detallado de permisos de su ámbito.' },
        ],
      },
      {
        nombre: 'Director Servicio Cliente',
        nivel: 7,
        permisos: [
          { id: 24, nombre: 'Registrar colaborador', descripcion: 'Registrar nuevos colaboradores y jefes directos.' },
          { id: 25, nombre: 'Visualizar reportes de permisos', descripcion: 'Visualizar reportes filtrados por colaborador, área, fechas y estado.' },
          { id: 26, nombre: 'Ver historial de permisos', descripcion: 'Consultar historial detallado de permisos de su ámbito.' },
        ],
      },
      {
        nombre: 'Director Contabilidad',
        nivel: 7,
        permisos: [
          { id: 27, nombre: 'Registrar colaborador', descripcion: 'Registrar nuevos colaboradores y jefes directos.' },
          { id: 28, nombre: 'Visualizar reportes de permisos', descripcion: 'Visualizar reportes filtrados por colaborador, área, fechas y estado.' },
          { id: 29, nombre: 'Ver historial de permisos', descripcion: 'Consultar historial detallado de permisos de su ámbito.' },
        ],
      },
      {
        nombre: 'Director Administrativo',
        nivel: 7,
        permisos: [
          { id: 30, nombre: 'Registrar colaborador', descripcion: 'Registrar nuevos colaboradores y jefes directos.' },
          { id: 31, nombre: 'Visualizar reportes de permisos', descripcion: 'Visualizar reportes filtrados por colaborador, área, fechas y estado.' },
          { id: 32, nombre: 'Ver historial de permisos', descripcion: 'Consultar historial detallado de permisos de su ámbito.' },
        ],
      },
      {
        nombre: 'Director Ventas',
        nivel: 7,
        permisos: [
          { id: 33, nombre: 'Registrar colaborador', descripcion: 'Registrar nuevos colaboradores y jefes directos.' },
          { id: 34, nombre: 'Visualizar reportes de permisos', descripcion: 'Visualizar reportes filtrados por colaborador, área, fechas y estado.' },
          { id: 35, nombre: 'Ver historial de permisos', descripcion: 'Consultar historial detallado de permisos de su ámbito.' },
        ],
      },
      {
        nombre: 'Jefe Directo',
        nivel: 5,
        permisos: [
          { id: 36, nombre: 'Aprobar solicitudes de permisos', descripcion: 'Aprobar permisos de colaboradores bajo su cargo.' },
          { id: 37, nombre: 'Rechazar solicitudes de permisos', descripcion: 'Rechazar permisos de colaboradores bajo su cargo.' },
          { id: 38, nombre: 'Visualizar permisos de su equipo', descripcion: 'Ver solicitudes pendientes, aprobadas y rechazadas de su equipo.' },
          { id: 39, nombre: 'Solicitar permisos personales', descripcion: 'Solicitar su propia ausencia y notificar a RRHH.' },
          { id: 40, nombre: 'Generar reportes de permisos de equipo', descripcion: 'Filtrar reportes por fechas y estados de permisos de su equipo.' },
          { id: 41, nombre: 'Ver historial de permisos', descripcion: 'Consultar historial de permisos de su equipo.' },
        ],
      },
      {
        nombre: 'Colaborador',
        nivel: 3,
        permisos: [
          { id: 42, nombre: 'Solicitar permisos', descripcion: 'Enviar solicitudes de ausencia con fecha, duración y motivo.' },
          { id: 43, nombre: 'Informar trabajo remoto', descripcion: 'Notificar trabajo remoto con fecha y duración.' },
          { id: 44, nombre: 'Visualizar estado de permisos', descripcion: 'Ver sus propios permisos y su estado.' },
          { id: 45, nombre: 'Editar información personal', descripcion: 'Actualizar sus datos personales dentro de límites definidos.' },
          { id: 46, nombre: 'Descargar historial de permisos', descripcion: 'Descargar comprobantes o historial de permisos.' },
          { id: 47, nombre: 'Ver historial de permisos', descripcion: 'Consultar historial de sus permisos otorgados o rechazados.' },
        ],
      },
    ];
  }

  filtrarPermisos() {
    if (this.perfilSeleccionado && this.perfilSeleccionado.permisos) {
      this.permisosFiltrados = this.perfilSeleccionado.permisos;
    } else {
      this.permisosFiltrados = [];
    }
  }
}
