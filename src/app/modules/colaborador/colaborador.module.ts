import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { ColaboradorRoutingModule } from './colaborador-routing.module';


@NgModule({
  declarations: [],
  imports: [HttpClientModule,AngularSvgIconModule.forRoot(),ColaboradorRoutingModule],
})
export class ColaboradorModule { }
