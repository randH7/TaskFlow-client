import { TestBed } from '@angular/core/testing';

import { EmployGuardService } from './employ-guard.service';

describe('EmployGuardService', () => {
  let service: EmployGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
