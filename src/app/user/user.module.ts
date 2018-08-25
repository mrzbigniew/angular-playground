import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoginFormModule } from './login-form/login-form.module';
import { RegisterFormModule } from './register-form/register-form.module';

@NgModule({
  imports: [
    CommonModule,
    LoginFormModule,
    RegisterFormModule
  ],
  exports: [
    LoginFormModule,
    RegisterFormModule
  ]
})
export class UserModule { }
