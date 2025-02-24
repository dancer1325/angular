import {TestBed} from '@angular/core/testing';

import {OldLoggerService} from './old-logger.service';

describe('OldLoggerService', () => {
  let service: OldLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OldLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
