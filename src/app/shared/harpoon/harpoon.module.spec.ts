import { HarpoonModule } from './harpoon.module';

describe('HarpoonModule', () => {
  let harpoonModule: HarpoonModule;

  beforeEach(() => {
    harpoonModule = new HarpoonModule();
  });

  it('should create an instance', () => {
    expect(harpoonModule).toBeTruthy();
  });
});
