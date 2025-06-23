import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobilecomponent';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BadgeModule } from 'primeng/badge';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    AngularSvgIconModule,
    NavbarMenuComponent,
    ProfileMenuComponent,
    NavbarMobileComponent,
    BadgeModule,
    OverlayPanelModule,
    ButtonModule,
    CommonModule
    
  ],
})
export class NavbarComponent implements OnInit {
  constructor(private menuService: MenuService) { }

  ngOnInit(): void { }

  members = [
    { name: 'Luis Salazar', image: 'amyelsner.png', descripcion: 'Permiso por cita medica', role: 'Owner' },
    { name: 'Stefania', image: 'bernardodominic.png', descripcion: 'Permiso por diligencias personales', role: 'Editor' },
    { name: 'Lorena', image: 'ionibowcher.png', descripcion: 'Permiso por enefermedad', role: 'Viewer' },
  ];

  public toggleMobileMenu(): void {
    this.menuService.showMobileMenu = true;
  }
}
