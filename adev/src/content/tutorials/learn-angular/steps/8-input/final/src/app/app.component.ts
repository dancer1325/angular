import {Component} from '@angular/core';
import {UserComponent} from './user.component';

@Component({
  selector: 'app-root',
  template: `
    <!-- set the input property's value -- as -- attribute syntax -->
    <app-user name="Simran" />
  `,
  imports: [UserComponent],
})
export class AppComponent {}
