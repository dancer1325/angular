import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <!-- if you want to use the value -> use interpolation -->
    <p>The user's name is {{ name }}</p>
  `,
})
export class UserComponent {
  // define an `@Input` property / set an initial value
  @Input() name = '';
}
