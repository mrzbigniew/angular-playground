import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { OnBoardingSliderService } from '../../services/on-boarding-slider.service';
import { Subscription } from 'rxjs';
import { OnBoardingCloseReason } from '../../models/on-boarding-close-reason.enum';

@Component({
  selector: 'onb-slider-nav',
  templateUrl: './on-boarding-slider-nav.component.html',
  styleUrls: ['./on-boarding-slider-nav.component.scss']
})
export class OnBoardingSliderNavComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  slidesCount: number = 0;
  currentSlideIndex: number = 0;

  @Output() close: EventEmitter<OnBoardingCloseReason> = new EventEmitter();
  @Output() finish: EventEmitter<void> = new EventEmitter();

  constructor(
    private changeRef: ChangeDetectorRef,
    private sliderService: OnBoardingSliderService
  ) { }

  private removeSubscriptions() {
    while (this.subscriptions.length) {
      this.subscriptions.pop().unsubscribe();
    }
  }

  private subscribeToSliderService() {
    this.subscriptions.push(
      this.sliderService.getSliderData().subscribe(
        result => {
          this.slidesCount = result.count;
          this.currentSlideIndex = result.index;
          this.changeRef.markForCheck();
        }
      )
    )
  }

  ngOnInit() {
    this.subscribeToSliderService();
  }

  ngOnDestroy() {
    this.removeSubscriptions();
  }

  skipClick() {
    this.close.emit(OnBoardingCloseReason.skip);
  }

  finishClick() {
    this.close.emit(OnBoardingCloseReason.finish);
  }

  nextClick() {
    this.sliderService.nextSlide();
  }

  previousClick() {
    this.sliderService.previousSlide();
  }
}
