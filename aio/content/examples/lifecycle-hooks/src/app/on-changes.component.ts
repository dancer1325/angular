/* eslint-disable guard-for-in */
// #docregion
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'on-changes',
  template: `
  <div class="info">
    <p>{{hero.name}} can {{power}}</p>

    <h3>Change Log</h3>
    <div *ngFor="let chg of changeLog" class="log">{{chg}}</div>
  </div>
  `
})
export class OnChangesComponent implements OnChanges {
// #docregion inputs
  @Input() hero!: Hero;
  @Input() power = '';
// #enddocregion inputs

  changeLog: string[] = [];

  // #docregion ng-on-changes
  // Make an action after updating input / output values. Due to it's own template
  // seems to react to 'power' changes only, and not to Hero, because you are just modifying Hero.name
  // reference
  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
      console.log("chng " + chng + " with current value " + cur + " and previous value " + prev);
    }
  }
  // #enddocregion ng-on-changes
  reset() { this.changeLog = []; }
}
