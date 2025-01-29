import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  imports: [ReactiveFormsModule],
  template: `
    Favorite Color: <input type="text" [formControl]="favoriteColorControl">
  `,
  standalone: true,
})
export class ReactiveComponent {
  // specifying FormControl == defining DIRECTLY the form model
  // ==  `FormControl` instance / -- linked to a -- specific form element | view
  favoriteColorControl = new FormControl('');
}
