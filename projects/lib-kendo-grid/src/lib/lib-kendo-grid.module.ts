import { NgModule } from '@angular/core';
import { MyPaginationModule } from './pagination/pagination.module';

@NgModule({
  imports: [
    MyPaginationModule
  ],
  declarations: [],
  exports: [
    MyPaginationModule
  ]
})
export class LibKendoGridModule { }
