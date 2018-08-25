import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { OnBoardingWindowComponent } from './components/on-boarding-window/on-boarding-window.component';
import { OnBoardingWindowHeaderComponent } from './components/on-boarding-window-header/on-boarding-window-header.component';
import { OnBoardingWindowContentComponent } from './components/on-boarding-window-content/on-boarding-window-content.component';
import { OnBoardingWindowFooterComponent } from './components/on-boarding-window-footer/on-boarding-window-footer.component';
import { OnBoardingComponent } from './components/on-boarding/on-boarding.component';
import { OnBoardingModalService } from './services/on-boarding-modal.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModalModule.forRoot()
  ],
  declarations: [
    OnBoardingWindowComponent,
    OnBoardingWindowHeaderComponent,
    OnBoardingWindowContentComponent,
    OnBoardingWindowFooterComponent,
    OnBoardingComponent
  ],
  providers: [
    OnBoardingModalService
  ],
  exports: [
    OnBoardingWindowComponent,
    OnBoardingWindowHeaderComponent,
    OnBoardingWindowContentComponent,
    OnBoardingWindowFooterComponent,
    OnBoardingComponent
  ],
  entryComponents: [
    OnBoardingComponent
  ]
})
export class OnBoardingModule { }
