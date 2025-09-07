import {ValueService} from './value.service';
import {MasterService} from './master.service';
import {TestBed} from '@angular/core/testing';

describe('MasterService -- WITH Angular testing support', () => {
  // 2. WITH Angular testing functionalities
  let masterService: MasterService;
  let valueServiceSpy: jasmine.SpyObj<ValueService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ValueService', ['getValue']);

    TestBed.configureTestingModule({
      // service-to-test + its (spy) dependency
      providers: [MasterService, {provide: ValueService, useValue: spy}],
    });
    // inject service-to-test + its (spy) dependency
    masterService = TestBed.inject(MasterService);
    valueServiceSpy = TestBed.inject(ValueService) as jasmine.SpyObj<ValueService>;
  });


  it('#getValue should return stubbed value from a spy', () => {
    // ALTHOUGH it's injected, SAME way to mock
    const stubValue = 'stub value';
    valueServiceSpy.getValue.and.returnValue(stubValue);

    expect(masterService.getValue()).withContext('service returned stub value').toBe(stubValue);
    expect(valueServiceSpy.getValue.calls.count())
      .withContext('spy method was called once')
      .toBe(1);
    expect(valueServiceSpy.getValue.calls.mostRecent().returnValue).toBe(stubValue);
  })
});
