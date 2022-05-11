import { TestBed } from '@angular/core/testing';

import { LabtestprescriptionService } from './labtestprescription.service';

describe('LabtestprescriptionService', () => {
  let service: LabtestprescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabtestprescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
