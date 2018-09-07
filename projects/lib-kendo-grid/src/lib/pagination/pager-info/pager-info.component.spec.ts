import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagerInfoComponent } from './pager-info.component';

describe('PagerInfoComponent', () => {
  let component: PagerInfoComponent;
  let fixture: ComponentFixture<PagerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
