import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { ExcelExporterService } from './excel-exporter.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ExcelExportModule
  ],
  providers: [
    ExcelExporterService
  ]
})
export class ExcelExporterModule { }
