import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { GestionUsuariosComponent } from './pages/gestion-usuarios/gestion-usuarios.component';
import { AsignacionPermisosComponent } from './pages/asignacion-permisos/asignacion-permisos.component';
import { AdministracionRolesComponent } from './pages/administracion-roles/administracion-roles.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { InicioAdminComponent } from './pages/inicio-admin/inicio-admin.component';
import { superAdminGuard } from '../../core/guards/super-admin.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'inicio-admin', component: InicioAdminComponent, canActivate: [superAdminGuard] },
      { path: 'gestion-usuarios', component: GestionUsuariosComponent, canActivate: [superAdminGuard] },
      { path: 'asignacion-permisos', component: AsignacionPermisosComponent, canActivate: [superAdminGuard] },
      { path: 'administracion-roles', component: AdministracionRolesComponent, canActivate: [superAdminGuard] },
      { path: 'reportes', component: ReportesComponent, canActivate: [superAdminGuard] }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class AdminRoutingModule { }
