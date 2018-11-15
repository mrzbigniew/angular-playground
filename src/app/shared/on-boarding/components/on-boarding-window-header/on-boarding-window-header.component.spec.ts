import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBoardingWindowHeaderComponent } from './on-boarding-window-header.component';

describe('OnBoardingWindowHeaderComponent', () => {
  let component: OnBoardingWindowHeaderComponent;
  let fixture: ComponentFixture<OnBoardingWindowHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnBoardingWindowHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBoardingWindowHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
