import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RrhhRoutingModule } from './rrhh-routing.module';


@NgModule({
  declarations: [],
  imports: [HttpClientModule, AngularSvgIconModule.forRoot(), RrhhRoutingModule],
})
export class RrhhModule { }
