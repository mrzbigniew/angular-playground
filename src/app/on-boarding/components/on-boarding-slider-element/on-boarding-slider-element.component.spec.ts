import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBoardingSliderElementComponent } from './on-boarding-slider-element.component';

describe('OnBoardingSliderElementComponent', () => {
  let component: OnBoardingSliderElementComponent;
  let fixture: ComponentFixture<OnBoardingSliderElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnBoardingSliderElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBoardingSliderElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
