import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HousingService} from '../housing.service';
import {HousingLocation} from '../../../../../12-forms/src/app/housinglocation';

@Component({
  selector: 'app-details',
  imports: [],
  template: `
    <!--  FIRST template   -->
    <!--<p>details works! {{ housingLocationId }}</p>-->

    <!--   ? in case housingLocation == null  -->
    <article>
      <img
        class="listing-photo"
        [src]="housingLocation?.photo"
        alt="Exterior photo of {{ housingLocation?.name }}"
        crossorigin
      />
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">{{ housingLocation?.city }}, {{ housingLocation?.state }}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{ housingLocation?.availableUnits }}</li>
          <li>Does this location have wifi: {{ housingLocation?.wifi }}</li>
          <li>Does this location have laundry: {{ housingLocation?.laundry }}</li>
        </ul>
      </section>
    </article>
  `,
  standalone: true,
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocationId = -1;
  housingLocation: HousingLocation | undefined;

  constructor() {
    //  this.route.snapshot.params['id']      ==    string
    this.housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId);
  }
}
