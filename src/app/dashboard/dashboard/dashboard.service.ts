import { Injectable } from '@angular/core';
import { OnBoardingModalService } from '../../on-boarding/services/on-boarding-modal.service';
import { Observable, of } from 'rxjs';
import { OnBoardingComponent } from '../../on-boarding/components/on-boarding/on-boarding.component';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private onBoardingService: OnBoardingModalService
  ) { }

  openOnBoardingModal(): Observable<any> {
    return this.onBoardingService.openOneTwoThreeOnBoarding();
  }
}
