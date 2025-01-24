import {Component, Input} from '@angular/core';
import {HousingLocation} from '../housingLocation';

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
  // !        because there is NO default value
  @Input() housingLocationCheckPassedWithoutDoubleQuotes!: HousingLocation;

  constructor() {
    // tslint:disable-next-line:no-console
    console.log(`constructor - ${this.housingLocation}`);
    // tslint:disable-next-line:no-console
    console.log(`constructor - ${this.housingLocationCheckPassedWithoutDoubleQuotes}`);
  }

  ngOnInit() {
    // tslint:disable-next-line:no-console
    console.log(`ngOnInit - ${this.housingLocation}`);
    // tslint:disable-next-line:no-console
    console.log(`ngOnInit - ${this.housingLocationCheckPassedWithoutDoubleQuotes}`);
  }
}
