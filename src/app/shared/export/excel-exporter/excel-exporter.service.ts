import { Injectable } from '@angular/core';
import { Workbook } from '@progress/kendo-ooxml';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExcelExporterService {

  constructor() { }

  export() {
    const workbook = new Workbook({
      sheets: [{
        columns: [{
          autoWidth: true,
        }],
        name: 'export',
        rows: [
          {
            cells: [
              {
                colSpan: 4,
                value: 'a'
              }, {
                colSpan: 2,
                value: 'b'
              }
            ]
          },
          {
            cells: [
              {
                value: 'c',
              },
              {
                value: 'b'
              },
              {
                value: 'd'
              },
              {
                value: 'e'
              },
              {
                value: 'f'
              },
              {
                value: 'g'
              },
              {
                value: 'h'
              },
            ]
          }
        ]
      }]
    });

    from(workbook.toDataURL()).subscribe(
      data => window.open(data, '_blank')
    );
  }
}
