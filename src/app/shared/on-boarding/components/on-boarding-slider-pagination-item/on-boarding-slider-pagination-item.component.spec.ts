import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBoardingSliderPaginationItemComponent } from './on-boarding-slider-pagination-item.component';

describe('OnBoardingSliderPaginationItemComponent', () => {
  let component: OnBoardingSliderPaginationItemComponent;
  let fixture: ComponentFixture<OnBoardingSliderPaginationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnBoardingSliderPaginationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBoardingSliderPaginationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
