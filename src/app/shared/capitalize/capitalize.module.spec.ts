import { CapitalizeModule } from './capitalize.module';

describe('CapitalizeModule', () => {
  let capitalizeModule: CapitalizeModule;

  beforeEach(() => {
    capitalizeModule = new CapitalizeModule();
  });

  it('should create an instance', () => {
    expect(capitalizeModule).toBeTruthy();
  });
});
