import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { LoginResponse } from 'src/app/core/models/global.model';
import { jwtDecode } from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient, private router: Router) { }

  login(credentials: { usuario: string; contrasena: string }) {
    return this.http.post<LoginResponse>(`${this.API_URL}/auth/login`, credentials)
      .pipe(
        tap((response) => {
          localStorage.setItem('access_token', response.access_token);
          localStorage.setItem('rol', response.usuario.rol);
        })
      );
  }

  redirectUserByRole(rol: string): void {
    switch (rol) {
      case 'SUPER_ADMIN':
        this.router.navigate(['/admin/inicio-admin']);
        break;
      case 'RRHH':
        this.router.navigate(['/rrhh/inicio-rrhh']);
        break;
      case 'GERENTE':
        this.router.navigate(['/gerencia/home']);
        break;
      default:
        this.router.navigate(['/unauthorized']);
        break;
    }
  }


  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('rol');
    this.router.navigate(['/auth/sign-in']);
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }


  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) return false;

    try {
      const { exp } = jwtDecode<any>(token);
      const now = Math.floor(Date.now() / 1000);
      return exp > now;
    } catch (e) {
      return false;
    }
  }

  renewToken() {
    return this.http.post<{ access_token: string }>(`${this.API_URL}/auth/refresh-token`, {})
      .pipe(
        tap((response) => {
          localStorage.setItem('access_token', response.access_token);
        })
      );
  }

}
