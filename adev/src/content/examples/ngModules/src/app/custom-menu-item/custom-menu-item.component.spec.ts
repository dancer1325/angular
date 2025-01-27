import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CustomMenuItemComponent} from './custom-menu-item.component';

describe('CustomMenuItemComponent', () => {
  let component: CustomMenuItemComponent;
  let fixture: ComponentFixture<CustomMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomMenuItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
