import { Component, HostBinding } from '@angular/core';
import { Hero } from './hero';

// #docregion
@Component({
  selector: 'app-root',
  template: `
    <h1>Tour of Heroes</h1>
    <app-hero-main [hero]="hero"></app-hero-main>
  `,
  // Inline CSS styles
  styles: ['h1 { font-weight: normal; }']
})
export class HeroAppComponent {
// #enddocregion
  hero = new Hero(
    'Human Torch',
    ['Mister Fantastic', 'Invisible Woman', 'Thing']
  );

  // Bind the host's "class" to the DOM property
  // TODO: Where does it come from?
  @HostBinding('class') get themeClass() {
    return 'theme-light';
  }
// #docregion
}
// #enddocregion
