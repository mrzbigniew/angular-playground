import { Injectable, Injector, StaticProvider, forwardRef } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { from, Observable } from 'rxjs';

import { OnBoardingComponent } from '../components/on-boarding/on-boarding.component';
import { OnBoardingTemplateComponent } from '../tamplates/on-boarding-template-componet';
import { SlideOneComponent } from '../slides/slide-one/slide-one.component';
import { SlideTwoComponent } from '../slides/slide-two/slide-two.component';
import { SlideThreeComponent } from '../slides/slide-three/slide-three.component';
import { OnBardingSliderComponentsList } from '../tokens/on-boarding-slider-components-list';

@Injectable({
  providedIn: 'root'
})
export class OnBoardingModalService {

  constructor(
    private modalService: NgbModal,
    private injector: Injector
  ) { }

  openOnBoardingModal(
    templateComponent: OnBoardingTemplateComponent = OnBoardingComponent,
    componentsList: any[]
  ): Observable<any> {
    return from(
      this.modalService.open(
        templateComponent,
        <NgbModalOptions>{
          size: 'lg',
          backdrop: 'static',
          keyboard: false,
          windowClass: 'onb__modal_window',
          injector: Injector.create([
            {
              provide: OnBardingSliderComponentsList,
              useValue: componentsList,
              deps: []
            }
          ], this.injector)
        }
      ).result
    )
  }

  openOneTwoThreeOnBoarding(): Observable<any> {
    return this.openOnBoardingModal(
      OnBoardingComponent,
      [
        SlideOneComponent,
        SlideTwoComponent,
        SlideThreeComponent
      ]
    )
  }
}
