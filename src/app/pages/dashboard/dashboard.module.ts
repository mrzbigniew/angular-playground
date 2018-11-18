import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LazyListModule } from '@shared/lazy-list/lazy-list.module';
import { MultiSelectModule } from '@shared/multi-select/multi-select.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TranslateModule.forChild(),
    MultiSelectModule,
    LazyListModule,
    FormsModule
  ]
})
export class DashboardModule { }
