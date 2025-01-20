import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    Username: {{ username }}
  `,
  standalone: true, // recommendation
})
export class UserComponent {
  username = 'youngTech';
}

@Component({
  selector: 'app-root',
  template: `
    <section>
      <app-user />
    </section>
  `,
  imports: [UserComponent], // OTHERWISE, other can NOT be used | this template
})
export class AppComponent {}
