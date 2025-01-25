import {Component} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <!-- 1. "expression"     / switch on or off a CSS class-->
    <!-- 1.1 pass 1! CSS class -->
    <div [ngClass]="isSpecial ? 'special' : ''">1.1 pass 1! CSS class</div>
    <!-- 1.2 pass >1 CSS class -->
    <!-- passing a set of classes -- as ALLOWED by -- HTML global attribute class -->
    <div [ngClass]="isSpecial ? 'special anotherSpecial' : ''">1.2 pass >1 CSS class</div>

    <!-- 2. pass object CSS classes / values are boolean -->
    <!-- passing a set of classes -- as ALLOWED by -- HTML global attribute class -->
    <div [ngClass]="{'special':false, 'anotherSpecial':true}">2. pass object CSS classes / values are boolean</div>

    <!-- 3. pass object CSS classes / values are boolean -- via -- class' property -->
    <div [ngClass]="currentClasses">3. pass object CSS classes / values are boolean -- via -- class' property</div>
    <!-- TODO: Why is NOT updated if one of the object's key - values is updated? -->

    <button (click)="toggleSpecial()">Toggle Special</button>
  `,
  styleUrl: './app.component.css',
  // add NgClass
  imports: [NgClass],
  standalone: true,
})
export class AppComponent {
  title = 'ngClass';
  isSpecial = false; // Initially set to false
  currentClasses: Record<string, boolean> = {
    special: this.isSpecial,
    anotherSpecial: true,
  };

  toggleSpecial() {
    this.isSpecial = !this.isSpecial; // Toggles between true and false
  }
}
