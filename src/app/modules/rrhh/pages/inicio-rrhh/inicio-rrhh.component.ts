import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AnimacionContadoresService } from 'src/app/core/services/animacionContadores.service';
import { StatsCardComponent } from 'src/app/core/utils/stats-card/stats-card.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { Table, TableModule } from 'primeng/table';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-inicio-rrhh',
  standalone: true,
  imports: [
    CommonModule, StatsCardComponent, NgApexchartsModule,
    AngularSvgIconModule, TableModule, ButtonComponent
  ],
  templateUrl: './inicio-rrhh.component.html',
  styleUrl: './inicio-rrhh.component.scss'
})
export class InicioComponent {
  momento: string = '';
  colaboradoresRegistados: number = 40;
  permisosEntrantes: number = 35;
  pendientePorAprobacion: number = 21;
  ultimoPermisoAprobado: number = 31;

  animacionService = inject(AnimacionContadoresService);
  // Variables animadas que se mostrarán en pantalla
  contadorColaboradores: number = 0;
  contadorPermisosEntrantes: number = 0;
  contadorPendientes: number = 0;
  contadorUltimoAprobado: number = 0;
  data: any;
  usuariosSeries = [{
    name: 'Usuarios',
    data: [
      { x: '2025-06-01', y: 16 },
      { x: '2025-06-02', y: 27 },
      { x: '2025-06-03', y: 33 },
      { x: '2025-06-04', y: 25 },
      { x: '2025-06-05', y: 41 },
    ]
  }];
  entrantesSeries = [{
    name: 'Entrantes', data: [
      { x: '2025-06-01', y: 3 },
      { x: '2025-06-02', y: 5 },
      { x: '2025-06-03', y: 8 },
      { x: '2025-06-04', y: 2 },
      { x: '2025-06-05', y: 14 },
    ]
  }];
  pendientesSeries = [{
    name: 'Pendientes', data: [
      { x: '2025-06-01', y: 9 },
      { x: '2025-06-02', y: 12 },
      { x: '2025-06-03', y: 5 },
      { x: '2025-06-04', y: 2 },
      { x: '2025-06-05', y: 4 },
    ]
  }];
  rechazadosSeries = [{
    name: 'Rechazados', data: [
      { x: '2025-06-01', y: 4 },
      { x: '2025-06-02', y: 3 },
      { x: '2025-06-03', y: 9 },
      { x: '2025-06-04', y: 5 },
      { x: '2025-06-05', y: 11 },
    ]
  }];

  ngOnInit() {
    this.animacionService.animateCounter(this, 'contadorColaboradores', this.colaboradoresRegistados, 2);
    this.animacionService.animateCounter(this, 'contadorPermisosEntrantes', this.permisosEntrantes, 2);
    this.animacionService.animateCounter(this, 'contadorPendientes', this.pendientePorAprobacion, 2);
    this.animacionService.animateCounter(this, 'contadorUltimoAprobado', this.ultimoPermisoAprobado, 2);
    this.momento = this.animacionService.getTimeOfDay();
    this.data = [
      {
        id: 2,
        data: "Jhon Jairo Rengifo Vera",
        data1: "Licencia Paternidad",
        data2: "2025-03-12 12:00:00 pm",
        data3: "2025-03-12 5:00:00 pm",
        data4: 'Ingeniero de desarrollo',
        data5: 3
      },
      {
        id: 2,
        data: "Marisol Davila",
        data1: "Cita medica",
        data2: "2025-03-10 12:00:00 pm",
        data3: "2025-03-10 5:00:00 pm",
        data4: "Ingeniero de desarrollo",
        data5: 1
      },
      {
        id: 3,
        data: "Jeison Diaz",
        data1: "Enfermedad",
        data2: "2025-03-11 12:00:00 pm",
        data3: "2025-03-11 5:00:00 pm",
        data4: 'Director Soporte Tecnico',
        data5: 2
      },
      {
        id: 4,
        data: "Juan Camilo Atoy",
        data1: "Licencia Paternidad",
        data2: "2025-03-12 12:00:00 pm",
        data3: "2025-03-12 5:00:00 pm",
        data4: "Coordinador Soporte Tecnico",
        data5: 1
      },
      {
        id: 5,
        data: "Nicolas Mesa",
        data1: "Licencia Paternidad",
        data2: "2025-03-13 12:00:00 pm",
        data3: "2025-03-13 5:00:00 pm",
        data4: "Ingeniero de desarrollos",
        data5: 2
      },
    ]
  }


  chartLegend: any = {
    position: 'top',
    fontSize: '12px'
  };

  chartResponsive = [
    {
      breakpoint: 768,
      options: {
        chart: {
          height: 500
        },
        xaxis: {
          labels: {
            style: {
              fontSize: '8px'
            }
          }
        },
        legend: {
          position: 'bottom'
        }
      }
    }
  ];

  chartSeries = [
    {
      name: "Permisos",
      data: [10, 41, 35, 51, 49, 62, 10,]
    }
  ];

  chartDetails: any = {
    type: 'bar',
    height: 350
  };

  chartDetailsEstado: any = {
    type: 'donut',
    height: 350
  };

  xAxis = {
    categories:
      [
        "Implementacion",
        "Software",
        "Recursos Humanos",
        "Contabilidad",
        "Administracion",
        "Ventas",
        "Soporte",
      ],
    labels: {
      style: {
        fontSize: '9px',
      }
    },
  };

  chartSeriesEstado = [20, 50, 30];
  xAxisEstadoPermisos: any = {
    chart: { type: 'pie' },
    labels: ['Aceptados', 'Rechazados', 'Pendientes']
  };

  chartTitle = {
    text: "Cantidad de permisos por area " + this.animacionService.setNombreMes(new Date().getMonth())
  };

  chartTitleEstado = {
    text: "Distribución por Estado de Permisos " + this.animacionService.setNombreMes(new Date().getMonth())
  };


}
