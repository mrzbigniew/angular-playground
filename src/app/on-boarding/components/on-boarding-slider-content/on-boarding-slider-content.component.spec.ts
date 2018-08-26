import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBoardingSliderContentComponent } from './on-boarding-slider-content.component';

describe('OnBoardingSliderContentComponent', () => {
  let component: OnBoardingSliderContentComponent;
  let fixture: ComponentFixture<OnBoardingSliderContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnBoardingSliderContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBoardingSliderContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
