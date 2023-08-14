import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterNextRenderComponentComponent } from './after-next-render-component.component';

describe('AfterNextRenderComponentComponent', () => {
  let component: AfterNextRenderComponentComponent;
  let fixture: ComponentFixture<AfterNextRenderComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfterNextRenderComponentComponent]
    });
    fixture = TestBed.createComponent(AfterNextRenderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
