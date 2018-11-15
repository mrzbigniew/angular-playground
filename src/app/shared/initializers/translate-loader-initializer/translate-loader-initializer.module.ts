import { NgModule, ModuleWithProviders, SkipSelf, Optional, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { translationInitializerFactory } from './translationInitializerFactory';
import { translationLoaderFactory } from './translationLoaderFactory';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      useDefaultLang: true,
      loader: {
        provide: TranslateLoader,
        useFactory: translationLoaderFactory,
        deps: [
          HttpClient
        ]
      }
    })
  ]
})
export class TranslateLoaderInitializerModule {
  constructor(@Optional() @SkipSelf() self: TranslateLoaderInitializerModule) {
    if (self) {
      throw new Error('TranslateLoaderInitializerModule already exists');
    }
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: TranslateLoaderInitializerModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          multi: true,
          useFactory: translationInitializerFactory,
          deps: [
            TranslateService
          ]
        }
      ]
    };
  }
}
