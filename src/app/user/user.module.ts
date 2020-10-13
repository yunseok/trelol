import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GoogleSigninDirective } from './google-signin.directive';

import { LoginComponent } from './login/login.component';
import { EmailLoginComponent } from './email-login/email-login.component';

import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [LoginComponent, GoogleSigninDirective, EmailLoginComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
