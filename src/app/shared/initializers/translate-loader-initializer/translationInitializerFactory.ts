import { TranslateService } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';
import { tap, switchMap, catchError, } from 'rxjs/operators';

export const translationInitializerFactory = (translateService: TranslateService): () => Promise<boolean> => {
  return (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
      translateService.addLangs(['en', 'pl', 'un']);
      forkJoin(
        translateService.reloadLang('en'),
        translateService.reloadLang('pl'),
        translateService.reloadLang('un')
      ).pipe(
        tap(() => translateService.setDefaultLang('en')),
        switchMap(() => translateService.use(
          translateService.getDefaultLang()
        ))
      ).subscribe(
        () => resolve(),
        () => reject()
      );
    });
  };
};
