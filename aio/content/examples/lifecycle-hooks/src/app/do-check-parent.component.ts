import { Component, ViewChild } from '@angular/core';

import { DoCheckComponent } from './do-check.component';
import { Hero } from './hero';

@Component({
  selector: 'do-check-parent',
  templateUrl: './do-check-parent.component.html'
})
export class DoCheckParentComponent {
  hero!: Hero;
  power = '';
  title = 'DoCheck';
  // Property decorator matches with a view query
  // Used to get access to that component here
  @ViewChild(DoCheckComponent) childView!: DoCheckComponent;

  constructor() {
    this.reset();
  }

  reset() {
    this.hero = new Hero('Windstorm');
    this.power = 'sing';
    if (this.childView) {
      this.childView.reset();
    }
  }
}
