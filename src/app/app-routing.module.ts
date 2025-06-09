import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/layout/layout.module').then((m) => m.LayoutModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'paginas',
    loadChildren: () => import('./modules/paginas-estaticas/paginas-estaticas.module').then((m) => m.PaginasEstaticasModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/administracion/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'rrhh',
    loadChildren: () => import('./modules/rrhh/rrhh.module').then((m) => m.RrhhModule),
  },
  {
    path: 'jefe',
    loadChildren: () => import('./modules/jefe/jefe.module').then((m) => m.JefeModule),
  },
  {
    path: 'colaborador',
    loadChildren: () => import('./modules/colaborador/colaborador.module').then((m) => m.ColaboradorModule),
  },
  {
    path: 'errors',
    loadChildren: () => import('./modules/error/error.module').then((m) => m.ErrorModule),
  },
  { path: '**', redirectTo: 'errors/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
