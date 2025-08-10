// menu.service.ts
import { Injectable } from '@angular/core';
import { Menu } from '../../core/constants/menu';
import { MenuItem } from '../models/menu.model';

@Injectable({ providedIn: 'root' })
export class MenuService {
  getMenuForRol(rol: number): MenuItem[] {
    switch (rol) {
      case 1:
        return Menu.pages.filter((p: any) => p.group === 'Administración del sistema');
      case 2:
        return Menu.pages.filter((p: any) => p.group === 'Recursos Humanos');
      case 3:
        return Menu.pages.filter((p: any) => p.group === 'Jefe directo');
      case 4:
        return Menu.pages.filter((p: any) => p.group === 'Colaborador');
      default:
        return [];
    }
  }
}
