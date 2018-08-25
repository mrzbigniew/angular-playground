import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

import { LoginRoutingModule } from './login-routing.module';
import { LoginFormModule } from '../user/login-form/login-form.module';
import { MatCardModule } from '@angular/material';
import { LanguageSelectorModule } from '../language-selector/language-selector.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    LoginFormModule,
    MatCardModule,
    LanguageSelectorModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
