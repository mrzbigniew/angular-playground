import { Directive, TemplateRef } from '@angular/core';
import { OnBoardingSliderService } from '../../services/on-boarding-slider.service';

@Directive({
  selector: '[onbSlide]'
})
export class OnBoardingSlideDirective {

  constructor(
    private slideService: OnBoardingSliderService,
    public templateRef: TemplateRef<any>,
  ) {
    this.slideService.registerSlide(this);
  }
}
