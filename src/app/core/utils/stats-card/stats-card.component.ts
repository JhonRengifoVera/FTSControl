import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ApexXAxis, ApexFill, ApexStroke,
  ApexChart, ApexAxisChartSeries, ApexResponsive
} from 'ng-apexcharts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgIf } from '@angular/common';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [
    NgApexchartsModule, CommonModule, NgIf,
    ButtonComponent
  ],
  templateUrl: './stats-card.component.html',
})
export class StatsCardComponent {
  @Input() iconColor: string = 'text-primary text-foreground';
  @Input() title = '';
  @Input() value = 0;
  @Input() icon = '';
  @Input() series: ApexAxisChartSeries = [];
  @Input() chartColor = '#008FFB';

  @Input() class = '';
  @Input() buttonIcon?: string;
  @Input() buttonLabel?: string;
  @Input() buttonAction?: () => void;

  @Input() chart: ApexChart = {
    type: 'area',
    height: 60,
    sparkline: { enabled: true }
  };

  stroke: ApexStroke = {
    curve: 'smooth'
  };

  fill: ApexFill = {
    opacity: 0.3
  };

  xaxis: ApexXAxis = {
    type: 'datetime',
    labels: { show: false }
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
}
