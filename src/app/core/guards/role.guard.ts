import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../modules/auth/services/auth.service';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const token = this.authService.getToken();

    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }

    try {
      const decoded: any = jwtDecode(token);
      const rol = decoded.rol;

      if (rol === 'SUPER_ADMIN') {
        return true;
      }

      // Usuario autenticado pero sin permisos
      this.router.navigate(['/unauthorized']);
      return false;

    } catch (err) {
      // Token inválido o corrupto
      this.router.navigate(['/login']);
      return false;
    }
  }
}
