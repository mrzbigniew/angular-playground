import { TranslateService } from "@ngx-translate/core";
import { forkJoin } from "rxjs";

export const translationInitializerFactory: (translate: TranslateService) => () => Promise<boolean> = (translateService: TranslateService) => {
  return (): Promise<boolean> => {
    return new Promise<boolean>((resolver, rejector) => {
      translateService.addLangs(['en', 'pl', 'un']);
      forkJoin(
        translateService.reloadLang('en'),
        translateService.reloadLang('pl'),
        translateService.reloadLang('un')
      ).subscribe(
        () => {
          translateService.setDefaultLang('en');
          translateService.use(
            translateService.getDefaultLang()
          ).subscribe(
            () => resolver(true)
          )
        }
      );
    });
  }
}