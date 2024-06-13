import { TestBed } from '@angular/core/testing';

import { CommonserverService } from './commonserver.service';

describe('CommonserverService', () => {
  let service: CommonserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
