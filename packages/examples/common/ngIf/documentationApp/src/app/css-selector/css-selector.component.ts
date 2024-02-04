import { Component } from '@angular/core';

@Component({
  selector: 'app-css-selector',
  templateUrl: './css-selector.component.html',
  styleUrls: ['./css-selector.component.css']
})
export class CssSelectorComponent {
  withAsterisk:boolean = true;
  withSquareBracket:boolean = true;

}
