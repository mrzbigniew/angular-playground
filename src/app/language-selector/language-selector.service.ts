import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of, BehaviorSubject, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LanguageSelectorService extends BehaviorSubject<string> implements OnDestroy {
  private currentLanguageSubscription: Subscription;

  constructor(private translationService: TranslateService) {
    super(translationService.currentLang);
    this.subscribeToLangChange();
  }

  private subscribeToLangChange() {
    this.currentLanguageSubscription = this.translationService.onLangChange.subscribe(
      result => {
        this.next(
          result.lang
        );
      }
    );
  }

  ngOnDestroy() {
    if (this.currentLanguageSubscription) {
      this.currentLanguageSubscription.unsubscribe();
    }
  }

  getLangs(): Observable<string[]> {
    return of(this.translationService.getLangs());
  }

  useLanguage(lang: string) {
    this.translationService.use(
      lang
    );
    console.log(this.translationService);
  }
}
