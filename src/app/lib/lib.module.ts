import { NgModule } from '@angular/core';

import { CapitalizeModule } from './capitalize/capitalize.module';

@NgModule({
  imports: [
    CapitalizeModule
  ],
  exports: [
    CapitalizeModule
  ]
})
export class LibModule { }
