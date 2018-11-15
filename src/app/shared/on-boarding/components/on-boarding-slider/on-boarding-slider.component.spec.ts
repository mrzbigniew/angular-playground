import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBoardingSliderComponent } from './on-boarding-slider.component';

describe('OnBoardingSliderComponent', () => {
  let component: OnBoardingSliderComponent;
  let fixture: ComponentFixture<OnBoardingSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnBoardingSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBoardingSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
