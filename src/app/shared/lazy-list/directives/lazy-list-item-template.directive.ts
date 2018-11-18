import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[lazyListItemTemplate]'
})
export class LazyListItemTemplateDirective {

  constructor(
    public templateRef: TemplateRef<any>
  ) {}
}
