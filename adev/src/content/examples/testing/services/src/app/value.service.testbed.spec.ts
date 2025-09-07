import {ValueService} from './value.service';
import {TestBed} from '@angular/core/testing';

describe('ValueService -- WITH Angular testing support', () => {
    let service: ValueService;

    beforeEach(() => {
      // 1. .configureTestingModule()
      TestBed.configureTestingModule({providers: [ValueService]});

      // 2. .inject()
      // 2.1 | beforeEach()
      service = TestBed.inject(ValueService);
    });

    it('should use ValueService', () => {
      // 2.2 | EACH it()
      service = TestBed.inject(ValueService);

      expect(service.getValue()).toBe('real value');
    });

});
