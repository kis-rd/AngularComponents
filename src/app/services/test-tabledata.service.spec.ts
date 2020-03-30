import { TestBed } from '@angular/core/testing';

import { TestTabledataService } from './test-tabledata.service';

describe('TestTabledataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestTabledataService = TestBed.get(TestTabledataService);
    expect(service).toBeTruthy();
  });
});
