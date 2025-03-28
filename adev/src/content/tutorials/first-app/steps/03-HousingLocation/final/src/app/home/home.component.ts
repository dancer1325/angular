import {Component} from '@angular/core';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
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
    </section>
  `,
  standalone: true,
  styleUrl: './home.component.css',
})
export class HomeComponent {}
