import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OnBoardingSliderEmiterData } from '../models/on-boarding-slider-emiter-data.model';
import { OnBoardingSlideDirective } from '../components/on-boarding-slide/on-boarding-slide.directive';

@Injectable()
export class OnBoardingSliderService extends BehaviorSubject<OnBoardingSliderEmiterData> {
  private slides: OnBoardingSlideDirective[] = [];
  private currentSlideIndex: number = 0;

  private emitChange() {
    this.next(<OnBoardingSliderEmiterData>{
      count: this.getSlidersCount(),
      index: this.getCurrentSlideIndex(),
      slide: this.getCurrentSlide()
    });
  }

  constructor() {
    super(<OnBoardingSliderEmiterData>{
      index: null,
      count: null,
      slide: null
    });
  }

  getSliderData(): Observable<OnBoardingSliderEmiterData> {
    return this.asObservable();
  }

  getSlidersCount(): number {
    return this.slides.length;
  }

  getCurrentSlide(): OnBoardingSlideDirective {
    return this.slides[this.currentSlideIndex];
  }

  getCurrentSlideIndex(): number {
    return this.currentSlideIndex;
  }

  nextSlide() {
    if (this.getSlidersCount() - 1 > this.getCurrentSlideIndex()) {
      this.currentSlideIndex = this.getCurrentSlideIndex() + 1;
      this.emitChange();
    }
  }

  previousSlide() {
    if (this.getCurrentSlideIndex() > 0) {
      this.currentSlideIndex = this.getCurrentSlideIndex() - 1;
      this.emitChange();
    }
  }

  registerSlide(slide: OnBoardingSlideDirective) {
    if (!this.slides.length) {
      this.currentSlideIndex = 0;
    }
    this.slides.push(
      slide
    );
    this.emitChange()
  }
}
