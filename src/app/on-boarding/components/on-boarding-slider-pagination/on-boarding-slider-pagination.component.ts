import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef, Input, ElementRef, TemplateRef } from '@angular/core';
import { OnBoardingSliderService } from '../../services/on-boarding-slider.service';
import { Subscription } from 'rxjs';

import { OnBoardingSliderPaginationItemTemplateDirective } from '../on-boarding-slider-pagination-item/on-boarding-slider-pagination-item-template.directive';
import { map } from 'rxjs/operators';
import { OnBoardingSliderEmiterData } from '../../models/on-boarding-slider-emiter-data.model';
import { OnBoardingPaginationItemData } from '../../models/on-boarding-pagination-item-data.model';

@Component({
  selector: 'onb-slider-pagination',
  templateUrl: './on-boarding-slider-pagination.component.html',
  styleUrls: ['./on-boarding-slider-pagination.component.scss']
})
export class OnBoardingSliderPaginationComponent implements OnInit, OnDestroy {
  @Input() itemTemplate: TemplateRef<any> = null;

  paginationItems: OnBoardingPaginationItemData[] = [];

  private sliderSubscription: Subscription;

  constructor(
    private sliderService: OnBoardingSliderService,
    private changeRef: ChangeDetectorRef
  ) { }

  private unsubscribeSubscriptions() {
    if (this.sliderSubscription) {
      this.sliderSubscription.unsubscribe();
    }
  }

  private subscribeToSlider() {
    this.sliderSubscription = this.sliderService.getSliderData().pipe(
      map<OnBoardingSliderEmiterData, OnBoardingPaginationItemData[]>(
        data => new Array(data.count).fill(null).map(
          (item, index) => (<OnBoardingPaginationItemData>{
            index: index,
            current: index === data.index
          })
        )
      )
    ).subscribe(
      data => {
        this.paginationItems = data;
        this.changeRef.markForCheck();
      }
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.unsubscribeSubscriptions();
  }
}
