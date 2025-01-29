import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-template',
  imports: [FormsModule],
  template: `
    <!-- ngModel    creates and manges for you, the FormControl instances   -->
    Favorite Color: <input type="text" [(ngModel)]="favoriteColor">
  `,
  standalone: true,
})
export class TemplateComponent {
  // define the model object      !=    form model
  favoriteColor = '';
}
