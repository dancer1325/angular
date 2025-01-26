import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
    {{name}}
  `,
  styleUrl: './second.component.css',
  standalone: true,
})
export class SecondComponent {
  // use case:    getting route information
  @Input() name: string = 'SECOND';
}
