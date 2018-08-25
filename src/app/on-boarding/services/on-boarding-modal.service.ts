import { Injectable } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { from, Observable } from 'rxjs';
import { OnBoardingComponent } from '../components/on-boarding/on-boarding.component';

@Injectable({
  providedIn: 'root'
})
export class OnBoardingModalService {

  constructor(
    private modalService: NgbModal
  ) { }

  openOnBoardingNgbModal(component?: any): Observable<any> {
    return from(
      this.modalService.open(
        component ? component : OnBoardingComponent,
        <NgbModalOptions>{
          size: 'lg',
          backdrop: 'static',
          keyboard: false,
          windowClass: 'onb__modal_window'
        }
      ).result
    )
  }
}
