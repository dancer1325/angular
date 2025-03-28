import {Component} from '@angular/core';
import {UserComponent} from './user.component';

@Component({
  selector: 'app-root',
  template: `
    <app-user />
  `,
  imports: [UserComponent],
  standalone: true,
})
export class AppComponent {}
