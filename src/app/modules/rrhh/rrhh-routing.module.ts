import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RrhhComponent } from './rrhh.component';
import { RegistroColaboradorComponent } from './pages/colaboradores/registro-colaborador/registro-colaborador.component';
import { ActualizarInformacionComponent } from './pages/colaboradores/actualizar-informacion/actualizar-informacion.component';
import { AsignacionJefesRolesComponent } from './pages/colaboradores/asignacion-jefes-roles/asignacion-jefes-roles.component';
import { ConsultarPermisosComponent } from './pages/permisos/consultar-permisos/consultar-permisos.component';
import { ReportesComponent } from './pages/reportes/reportes.component';

const routes: Routes = [
  {
    path: '',
    component: RrhhComponent,
    children: [
      { path: 'colaboradores/registro', component: RegistroColaboradorComponent },
      { path: 'colaboradores/actualizar', component: ActualizarInformacionComponent },
      { path: 'colaboradores/asignacion', component: AsignacionJefesRolesComponent },
      { path: 'permisos', component: ConsultarPermisosComponent },
      { path: 'reportes', component: ReportesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RrhhRoutingModule { }
