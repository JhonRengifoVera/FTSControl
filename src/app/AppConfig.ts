import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    importProvidersFrom(BrowserModule, HttpClientModule, RouterModule, AppRoutingModule, BrowserAnimationsModule),
  ],
};
