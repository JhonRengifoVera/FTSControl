import { Component, inject } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import {
  ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ApexResponsive,
  ApexLegend, ApexFill, ApexStroke
} from "ng-apexcharts";
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { StatsCardComponent } from 'src/app/core/utils/stats-card/stats-card.component';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { AnimacionContadoresService } from 'src/app/core/services/animacionContadores.service';

@Component({
  selector: 'app-inicio-admin',
  standalone: true,
  imports: [
    NgApexchartsModule, AngularSvgIconModule, TableModule,
    CommonModule, ButtonComponent, StatsCardComponent,
    IconFieldModule, InputIconModule
  ],
  templateUrl: './inicio-admin.component.html',
  styleUrl: './inicio-admin.component.scss'
})
export class InicioAdminComponent {
  momento: string = '';
  usuarioActivos: number = 125;
  permisosEntrantes: number = 35;
  pendientePorAprobacion: number = 21;
  permisosRechazados: number = 32;

  animacionService = inject(AnimacionContadoresService);
  // Variables animadas que se mostrarán en pantalla
  contadorUsuarios: number = 0;
  contadorPermisos: number = 0;
  contadorPendientes: number = 0;
  contadorRechazados: number = 0;

  usuariosSeries = [{
    name: 'Usuarios',
    data: [
      { x: '2025-06-01', y: 10 },
      { x: '2025-06-02', y: 20 },
      { x: '2025-06-03', y: 30 },
      { x: '2025-06-04', y: 25 },
      { x: '2025-06-05', y: 40 },
    ]
  }];
  entrantesSeries = [{
    name: 'Entrantes', data: [
      { x: '2025-06-01', y: 10 },
      { x: '2025-06-02', y: 1 },
      { x: '2025-06-03', y: 5 },
      { x: '2025-06-04', y: 2 },
      { x: '2025-06-05', y: 17 },
    ]
  }];
  pendientesSeries = [{
    name: 'Pendientes', data: [
      { x: '2025-06-01', y: 7 },
      { x: '2025-06-02', y: 3 },
      { x: '2025-06-03', y: 5 },
      { x: '2025-06-04', y: 2 },
      { x: '2025-06-05', y: 4 },
    ]
  }];
  rechazadosSeries = [{
    name: 'Rechazados', data: [
      { x: '2025-06-01', y: 4},
      { x: '2025-06-02', y: 3 },
      { x: '2025-06-03', y: 9 },
      { x: '2025-06-04', y: 5 },
      { x: '2025-06-05', y: 11 },
    ]
  }];
  data: any;

  ngOnInit() {
    this.momento = this.getTimeOfDay();
    this.animacionService.animateCounter(this, 'contadorUsuarios', this.usuarioActivos, 2);
    this.animacionService.animateCounter(this, 'contadorPermisos', this.permisosEntrantes, 2);
    this.animacionService.animateCounter(this, 'contadorPendientes', this.pendientePorAprobacion, 2);
    this.animacionService.animateCounter(this, 'contadorRechazados', this.permisosRechazados, 2);
    this.data = [
      {
        data: "Jhon Jairo Rengifo Vera",
        data1: "Licencia Paternidad",
        data2: "2025-03-12 12:00:00 pm",
        data3: "2025-03-12 5:00:00 pm",
        data4: 2
      },
      {
        data: "Marisol Davila",
        data1: "Cita medica",
        data2: "2025-03-10 12:00:00 pm",
        data3: "2025-03-10 5:00:00 pm",
        data4: 1
      },
      {
        data: "Jeison Diaz",
        data1: "Enfermedad",
        data2: "2025-03-11 12:00:00 pm",
        data3: "2025-03-11 5:00:00 pm",
        data4: 3
      },
      {
        data: "Juan Camilo Atoy",
        data1: "Licencia Paternidad",
        data2: "2025-03-12 12:00:00 pm",
        data3: "2025-03-12 5:00:00 pm",
        data4: 1
      },
      {
        data: "Nicolas Mesa",
        data1: "Licencia Paternidad",
        data2: "2025-03-13 12:00:00 pm",
        data3: "2025-03-13 5:00:00 pm",
        data4: 2
      },
    ]
  }

  chartLegend: ApexLegend = {
    position: 'top',
    fontSize: '12px'
  };

  chartResponsive: ApexResponsive[] = [
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

  chartSeries: ApexAxisChartSeries = [
    {
      name: "Permisos",
      data: [10, 41, 35, 51, 49, 62]
    }
  ];

  chartDetails: ApexChart = {
    type: "bar",
    height: 350
  };

  xAxis: ApexXAxis = {
    categories:
      ["Permisos medicos",
        "Enfermedad",
        "No remunerado",
        "Diliengencias Personales",
        "Lincencia maternal",
        "Otras"
      ],
    labels: {
      style: {
        fontSize: '9px',
      }
    },
  };

  chartTitle: ApexTitleSubtitle = {
    text: "Cantidad Permisos Junio"
  };

  areaSeries = [
    {
      name: 'Usuarios',
      data: [10, 40, 25, 60, 50, 80, 65]
    }
  ];

  areaChart: ApexChart = {
    id: 'sparkline-usuarios',
    type: 'area',
    height: 60,
    sparkline: {
      enabled: true
    }
  };

  areaStroke: ApexStroke = {
    curve: 'smooth'
  };

  areaFill: ApexFill = {
    opacity: 0.3
  };

  areaXAxis: ApexXAxis = {
    type: 'datetime',
    labels: {
      show: false
    }
  };


  getTimeOfDay(date: Date = new Date()): 'Buenos dias' | 'Buenas tardes' | 'Buenas noches' {
    const hour = date.getHours();
    if (hour >= 5 && hour < 12) {
      return 'Buenos dias';
    } else if (hour >= 12 && hour < 18) {
      return 'Buenas tardes';
    } else {
      return 'Buenas noches';
    }
  }

  estadoPermiso(respuesta: number) {
    if (respuesta == 1) {
      return 'aprobado'
    } else if (respuesta == 2) {
      return 'pendiente'
    } else if (respuesta == 3) {
      return 'rechazado'
    } else {
      return 'estado incorrecto'
    }
  }

  clear(table: Table) {
    table.clear();
  }

  filterGlobal(event: Event, dt: any) {
    const input = event.target as HTMLInputElement;
    dt.filterGlobal(input.value, 'contains');
  }
}
