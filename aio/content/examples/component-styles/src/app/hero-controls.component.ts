import { Component, Input } from '@angular/core';
import { Hero } from './hero';

// #docregion inlinestyles
@Component({
  selector: 'app-hero-controls',
  template: `
    <!-- template inline style -- defined within the template via <style> -- -->
    <style>
      button {
        background-color: white;
        border: 1px solid #777;
      }
    </style>
    <h3>Controls</h3>
    <button type="button" (click)="activate()">Activate</button>
  `
})
// #enddocregion inlinestyles
export class HeroControlsComponent {
  @Input() hero!: Hero;

  activate() {
    this.hero.active = true;
  }
}
