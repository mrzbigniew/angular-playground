import { Component, OnInit, OnDestroy } from '@angular/core';
import { LanguageSelectorService } from './language-selector.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit, OnDestroy {
  private currentLanguageSubscription: Subscription;

  currentLang: string;
  langList: string[] = [];

  constructor(
    private selectorService: LanguageSelectorService
  ) { }

  ngOnInit() {
    this.initLangs();
    this.initCurrentLangSubscription();
  }

  ngOnDestroy(): void {
    if (this.currentLanguageSubscription) {
      this.currentLanguageSubscription.unsubscribe();
    }
  }

  initLangs() {
    this.selectorService.getLangs().subscribe(
      (langs) => this.langList = langs
    );
  }

  initCurrentLangSubscription() {
    this.currentLanguageSubscription = this.selectorService.asObservable().subscribe(
      lang => this.currentLang = lang
    );
  }

  changeLanguage(lang: string) {
    this.selectorService.useLanguage(lang);
  }
}
