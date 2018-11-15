import { Component, OnInit, Injector, Inject, ReflectiveInjector } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { TestPipe } from 'src/app/shared/test-pipe/test.pipe';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [
    DashboardService
  ]
})
export class DashboardComponent implements OnInit {
  constructor(
    private dashboardService: DashboardService,
    private testPipe: TestPipe
  ) {
    const i = ReflectiveInjector.resolveAndCreate([TestPipe]);

   }

  ngOnInit() {
  }


  openNgbModal() {
    this.dashboardService.openOnBoardingModal();
  }
}
