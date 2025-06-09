import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [],
  imports: [HttpClientModule, AngularSvgIconModule.forRoot(), AdminRoutingModule],
})
export class AdminModule { }
