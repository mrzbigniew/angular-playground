import { OnBoardingSliderOutletDirective } from './on-boarding-slider-outlet.directive';
import { ViewContainerRef } from '@angular/core';

describe('OnBoardingSliderOutletDirective', () => {
  it('should create an instance', () => {
    const directive = new OnBoardingSliderOutletDirective({
    } as ViewContainerRef);
    expect(directive).toBeTruthy();
  });
});
