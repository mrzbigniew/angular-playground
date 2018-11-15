import { LanguageSelectorModule } from './language-selector.module';

describe('LanguageSelectorModule', () => {
  let languageSelectorModule: LanguageSelectorModule;

  beforeEach(() => {
    languageSelectorModule = new LanguageSelectorModule();
  });

  it('should create an instance', () => {
    expect(languageSelectorModule).toBeTruthy();
  });
});
