import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBoardingSliderNavComponent } from './on-boarding-slider-nav.component';

describe('OnBoardingSliderNavComponent', () => {
  let component: OnBoardingSliderNavComponent;
  let fixture: ComponentFixture<OnBoardingSliderNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnBoardingSliderNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBoardingSliderNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
