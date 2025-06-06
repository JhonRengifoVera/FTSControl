import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ToastService } from 'src/app/core/services/toast-service.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    AngularSvgIconModule,
    NgClass,
    NgIf,
    ButtonComponent,
    ToastModule,
    CardModule,
    PasswordModule,
    InputTextModule,
  ], providers: [ToastService, MessageService]
})
export class SignInComponent {
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;
  loading: boolean = false;
  usuario: string = '';
  contrasena: string = '';
  router = inject(Router);
  toastService = inject(ToastService);
  messageService = inject(MessageService);

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.initForm();
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      contrasena: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }
  
  redirigir () {
    this.router.navigate(['paginas/inicio'])
  }

  iniciarSesion() {
    this.loading = true;
    this.submitted = true;
    const { usuario, contrasena } = this.form.value;
    this.save(usuario + contrasena)
  }

  save(detail: string) {
    this.toastService.showToast({
      titulo: 'Error',
      tipo: 'error',
      mensaje: detail
    });
  }
}
