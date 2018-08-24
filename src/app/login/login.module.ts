import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

import { LoginRoutingModule } from './login-routing.module';
import { LoginFormModule } from '../user/login-form/login-form.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    LoginFormModule,
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
