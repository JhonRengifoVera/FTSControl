import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JefeComponent } from './jefe.component';
import { GestionAreaComponent } from './pages/gestion-area/gestion-area.component';
import { GestionSolicitudesComponent } from './pages/gestion-solicitudes/gestion-solicitudes.component';
import { InformarAusenciaComponent } from './pages/informar-ausencia/informar-ausencia.component';
import { ReportesComponent } from './pages/reportes/reportes.component';

const routes: Routes = [
  {
    path: '',
    component: JefeComponent,
    children: [
      { path: 'gestion-area', component: GestionAreaComponent },
      { path: 'gestion-solicitudes', component: GestionSolicitudesComponent },
      { path: 'informar-ausencia', component: InformarAusenciaComponent },
      { path: 'reportes', component: ReportesComponent }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class JefeRoutingModule { }
