// #docplaster
// #docregion imports
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';
// #enddocregion imports

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
// #docregion input-output
// Added to the AppModule to make it available to other components in the application
export class ProductAlertsComponent {
  // Receive data from the parent === Parent -> Child component
  @Input() product: Product | undefined;
  // Send data Child -> Parent component. Allows emitting a new event to the parent
  @Output() notify = new EventEmitter();
}
