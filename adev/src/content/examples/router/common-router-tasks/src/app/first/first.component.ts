import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
    {{name}}
  `,
  styleUrl: './first.component.css',
  standalone: true,
})
export class FirstComponent {
  // use case:    getting route information
  @Input() name: string = 'FIRST';
}
