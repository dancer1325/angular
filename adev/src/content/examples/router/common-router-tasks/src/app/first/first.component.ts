import {Component, Input} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-first',
  template: `
    {{name}}
    <nav>
      <ul>
        <!--    child routes   -->
        <li><a routerLink="child-a">Child A</a></li>
        <li><a routerLink="child-b">Child B</a></li>
      </ul>
    </nav>

    <router-outlet></router-outlet>
  `,
  styleUrl: './first.component.css',
  imports: [RouterOutlet, RouterLink],
  standalone: true,
})
export class FirstComponent {
  // use case:    getting route information
  @Input() name: string = 'FIRST';
}
