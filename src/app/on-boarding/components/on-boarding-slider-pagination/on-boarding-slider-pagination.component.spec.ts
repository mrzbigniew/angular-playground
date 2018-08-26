import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBoardingSliderPaginatorComponent } from './on-boarding-slider-paginator.component';

describe('OnBoardingSliderPaginatorComponent', () => {
  let component: OnBoardingSliderPaginatorComponent;
  let fixture: ComponentFixture<OnBoardingSliderPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnBoardingSliderPaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBoardingSliderPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
