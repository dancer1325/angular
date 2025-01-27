import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
          <!-- include routerLink | <img>     VISUALLY, mouse NOT displayed at linkable, ALTHOUGH it works  -->
          <!-- <img routerLink="" class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" /> -->
        </header>
      </a>
      <section class="content">
        <!-- specific component's selector -- is replaced by -- router-outlet -->
        <!--<app-home></app-home>-->
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  standalone: true,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '11-details-page';
}
