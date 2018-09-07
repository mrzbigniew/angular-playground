import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarpoonComponent } from './harpoon.component';

describe('HarpoonComponent', () => {
  let component: HarpoonComponent;
  let fixture: ComponentFixture<HarpoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarpoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarpoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
