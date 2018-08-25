import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnBoardingBackdropComponent } from './on-boarding-backdrop.component';

describe('OnBoardingBackdropComponent', () => {
  let component: OnBoardingBackdropComponent;
  let fixture: ComponentFixture<OnBoardingBackdropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnBoardingBackdropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBoardingBackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
