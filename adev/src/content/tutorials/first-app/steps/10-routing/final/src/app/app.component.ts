import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
      </header>
      <section class="content">
        <!-- specific component's selector -- is replaced by -- router-outlet -->
        <!--<app-home></app-home>-->
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrl: './app.component.css',
  standalone: true,
  imports: [HomeComponent, RouterModule],
})
export class AppComponent {
  title = '10-routing';
}
