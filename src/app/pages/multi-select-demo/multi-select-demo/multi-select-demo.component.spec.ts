import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectDemoComponent } from './multi-select-demo.component';

describe('MultiSelectDemoComponent', () => {
  let component: MultiSelectDemoComponent;
  let fixture: ComponentFixture<MultiSelectDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSelectDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
