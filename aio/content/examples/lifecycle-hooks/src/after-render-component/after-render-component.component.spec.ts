import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterRenderComponentComponent } from './after-render-component.component';

describe('AfterRenderComponentComponent', () => {
  let component: AfterRenderComponentComponent;
  let fixture: ComponentFixture<AfterRenderComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfterRenderComponentComponent]
    });
    fixture = TestBed.createComponent(AfterRenderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
