import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

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
    private dashboardService: DashboardService
  ) { }

  ngOnInit() {
  }


  openNgbModal() {
    this.dashboardService.openOnBoardingModal();
  }
}
