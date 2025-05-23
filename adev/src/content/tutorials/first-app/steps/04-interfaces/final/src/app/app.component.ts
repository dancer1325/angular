import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  standalone: true,
  styleUrl: './app.component.css',
  imports: [HomeComponent],
})
export class AppComponent {
  title = '04-interfaces';
}
