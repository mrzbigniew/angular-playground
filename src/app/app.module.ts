import { NgModule, APP_INITIALIZER, } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';

import { translationInitializerFactory } from './translationInitializerFactory';
import { translationLoaderFactory } from './translationLoaderFactory';

import { DashboardModule } from './dashboard/dashboard.module';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnBoardingModule } from './on-boarding/on-boarding.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UserModule,
    DashboardModule,
    HttpClientModule,
    OnBoardingModule,
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
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: translationInitializerFactory,
      deps: [
        TranslateService
      ]
    }
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
