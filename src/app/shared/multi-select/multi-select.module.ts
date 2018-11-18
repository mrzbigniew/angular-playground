import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupModule } from '@progress/kendo-angular-popup';

import { MultiSelectComponent } from './multi-select/multi-select.component';
import { BadgeModule } from '@shared/badge/badge.module';
import { LazyListModule } from '@shared/lazy-list/lazy-list.module';

@NgModule({
  imports: [
    CommonModule,
    BadgeModule,
    PopupModule,
    LazyListModule
  ],
  declarations: [
    MultiSelectComponent
  ],
  exports: [
    MultiSelectComponent
  ]
})
export class MultiSelectModule { }
