// #docregion
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name-child',
  template: '<h3>"{{name}}"</h3>'
})
export class NameChildComponent {
  @Input()
  get name(): string { return this._name; }
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }

  // This is the variable to display in the template via interpolation -- != done in HeroChildComponent --
  private _name = '';
}
// #enddocregion
