import {Component} from '@angular/core';
import {UserComponent} from './user.component';
import {ChildComponent} from './child.component';

@Component({
  selector: 'app-root',
  template: `
    <app-user />
    <br>
    <app-child />
  `,
  imports: [UserComponent, ChildComponent],
})
export class AppComponent {}
