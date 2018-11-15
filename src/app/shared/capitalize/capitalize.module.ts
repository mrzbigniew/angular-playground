import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapitalizePipe } from './pipe/capitalize.pipe';
import { CapitalizeDirective } from './directive/capitalize.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CapitalizePipe,
    CapitalizeDirective
  ],
  exports: [
   CapitalizePipe,
   CapitalizeDirective
  ]
})
export class CapitalizeModule { }
