import {TestBed} from '@angular/core/testing';

import {NewLoggerService} from './new-logger.service';

describe('NewLoggerService', () => {
  let service: NewLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
