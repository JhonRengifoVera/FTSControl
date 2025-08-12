import { Component } from '@angular/core';
import { ThemeService } from './core/services/theme.service';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { primeNgTranslation } from './core/constants/primeNgTranslation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NgClass, RouterOutlet, HttpClientModule, ToastModule],
  providers: [MessageService]
})
export class AppComponent {
  title = 'Easyroad';

  constructor(public themeService: ThemeService, private primengConfig: PrimeNGConfig) { }


  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.primengConfig.zIndex = {
      modal: 1100, // dialog, sidebar
      overlay: 1200, // dropdown, overlaypanel
      menu: 1200, // overlay menus
      tooltip: 1100, // tooltip
    };
    this.primengConfig.setTranslation(primeNgTranslation);
  }
}
