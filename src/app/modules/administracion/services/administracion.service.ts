import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { cargo, CrearUsuarioResponse, departamento, Rol, tipoDocumento, usuarioAdministrativo } from 'src/app/core/models/global.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministracionService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  obtenerRoles() {
    return this.http.get<Rol[]>(`${this.API_URL}/administracion/roles`);
  }

  obtenerTipoDocumentos() {
    return this.http.get<tipoDocumento[]>(`${this.API_URL}/administracion/tipo-documentos`);
  }

  obtenerDepartamentos() {
    return this.http.get<departamento[]>(`${this.API_URL}/administracion/departamentos`);
  }

  obtenerCargos() {
    return this.http.get<cargo[]>(`${this.API_URL}/administracion/cargos`);
  }

  crearUsuariosAdmin(datos: usuarioAdministrativo): Observable<CrearUsuarioResponse> {
    return this.http.post<CrearUsuarioResponse>(`${this.API_URL}/administracion/crear-usuario-administrativo`, datos);
  }
}
