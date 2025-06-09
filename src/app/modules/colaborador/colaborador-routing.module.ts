import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColaboradorComponent } from './colaborador.component';
import { SolicitarAusenciaComponent } from './pages/solicitar-ausencia/solicitar-ausencia.component';
import { DatosPersonalesComponent } from './pages/datos-personales/datos-personales.component';
import { ConsultarAusenciasComponent } from './pages/consultar-ausencias/consultar-ausencias.component';

const routes: Routes = [
  {
    path: '',
    component: ColaboradorComponent,
    children: [
      { path: 'solicitar-ausencia', component: SolicitarAusenciaComponent },
      { path: 'datos-personales', component: DatosPersonalesComponent },
      { path: 'consultar-ausencias', component: ConsultarAusenciasComponent }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class ColaboradorRoutingModule { }
