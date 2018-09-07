import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagerModule } from '@progress/kendo-angular-grid';

import { MyPaginationComponent } from './pagination/pagination.component';
import { MyPagerInfoComponent } from './pager-info/pager-info.component';

@NgModule({
  imports: [
    CommonModule,
    PagerModule
  ],
  declarations: [
    MyPaginationComponent,
    MyPagerInfoComponent
  ],
  exports: [
    MyPaginationComponent
  ]
})
export class MyPaginationModule { }
