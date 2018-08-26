import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';

import { OnBoardingWindowComponent } from './components/on-boarding-window/on-boarding-window.component';
import { OnBoardingWindowHeaderComponent } from './components/on-boarding-window-header/on-boarding-window-header.component';
import { OnBoardingWindowContentComponent } from './components/on-boarding-window-content/on-boarding-window-content.component';
import { OnBoardingWindowFooterComponent } from './components/on-boarding-window-footer/on-boarding-window-footer.component';
import { OnBoardingComponent } from './components/on-boarding/on-boarding.component';
import { OnBoardingModalService } from './services/on-boarding-modal.service';
import { OnBoardingSliderComponent } from './components/on-boarding-slider/on-boarding-slider.component';
import { OnBoardingSliderNavComponent } from './components/on-boarding-slider-nav/on-boarding-slider-nav.component';
import { OnBoardingSliderPaginationComponent } from './components/on-boarding-slider-pagination/on-boarding-slider-pagination.component';
import { OnBoardingSliderPaginationItemComponent } from './components/on-boarding-slider-pagination-item/on-boarding-slider-pagination-item.component';
import { OnBoardingSliderOutletDirective } from './components/on-boarding-slider/on-boarding-slider-outlet.directive';
import { OnBoardingSliderPaginationItemTemplateDirective } from './components/on-boarding-slider-pagination-item/on-boarding-slider-pagination-item-template.directive';
import { OnBoardingSlideComponent } from './components/on-boarding-slide/on-boarding-slide.component';
import { OnBoardingSliderContentComponent } from './components/on-boarding-slider-content/on-boarding-slider-content.component';
import { OnBoardingSlideDirective } from './components/on-boarding-slide/on-boarding-slide.directive';
import { OnBoardingSliderElementComponent } from './components/on-boarding-slider-element/on-boarding-slider-element.component';
import { SlideOneComponent } from './slides/slide-one/slide-one.component';
import { SlideTwoComponent } from './slides/slide-two/slide-two.component';
import { SlideThreeComponent } from './slides/slide-three/slide-three.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModalModule.forRoot(),
    TranslateModule.forChild({}),
    MatButtonModule
  ],
  declarations: [
    OnBoardingWindowComponent,
    OnBoardingWindowHeaderComponent,
    OnBoardingWindowContentComponent,
    OnBoardingWindowFooterComponent,
    OnBoardingComponent,
    OnBoardingSliderComponent,
    OnBoardingSliderNavComponent,
    OnBoardingSliderPaginationComponent,
    OnBoardingSliderPaginationItemComponent,
    OnBoardingSliderOutletDirective,
    OnBoardingSliderPaginationItemTemplateDirective,
    OnBoardingSliderContentComponent,
    OnBoardingSlideComponent,
    OnBoardingSlideDirective,
    OnBoardingSliderElementComponent,
    SlideOneComponent,
    SlideTwoComponent,
    SlideThreeComponent
  ],
  providers: [
    OnBoardingModalService
  ],
  exports: [
    OnBoardingWindowComponent,
    OnBoardingWindowHeaderComponent,
    OnBoardingWindowContentComponent,
    OnBoardingWindowFooterComponent,
    OnBoardingComponent,
    OnBoardingSliderComponent,
    OnBoardingSliderNavComponent,
    OnBoardingSliderPaginationComponent,
    OnBoardingSliderPaginationItemComponent,
    OnBoardingSliderOutletDirective,
    OnBoardingSliderPaginationItemTemplateDirective,
    OnBoardingSlideComponent,
    OnBoardingSliderContentComponent,
    OnBoardingSlideDirective
  ],
  entryComponents: [
    OnBoardingComponent,
    SlideOneComponent,
    SlideTwoComponent,
    SlideThreeComponent
  ]
})
export class OnBoardingModule { }
