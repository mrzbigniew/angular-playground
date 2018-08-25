import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule, MatButtonModule } from '@angular/material';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LibModule } from '../lib/lib.module';
import { OnBoardingModule } from '../on-boarding/on-boarding.module';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    LibModule,
    MatCardModule,
    MatButtonModule,
    TranslateModule.forChild({}),
    OnBoardingModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
