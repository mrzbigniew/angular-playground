import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBoardingWindowFooterComponent } from './on-boarding-window-footer.component';

describe('OnBoardingWindowFooterComponent', () => {
  let component: OnBoardingWindowFooterComponent;
  let fixture: ComponentFixture<OnBoardingWindowFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnBoardingWindowFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBoardingWindowFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
