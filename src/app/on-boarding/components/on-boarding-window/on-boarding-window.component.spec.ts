import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBoardingWindowComponent } from './on-boarding-window.component';

describe('OnBoardingWindowComponent', () => {
  let component: OnBoardingWindowComponent;
  let fixture: ComponentFixture<OnBoardingWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnBoardingWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBoardingWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
