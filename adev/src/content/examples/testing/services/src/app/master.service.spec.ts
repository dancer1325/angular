import {MasterService} from './master.service';
import {ValueService} from './value.service';

// create a fake service
export class FakeValueService extends ValueService {
  override value = 'faked service value';
}

describe('MasterService without Angular testing support', () => {
  let masterService: MasterService;

  // 1. real service
  it('#getValue should return real value from the real service', () => {
    masterService = new MasterService(new ValueService());
    expect(masterService.getValue()).toBe('real value');
  });

  // 2. fake service
  // 2.1 extends originalService
  it('#getValue should return faked value from a fakeService', () => {
    masterService = new MasterService(new FakeValueService());
    expect(masterService.getValue()).toBe('faked service value');
  });

  // 2.2 fake 1! method
  it('#getValue should return faked value from a fake object', () => {
    const fake = {getValue: () => 'fake value'};
    masterService = new MasterService(fake as ValueService); // -- thanks to -- TS' object shape matching
    expect(masterService.getValue()).toBe('fake value');
  });

  // 3. spy
  it('#getValue should return stubbed value from a spy', () => {
    // create an object / spy `getValue` method   ==    spy | ValueService
    const valueServiceSpy = jasmine.createSpyObj('ValueService', ['getValue']);

    // set the value to return when the `getValue` spy is called.
    const stubValue = 'stub value';
    valueServiceSpy.getValue.and.returnValue(stubValue);

    masterService = new MasterService(valueServiceSpy);

    expect(masterService.getValue()).withContext('service returned stub value').toBe(stubValue);
    expect(valueServiceSpy.getValue.calls.count())
      .withContext('spy method was called once')
      .toBe(1); // invoked PREVIOUS line
    expect(valueServiceSpy.getValue.calls.mostRecent().returnValue).toBe(stubValue);
  });
});
