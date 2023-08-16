import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-hero-main',
  template: `
    <app-quest-summary></app-quest-summary>
    <!-- [class.ClassName]=Boolean|undefined|null       is single class binding   -->
    <app-hero-details [hero]="hero" [class.active]="hero.active">
      <app-hero-controls [hero]="hero"></app-hero-controls>
    </app-hero-details>
  `
})
export class HeroAppMainComponent {

  // This input is passed forward also to the child HeroDetailsComponent
  @Input() hero!: Hero;
}
