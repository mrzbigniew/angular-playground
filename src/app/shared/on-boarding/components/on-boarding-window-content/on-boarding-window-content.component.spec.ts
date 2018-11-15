import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBoardingWindowContentComponent } from './on-boarding-window-content.component';

describe('OnBoardingWindowContentComponent', () => {
  let component: OnBoardingWindowContentComponent;
  let fixture: ComponentFixture<OnBoardingWindowContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnBoardingWindowContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBoardingWindowContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
