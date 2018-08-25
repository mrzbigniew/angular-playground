import { Injectable } from '@angular/core';
import { OnBoardingModalService } from '../../on-boarding/services/on-boarding-modal.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private onBoardingService: OnBoardingModalService
  ) { }

  openOnBoardingModal(): Observable<any> {
    return this.onBoardingService.openOnBoardingNgbModal();
  }
}
