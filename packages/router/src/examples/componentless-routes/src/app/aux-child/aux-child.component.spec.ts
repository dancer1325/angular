import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxChildComponent } from './aux-child.component';

describe('AuxChildComponent', () => {
  let component: AuxChildComponent;
  let fixture: ComponentFixture<AuxChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuxChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuxChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
