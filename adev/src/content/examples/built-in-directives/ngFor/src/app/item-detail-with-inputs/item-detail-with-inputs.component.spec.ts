import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemDetailWithInputsComponent} from './item-detail-with-inputs.component';

describe('ItemDetailWithInputsComponent', () => {
  let component: ItemDetailWithInputsComponent;
  let fixture: ComponentFixture<ItemDetailWithInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemDetailWithInputsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemDetailWithInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
