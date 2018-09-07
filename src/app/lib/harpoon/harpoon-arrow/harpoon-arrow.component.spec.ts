import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarpoonArrowComponent } from './harpoon-arrow.component';

describe('HarpoonArrowComponent', () => {
  let component: HarpoonArrowComponent;
  let fixture: ComponentFixture<HarpoonArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarpoonArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarpoonArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
