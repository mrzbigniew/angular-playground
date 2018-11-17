import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { TranslateLoaderInitializerModule } from '@shared/initializers/translate-loader-initializer/translate-loader-initializer.module';
import { WebWorkerServiceModule } from '@shared/web-worker-service/web-worker-service.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TranslateLoaderInitializerModule.forRoot(),
    AppRoutingModule,
    WebWorkerServiceModule
  ],
  providers: [],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
