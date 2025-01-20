import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p> <!-- interpolation of value entered | input -->
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />  <!-- 2-way data binding -->
    </label>
  `,
  imports: [FormsModule], //  REQUIRED to use it
  standalone: true,
})
export class UserComponent {
  favoriteFramework = '';
  username = 'youngTech';
}
