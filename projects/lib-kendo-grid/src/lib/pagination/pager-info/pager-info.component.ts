import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PagerInfoComponent } from "@progress/kendo-angular-grid";
import { PagerContextService } from '@progress/kendo-angular-grid/dist/es2015/pager/pager-context.service';
import { LocalizationService } from '@progress/kendo-angular-l10n';

@Component({
  selector: 'lkg-pager-info',
  templateUrl: './pager-info.component.html',
  styleUrls: ['./pager-info.component.scss']
})
export class MyPagerInfoComponent extends PagerInfoComponent implements OnInit {

  constructor(localization: LocalizationService, cd: ChangeDetectorRef, pagerContext: PagerContextService) {
    super(localization, cd, pagerContext);
  }

  ngOnInit() {
  }

}
