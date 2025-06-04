import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ChartModule } from 'primeng/chart';

import { HttpClientModule } from '@angular/common/http';



@Component({
    selector: 'app-inicio',
    standalone: true,
    imports: [RouterModule, AngularSvgIconModule, ChartModule,HttpClientModule],
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.scss'
})
export class InicioComponent implements OnInit {
    router = inject(Router)
    data: any;
    options: any;

    redirigirPagina(route: string) {
        this.router.navigate([route]);
    }


    ngOnInit() {
    }
}
