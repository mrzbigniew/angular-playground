import { Component, OnInit, Output, EventEmitter, OnDestroy, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { Subscription } from 'rxjs';

import { OnBoardingSliderService } from '../../services/on-boarding-slider.service';
import { OnBoardingSlideComponent } from '../on-boarding-slide/on-boarding-slide.component';
import { OnBoardingSliderEmiterData } from '../../models/on-boarding-slider-emiter-data.model';
import { OnBoardingSliderOutletDirective } from './on-boarding-slider-outlet.directive';
import { OnBoardingSlideDirective } from '../on-boarding-slide/on-boarding-slide.directive';
import { OnBoardingSliderElementComponent } from '../on-boarding-slider-element/on-boarding-slider-element.component';

@Component({
  selector: 'onb-slider',
  templateUrl: './on-boarding-slider.component.html',
  styleUrls: ['./on-boarding-slider.component.scss'],
  entryComponents: [
    OnBoardingSliderElementComponent
  ],
  providers: [
    OnBoardingSliderService
  ]
})
export class OnBoardingSliderComponent implements OnInit, OnDestroy {
  private sliderServiceSubscription: Subscription;

  @Output() sliderChange: EventEmitter<OnBoardingSliderEmiterData> = new EventEmitter();
  @ViewChild(OnBoardingSliderOutletDirective) sliderOutlet: OnBoardingSliderOutletDirective;

  constructor(
    private sliderService: OnBoardingSliderService,
    private componentResolver: ComponentFactoryResolver
  ) { }

  private subscribeToSlideService() {
    this.sliderServiceSubscription = this.sliderService.getSliderData().subscribe(
      data => {
        this.showSlide(data.slide);
        this.sliderChange.emit(data);
      }
    );
  }

  private showSlide(slide: OnBoardingSlideDirective) {
    if (slide) {
      this.sliderOutlet.viewContainerRef.clear();
      const sliderElementComponentFactory = this.componentResolver.resolveComponentFactory<OnBoardingSliderElementComponent>(OnBoardingSliderElementComponent);
      const sliderElementComponentRef = this.sliderOutlet.viewContainerRef.createComponent<OnBoardingSliderElementComponent>(sliderElementComponentFactory);
      sliderElementComponentRef.instance.contentViewContainerRef.clear();
      sliderElementComponentRef.instance.contentViewContainerRef.createEmbeddedView(slide.templateRef);
    }
  }

  private unsubscribeFromSubscriptions() {
    if (this.sliderServiceSubscription) {
      this.sliderServiceSubscription.unsubscribe()
    }
  }

  ngOnInit() {
    this.subscribeToSlideService();
  }

  ngOnDestroy() {
    this.unsubscribeFromSubscriptions();
  }

  registerSlide(slide: OnBoardingSlideDirective) {
    this.sliderService.registerSlide(slide);
  }

  nextSlide() {
    this.sliderService.nextSlide();
  }

  previousSlide() {
    this.sliderService.previousSlide();
  }
}
