import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-hero-details',
  template: `
    <h2>{{hero.name}}</h2>
    <app-hero-team [hero]=hero></app-hero-team>
    <!-- ng-content         because this component accepts passing another component within it   -->
    <ng-content></ng-content>
  `,
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent {
  // This input is passed forward also to the child HeroControlsComponent
  @Input() hero!: Hero;
}
