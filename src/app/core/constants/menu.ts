import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    // {
    //   group: '',
    //   separator: false,
    //   items: [
    //     {
    //       icon: 'assets/icons/heroicons/outline/home.svg',
    //       label: 'Inicio',
    //       route: '/paginas/inicio',
    //     },
    //   ]
    // },
    {
      group: 'Administración del sistema',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/admin-gear.svg',
          label: 'Administracion',
          route: '/admin',
          children: [
            { label: 'Inicio', route: '/admin/inicio-admin' },
            { label: 'Gestion usuarios', route: '/admin/gestion-usuarios' },
            { label: 'Asignacion de permisos', route: '/admin/asignacion-permisos' },
            { label: 'Administración general', route: '/admin/administracion-roles' },
            { label: 'Reportes', route: '/admin/reportes' },
          ],
        },
      ]
    },
    {
      group: 'Recursos Humanos',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'Colaboradores',
          route: '/rrhh/colaboradores',
          children: [
            { label: 'Registrar colaborador', route: '/rrhh/colaboradores/registro' },
            { label: 'Actualizar información', route: '/rrhh/colaboradores/actualizar' },
            { label: 'Gestionar perfiles', route: '/rrhh/colaboradores/asignacion' },
          ]
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'Consultar Permisos',
          route: '/rrhh/permisos'
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'Reportes',
          route: '/rrhh/reportes'
        }
      ]
    },
    {
      group: 'Jefe directo',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/admin-gear.svg',
          label: 'Jefe Directo',
          route: '/jefe',
          children: [
            { label: 'Gestion Area', route: '/jefe/gestion-area' },
            { label: 'Gestion Solicitudes', route: '/jefe/gestion-solicitudes' },
            { label: 'Informar Ausencia', route: '/jefe/informar-ausencia' },
            { label: 'Reportes', route: '/jefe/reportes' },
          ],
        },
      ]
    },
    {
      group: 'Colaborador',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/admin-gear.svg',
          label: 'Colaborador',
          route: '/colaborador',
          children: [
            { label: 'Solicitar Ausencia', route: '/colaborador/solicitar-ausencia' },
            { label: 'Datos Personales', route: '/colaborador/datos-personales' },
            { label: 'Consultar Ausencias', route: '/colaborador/consultar-ausencias' },
          ],
        },
      ]
    },
  ]
}
