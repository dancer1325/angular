import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Framework: {{ favoriteFramework }}</p> <!-- interpolate the input's value -->
    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" /> <!-- 2-way data binding -->
    </label>
    <button (click)="showFramework()">Show Framework</button>
  `,
  imports: [FormsModule],
  standalone: true,
})
export class UserComponent {
  favoriteFramework = ''; // class' property / 2-way data binding -- with -- input's value
  username = 'youngTech';

  showFramework() {
    alert(this.favoriteFramework);
  }
}
