import {Component, inject} from '@angular/core';
import {HousingLocation} from '../housinglocation';
import {HousingService} from '../housing.service';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent, CommonModule],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  standalone: true,
  styleUrl: './home.component.css',
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
