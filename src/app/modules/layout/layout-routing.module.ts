import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: 'paginas',
    component: LayoutComponent,
    loadChildren: () => import('../paginas-estaticas/paginas-estaticas.module').then((m) => m.PaginasEstaticasModule),
  },
  {
    path: 'admin',
    component: LayoutComponent,
    loadChildren: () => import('../administracion/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'rrhh',
    component: LayoutComponent,
    loadChildren: () => import('../rrhh/rrhh.module').then((m) => m.RrhhModule),
  },
  {
    path: 'jefe',
    component: LayoutComponent,
    loadChildren: () => import('../jefe/jefe.module').then((m) => m.JefeModule),
  },
  {
    path: 'colaborador',
    component: LayoutComponent,
    loadChildren: () => import('../colaborador/colaborador.module').then((m) => m.ColaboradorModule),
  },
  { path: '', redirectTo: '/auth/sign-in', pathMatch: 'full' },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
}) 
export class LayoutRoutingModule {}
