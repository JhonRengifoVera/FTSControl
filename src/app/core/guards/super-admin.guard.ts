import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../modules/auth/services/auth.service';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const superAdminGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const token = authService.getToken();

  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  try {
    const decoded: any = jwtDecode(token);
    const rol = decoded.rol;

    if (rol === 'SUPER_ADMIN') { // Assuming 'SUPER_ADMIN' is the role ID for super admin
      return true;
    }

    router.navigate(['/unauthorized']);
    return false;
  } catch (e) {
    router.navigate(['/login']);
    return false;
  }
};
