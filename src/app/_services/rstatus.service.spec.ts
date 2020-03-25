import { TestBed } from '@angular/core/testing';

import { RstatusService } from './rstatus.service';

describe('RstatusService', () => {
  let service: RstatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RstatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
