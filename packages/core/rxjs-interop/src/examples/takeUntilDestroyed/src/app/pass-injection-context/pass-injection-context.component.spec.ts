import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassInjectionContextComponent } from './pass-injection-context.component';

describe('PassInjectionContextComponent', () => {
  let component: PassInjectionContextComponent;
  let fixture: ComponentFixture<PassInjectionContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassInjectionContextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassInjectionContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
