import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarpoonChainComponent } from './harpoon-chain.component';

describe('HarpoonChainComponent', () => {
  let component: HarpoonChainComponent;
  let fixture: ComponentFixture<HarpoonChainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarpoonChainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarpoonChainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
