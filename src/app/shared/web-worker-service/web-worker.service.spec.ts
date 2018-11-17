import { TestBed } from '@angular/core/testing';

import { MyWebWorkerService } from './web-worker.service';

describe('WebWorkerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyWebWorkerService = TestBed.get(MyWebWorkerService);
    expect(service).toBeTruthy();
  });
});
