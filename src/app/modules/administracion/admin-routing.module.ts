import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { GestionUsuariosComponent } from './pages/gestion-usuarios/gestion-usuarios.component';
import { AsignacionPermisosComponent } from './pages/asignacion-permisos/asignacion-permisos.component';
import { AdministracionRolesComponent } from './pages/administracion-roles/administracion-roles.component';
import { ReportesComponent } from './pages/reportes/reportes.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'gestion-usuarios', component: GestionUsuariosComponent },
      { path: 'asignacion-permisos', component: AsignacionPermisosComponent },
      { path: 'administracion-roles', component: AdministracionRolesComponent },
      { path: 'reportes', component: ReportesComponent }
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class AdminRoutingModule { }
