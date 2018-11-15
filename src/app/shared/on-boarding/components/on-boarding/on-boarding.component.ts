import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { OnBoardingTemplateComponent } from '../../tamplates/on-boarding-template-componet';
import { OnBardingSliderComponentsList } from '../../tokens/on-boarding-slider-components-list';

@Component({
  selector: 'onb-on-boarding',
  templateUrl: './on-boarding.component.html',
  styleUrls: ['./on-boarding.component.scss']
})
export class OnBoardingComponent extends OnBoardingTemplateComponent implements OnInit {
  constructor(
    private activeModal: NgbActiveModal,
    public componentsList: OnBardingSliderComponentsList
  ) {
    super()
  }

  ngOnInit() {
  }

  close() {
    this.activeModal.dismiss();
  }
}
