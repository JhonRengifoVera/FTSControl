import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

interface TimelineEvent {
  title: string;
  description: string;
  date: string;
  icon?: string;
  color?: string;
}
@Component({
  selector: 'app-actualizar-informacion',
  standalone: true,
  imports: [
    ButtonComponent, CommonModule,TabViewModule,
    AvatarModule, TagModule, CardModule, 
  ],
  templateUrl: './actualizar-informacion.component.html',
  styleUrl: './actualizar-informacion.component.scss'
})
export class ActualizarInformacionComponent {
  activeTabIndex: number = 0; 

  empleado = {
    nombre: 'Jhon Jairo Rengifo Vera',
    cargo: 'Ingeniero de desarrollo',
    telefono: '3162202520',
    email: 'jhon.rengifo@ftstecnologia.com.co',
    departamento: 'Software',
    jefeDirecto: 'Efraim Sandoval',
    estado: 'Activo'
  };

  // Eventos del timeline para el historial laboral
  timelineEvents: TimelineEvent[] = [
    {
      title: 'Promoción a Senior Developer',
      description: 'Ascenso por excelente desempeño y liderazgo en proyectos críticos',
      date: 'Enero 2024',
      icon: 'pi pi-star',
      color: '#4CAF50'
    },
    {
      title: 'Finalización Curso Angular Avanzado',
      description: 'Completó certificación en Angular con calificación sobresaliente',
      date: 'Agosto 2023',
      icon: 'pi pi-graduation-cap',
      color: '#2196F3'
    },
    {
      title: 'Liderazgo Proyecto E-commerce',
      description: 'Lideró exitosamente el desarrollo del nuevo sistema de ventas online',
      date: 'Marzo 2023',
      icon: 'pi pi-users',
      color: '#FF9800'
    },
    {
      title: 'Ingreso a la Empresa',
      description: 'Inicio como Desarrollador Junior en el equipo de Software',
      date: 'Marzo 2022',
      icon: 'pi pi-briefcase',
      color: '#9C27B0'
    }
  ];

  tabs = [
    { header: 'Información Laboral', icon: 'pi pi-briefcase' },
    { header: 'Información Personal', icon: 'pi pi-user' },
    { header: 'Datos RRHH', icon: 'pi pi-users' }
  ];

  // Datos adicionales para las pestañas
  datosLaborales = {
    cargo: 'Ingeniero de desarrollo',
    fechaIngreso: '15 de marzo, 2022',
    tipoContrato: 'Indefinido',
    jornada: 'Tiempo completo',
    competencias: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL']
  };

  datosPersonales = {
    cedula: '1234567890',
    numeroEmergencia: '31262202520',
    fechaNacimiento: '25 de enero, 1990',
    estadoCivil: 'Soltero',
    direccion: 'Calle 123 #45-67, Tuluá'
  };

  datosRRHH = {
    idEmpleado: 'EMP-2024-001',
    centroCosto: 'TI-DEV-001',
    salarioBase: '$3,500,000',
    diasVacaciones: '15 disponibles'
  };

  constructor() { }

  ngOnInit(): void {
    // Aquí puedes cargar los datos del empleado desde un servicio
    this.loadEmployeeData();
  }

  loadEmployeeData(): void {
    // Simulación de carga de datos
    // En un caso real, aquí harías una llamada a tu servicio
    console.log('Cargando datos del empleado...');
  }

  onEditProfile(): void {
    // Lógica para editar el perfil
    console.log('Editar perfil');
  }

  onMoreOptions(): void {
    // Lógica para más opciones
    console.log('Más opciones');
  }

  // Método para actualizar información del empleado
  updateEmployeeInfo(field: string, value: any): void {
    // Lógica para actualizar información
    console.log(`Actualizando ${field}:`, value);
  }

  getTabStyleClass(index: number): string {
    const baseClass = 'transition-all font-montserrat text-black capitalize text-xs lg:text-sm text-foreground bg-background trans';
    const activeClass = 'transition-all font-bold capitalize border-b-4 border-red-600 text-xs lg:text-sm font-montserrat text-foreground bg-background';

    return this.activeTabIndex === index ? activeClass : baseClass;
  }

}