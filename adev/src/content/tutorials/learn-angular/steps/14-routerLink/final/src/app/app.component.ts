import {Component} from '@angular/core';
import {RouterOutlet, RouterLink} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <!-- replace -- href by -- routerLink -->
      <!--<a href="/">Home</a>-->
      <a routerLink="/">Home</a>
      |

      <!-- replace -- href by -- routerLink -->
      <!--<a href="/user">User</a>-->
      <a routerLink="/user">User</a>
    </nav>
    <router-outlet />
  `,
  // IMPORT RouterLink`
  imports: [RouterOutlet, RouterLink],
  standalone: true,
})
export class AppComponent {}
