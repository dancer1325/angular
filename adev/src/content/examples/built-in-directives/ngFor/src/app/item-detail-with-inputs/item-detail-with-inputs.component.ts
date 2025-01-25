import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-item-detail-with-inputs',
  template: `
    <p>ItemDetailWithInputsComponent {{item.name}}</p>
  `,
  standalone: true,
  styleUrl: './item-detail-with-inputs.component.css',
})
export class ItemDetailWithInputsComponent {
  @Input() item!: any;
}
