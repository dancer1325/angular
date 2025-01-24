import {Component, Input} from '@angular/core';
import {HousingLocation} from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  imports: [],
  template: `
    <p>housing-location works!</p>
  `,
  standalone: true,
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {
  // !        because there is NO default value
  @Input() housingLocation!: HousingLocation;
}
