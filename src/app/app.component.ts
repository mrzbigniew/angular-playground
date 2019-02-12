import { Component, OnInit } from '@angular/core';

import { ExcelExporterService } from '@shared/export/excel-exporter/excel-exporter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private exporter: ExcelExporterService) {

  }

  ngOnInit() {
    this.exporter.export();
  }
}
