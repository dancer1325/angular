import {Component, Input} from '@angular/core';
import {HousingLocation} from '../housingLocation';

@Component({
  selector: 'app-housing-location',
  imports: [],
  template: `
    <!--<p>housing-location works!</p>-->

    <!-- display class' input properties -- via -- interpolation -->
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
    </section>
  `,
  styleUrl: './housing-location.component.css',
  standalone: true,
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
