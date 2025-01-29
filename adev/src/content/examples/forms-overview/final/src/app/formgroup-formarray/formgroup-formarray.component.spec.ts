import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FormgroupFormarrayComponent} from './formgroup-formarray.component';

describe('FormgroupFormarrayComponent', () => {
  let component: FormgroupFormarrayComponent;
  let fixture: ComponentFixture<FormgroupFormarrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormgroupFormarrayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormgroupFormarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
