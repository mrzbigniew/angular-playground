import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyListComponent } from './lazy-list/lazy-list.component';
import { LazyListItemTemplateDirective } from './directives/lazy-list-item-template.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LazyListComponent,
    LazyListItemTemplateDirective
  ],
  exports: [
    LazyListComponent,
    LazyListItemTemplateDirective
  ]
})
export class LazyListModule { }
