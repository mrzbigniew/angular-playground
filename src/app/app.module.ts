import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { PopupModule } from '@progress/kendo-angular-popup';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';

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
    WebWorkerServiceModule,
    PopupModule,
    ExcelExportModule
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
