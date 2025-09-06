import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainChildComponent } from './main-child.component';

describe('MainChildComponent', () => {
  let component: MainChildComponent;
  let fixture: ComponentFixture<MainChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
