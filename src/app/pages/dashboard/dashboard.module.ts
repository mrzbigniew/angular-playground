import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule, MatButtonModule } from '@angular/material';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LibModule } from '../lib/lib.module';
import { OnBoardingModule } from '../on-boarding/on-boarding.module';
import { TestPipeModule } from '@shared/test-pipe/test-pipe.module';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    LibModule,
    MatCardModule,
    MatButtonModule,
    TranslateModule.forChild({}),
    OnBoardingModule,
    TestPipeModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
