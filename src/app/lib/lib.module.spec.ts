import { LibModule } from './lib.module';

describe('LibModule', () => {
  let libModule: LibModule;

  beforeEach(() => {
    libModule = new LibModule();
  });

  it('should create an instance', () => {
    expect(libModule).toBeTruthy();
  });
});
