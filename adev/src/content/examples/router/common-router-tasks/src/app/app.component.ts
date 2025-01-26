import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <h1>Angular Router App</h1>
    <nav>
      <ul>
        <li><a routerLink="/first-component" routerLinkActive="active" ariaCurrentWhenActive="page">First Component</a>
        </li>
        <li><a routerLink="/second-component" routerLinkActive="active" ariaCurrentWhenActive="page">Second
          Component</a></li>
      </ul>
    </nav>

    <!-- <router-outlet>    -- render the -- routed views   -->
    <router-outlet></router-outlet>
  `,
  standalone: true,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'common-router-tasks';
}
