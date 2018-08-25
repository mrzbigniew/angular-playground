import { OnBoardingModule } from './on-boarding.module';

describe('OnBoardingModule', () => {
  let onBoardingModule: OnBoardingModule;

  beforeEach(() => {
    onBoardingModule = new OnBoardingModule();
  });

  it('should create an instance', () => {
    expect(onBoardingModule).toBeTruthy();
  });
});
