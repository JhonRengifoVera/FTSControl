import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginasEstaticasComponent } from './paginas-estaticas.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    component: PaginasEstaticasComponent,
    children: [
      { path: 'inicio', component: InicioComponent, pathMatch: 'full'},
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AppEstaticasModule { }
