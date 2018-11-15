import { TestBed, inject } from '@angular/core/testing';

import { OnBoardingModalService } from './on-boarding-modal.service';

describe('OnBoardingModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnBoardingModalService]
    });
  });

  it('should be created', inject([OnBoardingModalService], (service: OnBoardingModalService) => {
    expect(service).toBeTruthy();
  }));
});
