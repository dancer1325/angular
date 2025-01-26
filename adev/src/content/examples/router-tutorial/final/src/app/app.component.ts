import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {HeroesListComponent} from './heroes-list/heroes-list.component';
import {CrisisListComponent} from './crisis-list/crisis-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroesListComponent, CrisisListComponent, RouterLink, RouterLinkActive],
  //templateUrl: './app.component.onlyComponents.html',
  //templateUrl: './app.component.routerOutlet.html',
  //templateUrl: './app.component.routerLink.html',
  templateUrl: './app.component.routerActiveLink.html',
  standalone: true,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'final';
}
