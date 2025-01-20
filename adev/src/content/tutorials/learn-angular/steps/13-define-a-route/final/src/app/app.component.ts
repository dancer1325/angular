import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a href="/">Home</a>
      |
      <a href="/user">User</a>
    </nav>

    <!-- DISPLAY the content of the router page -->
    <router-outlet></router-outlet>
  `,
  imports: [RouterOutlet],
  standalone: true,
})
export class AppComponent {}
