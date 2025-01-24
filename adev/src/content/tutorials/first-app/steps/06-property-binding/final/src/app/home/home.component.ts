import {Component} from '@angular/core';
import {HousingLocation} from '../housingLocation';
import {HousingLocationComponent} from '../housing-location/housing-location.component';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <!-- TODO: WHy "Search" is NOT displayed ? -->
        <!--<button class="primary" type="button">Search</button>-->
        <button type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location></app-housing-location>
      <app-housing-location [housingLocationCheckPassedWithoutDoubleQuotes]=housingLocation ></app-housing-location>
    </section>
  `,
  standalone: true,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
