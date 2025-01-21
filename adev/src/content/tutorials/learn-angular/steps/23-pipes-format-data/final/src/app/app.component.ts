import {Component} from '@angular/core';
import {DecimalPipe, DatePipe, CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <!--  built-in pipes   -->
      <li>Number with "decimal" {{ num | number : '3.2-2' }}</li>   <!-- '3.2-2'    function pipes parameters -->
      <li>Date with "date" {{ birthday | date : 'medium' }}</li>    <!-- 'medium'    function pipes parameters -->
      <li>Currency with "currency" {{ cost | currency }}</li>
    </ul>
  `,
  imports: [DecimalPipe, DatePipe, CurrencyPipe],
  standalone: true,
})
export class AppComponent {
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
}
