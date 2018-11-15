import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBoardingSlideComponent } from './on-boarding-slide.component';

describe('OnBoardingSlideComponent', () => {
  let component: OnBoardingSlideComponent;
  let fixture: ComponentFixture<OnBoardingSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnBoardingSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBoardingSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
