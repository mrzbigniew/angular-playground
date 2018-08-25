import { Directive, Input, ElementRef, AfterContentInit, TemplateRef, ViewContainerRef, Renderer } from '@angular/core';
import { capitalizeTransformer } from '../functions/capitalizeTransformer';

@Directive({
  selector: '[capitalize]'
})
export class CapitalizeDirective {
  @Input('capitalize') set value(value: string) {
    this.renderer.setElementProperty(
      this.el.nativeElement,
      'innerHTML',
      capitalizeTransformer(value)
    )
  }

  constructor( 
    private el: ElementRef,
    private renderer: Renderer
  ) { }
}
