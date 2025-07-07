import { Component, inject } from '@angular/core';
import { StatsCardComponent } from 'src/app/core/utils/stats-card/stats-card.component';
import { AnimacionContadoresService } from 'src/app/core/services/animacionContadores.service';
import { TableModule } from 'primeng/table';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { ModalComponent } from 'src/app/core/utils/modal/modal.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-administracion-roles',
  standalone: true,
  imports: [
    StatsCardComponent, TableModule, ButtonComponent,
    ModalComponent, ReactiveFormsModule, CommonModule
  ],
  templateUrl: './administracion-roles.component.html',
  styleUrl: './administracion-roles.component.scss'
})
export class AdministracionRolesComponent {
  animacionService = inject(AnimacionContadoresService);

  contadorPerfiles: number = 0;
  perfilesActivos: number = 21;

  contadorCargos: number = 0;
  cargosActivos: number = 15;

  contadorDepartamentos: number = 0;
  departamentosActivos: number = 19;
  perfilesData: any;
  camposInput: any;
  camposConfig: any;
  showModal = false;
  form!: FormGroup;

  tipoModal: 'perfil' | 'cargo' | 'departamento' | null = null;

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.animacionService.animateCounter(this, 'contadorPerfiles', this.perfilesActivos, 2);
    this.animacionService.animateCounter(this, 'contadorCargos', this.cargosActivos, 2);
    this.animacionService.animateCounter(this, 'contadorDepartamentos', this.departamentosActivos, 2);

    this.perfilesData = [
      { id: 1, nombre: '1', fechaCreacion: '1' },
      { id: 2, nombre: '1', fechaCreacion: '1' },
      { id: 3, nombre: '1', fechaCreacion: '1' },
      { id: 4, nombre: '1', fechaCreacion: '1' },
      { id: 5, nombre: '1', fechaCreacion: '1' },
    ]

    this.camposConfig = {
      perfil: [
        { label: 'Nombre del perfil', formControlName: 'nombre', enabled: true },
        { label: 'Descripción', formControlName: 'descripcion', enabled: true },
        { label: 'Código', formControlName: 'codigo', enabled: false },
        { label: 'Director', formControlName: 'director', enabled: false },
      ],
      cargo: [
        { label: 'Nombre del cargo', formControlName: 'nombre', enabled: true },
        { label: 'Departamento', formControlName: 'departamento', enabled: true },
        { label: 'Descripción', formControlName: 'descripcion', enabled: true },
      ],
      departamento: [
        { label: 'Nombre del departamento', formControlName: 'nombre', enabled: true },
        { label: 'Código', formControlName: 'codigo', enabled: true },
      ]
    };
  }

  abrirModal(tipo: 'perfil' | 'cargo' | 'departamento') {
    this.tipoModal = tipo;
    this.camposInput = this.camposConfig[tipo] || [];
    const controls: any = {};
    this.camposInput.forEach((campo: any) => {
      controls[campo.formControlName] = [''];
    });
    this.form = this.fb.group(controls);
    this.showModal = true;
  }

  cerrarModal() {
    this.showModal = false;
  }
}
