import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { JefeRoutingModule } from './jefe-routing.module';
@NgModule({
  declarations: [],
  imports: [HttpClientModule,AngularSvgIconModule.forRoot(),JefeRoutingModule],
})
export class JefeModule { }
