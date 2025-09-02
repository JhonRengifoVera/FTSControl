import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { cargo, CrearUsuarioResponse, departamento, Rol, tipoDocumento, usuario, usuarioAdministrativo } from 'src/app/core/models/global.model';
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

  getRolById(id: number): Observable<Rol> {
    return this.http.get<Rol>(`${this.API_URL}/administracion/roles/${id}`);
  }

  crearUsuariosAdmin(datos: usuarioAdministrativo): Observable<CrearUsuarioResponse> {
    return this.http.post<CrearUsuarioResponse>(`${this.API_URL}/administracion/crear-usuario-administrativo`, datos);
  }

  crearUsuario(datos: usuario): Observable<CrearUsuarioResponse> {
    return this.http.post<CrearUsuarioResponse>(`${this.API_URL}/administracion/crear-usuario`, datos);
  }

  getUtilsById(id: number, utilName: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/administracion/utils/${utilName}/${id}`);
  }

  obtenerUsuariosAdministrativos() {
    return this.http.get<usuarioAdministrativo[]>(`${this.API_URL}/administracion/usuarios-administrativos`);
  }

  obtenerUsuarioById(id: number) {
    return this.http.get<usuarioAdministrativo>(`${this.API_URL}/administracion/usuarios-by-id/${id}`);
  }

  editarUsuario(id: number, datos: usuarioAdministrativo): Observable<any> {
    return this.http.patch<any>(`${this.API_URL}/administracion/editar-usuario/${id}`, datos);
  }
}
