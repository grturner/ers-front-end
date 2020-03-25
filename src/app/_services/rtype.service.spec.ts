import { TestBed } from '@angular/core/testing';

import { RtypeService } from './rtype.service';

describe('RtypeService', () => {
  let service: RtypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RtypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
