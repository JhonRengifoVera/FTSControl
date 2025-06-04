import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: 'paginas',
    component: LayoutComponent,
    loadChildren: () => import('../paginas-estaticas/paginas-estaticas.module').then((m) => m.PaginasEstaticasModule),
  },
  { path: '', redirectTo: '/auth/sign-in', pathMatch: 'full' },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
}) 
export class LayoutRoutingModule {}
