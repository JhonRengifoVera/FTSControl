import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { MessageModule } from 'primeng/message';
import { StatsCardComponent } from 'src/app/core/utils/stats-card/stats-card.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { AnimacionContadoresService } from 'src/app/core/services/animacionContadores.service';
import { InputSwitchModule } from 'primeng/inputswitch';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [
    CommonModule,FormsModule,TableModule,
    CalendarModule,DropdownModule,MessageModule,
    StatsCardComponent,ButtonComponent,NgApexchartsModule,
    InputSwitchModule
  ],
  templateUrl: './reportes.component.html',
  styleUrl: './reportes.component.scss'
})
export class ReportesComponent {
  fechaRango: Date[] = [];
  usuarioSeleccionado: string | null = null;
  estadoSeleccionado: string | null = null;
  motivosSeleccionado: string | null = null;
  maxFecha: Date = new Date();
  animacionService = inject(AnimacionContadoresService);
  ngOnInit() {

  }

  motivos = [
    { label: 'Todos', value: null },                                     
    { id: 2, label: 'Licencia paternidad' },
    { id: 3, label: 'Enfermedad' },
    { id: 4, label: 'Motivos Personales' },
  ];

  usuarios = [
    { label: 'Todos', value: null },
    { id: 2, label: 'Jhon Rengifo' },
    { id: 3, label: 'Ana López' },
    { id: 4, label: 'Carlos Rui' },
  ];

  estados = [
    { label: 'Todos', value: null },
    { label: 'Aceptados', value: 'aceptado' },
    { label: 'Rechazados', value: 'rechazado' },
    { label: 'Pendientes', value: 'pendiente' },
  ];

  formatos = [
    { label: 'PDF', value: 'aceptado' },
    { label: 'EXCEL', value: 'aceptado' },
    { label: 'CSV', value: 'aceptado' },
  ]

  totalSolicitados = 0;
  totalAceptados = 0;
  totalRechazados = 0;

  datosReporte: any[] = [];

  columnas = [
    { field: 'usuario', header: 'Usuario' },
    { field: 'permisosSolicitados', header: 'Solicitados' },
    { field: 'permisosAceptados', header: 'Aceptados' },
    { field: 'permisosRechazados', header: 'Rechazados' },
    { field: 'permisosPendientes', header: 'Pendientes' },
  ];

  seriesTendencia = [{ name: 'Permisos', data: [5, 10, 15, 12, 20, 18] }];
  chartOptionsTendencia: any = {
    chart: { type: 'line', height: 350 },
    xaxis: { categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'] }
  };

  seriesDistribucion = [20, 50, 30];
  chartOptionsDistribucion: any = {
    chart: { type: 'pie' },
    labels: ['Aceptados', 'Rechazados', 'Pendientes']
  };

  generarReporte() {
    console.log('Generando reporte...');
    // Aquí pondrías tu lógica real:
    this.datosReporte = [
      { usuario: 'juan@example.com', permisosSolicitados: 10, permisosAceptados: 6, permisosRechazados: 2, permisosPendientes: 2 },
      { usuario: 'maria@example.com', permisosSolicitados: 5, permisosAceptados: 3, permisosRechazados: 1, permisosPendientes: 1 },
    ];

    this.totalSolicitados = this.datosReporte.reduce((acc, d) => acc + d.permisosSolicitados, 0);
    this.totalAceptados = this.datosReporte.reduce((acc, d) => acc + d.permisosAceptados, 0);
    this.totalRechazados = this.datosReporte.reduce((acc, d) => acc + d.permisosRechazados, 0);

  }

  exportarExcel() {
    console.log('Exportando...');
  }
}

