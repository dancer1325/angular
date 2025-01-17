import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {HeroesListComponent} from './heroes-list/heroes-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CrisisListComponent, HeroesListComponent],
  // change NEXT line, to test DIFFERENT routings
  templateUrl: './app.component.html',
  /*templateUrl: './app.component.onlyComponents.html',
  templateUrl: './app.component.routerActiveLink.html',
  templateUrl: './app.component.routerLink.html',
  templateUrl: './app.component.routerOutlet.html',*/
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-router-sample';
}
