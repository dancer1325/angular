import {Component} from '@angular/core';
import {LowerCasePipe} from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    {{ username | lowercase }}    <!-- pipe syntax      {{}}  is needed -->
  `,
  imports: [LowerCasePipe],
  standalone: true,
})
export class AppComponent {
  username = 'yOunGTECh';
}
