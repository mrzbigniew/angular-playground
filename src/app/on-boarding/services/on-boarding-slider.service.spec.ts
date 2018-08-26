import { TestBed, inject } from '@angular/core/testing';

import { OnBoardingSliderService } from './on-boarding-slider.service';

describe('OnBoardingSliderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnBoardingSliderService]
    });
  });

  it('should be created', inject([OnBoardingSliderService], (service: OnBoardingSliderService) => {
    expect(service).toBeTruthy();
  }));
});
