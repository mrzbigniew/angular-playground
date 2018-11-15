import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[onbSliderOutlet]'
})
export class OnBoardingSliderOutletDirective {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }

}
