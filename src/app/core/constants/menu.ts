import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: '',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/home.svg',
          label: 'Inicio',
          route: '/paginas/inicio',
        },
      ]
    },
    {
      group: '',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/admin-gear.svg',
          label: 'Administracion',
          route: '/administracion',
          children: [
            { label: 'Usuarios', route: '/administracion/usuarios' },
            { label: 'Perfiles', route: '/administracion/perfiles' },
            { label: 'Configuraciones', route: '/administracion/configuraciones' },
          ],
        },
      ]
    },
  ]
}
