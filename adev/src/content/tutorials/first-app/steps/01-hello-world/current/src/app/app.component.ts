import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <h1>Default</h1>
  `,
  styleUrls: ['./app.component.css'],
  standalone: true,
})
export class AppComponent {
  title = 'default';
}
