import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDestroyRefComponent } from './counter-destroy-ref.component';

describe('CounterDestroyRefComponent', () => {
  let component: CounterDestroyRefComponent;
  let fixture: ComponentFixture<CounterDestroyRefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterDestroyRefComponent]
    });
    fixture = TestBed.createComponent(CounterDestroyRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
