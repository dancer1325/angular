import {Routes} from '@angular/router';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ChildAComponent} from './child-a/child-a.component';
import {ChildBComponent} from './child-b/child-b.component';

export const routes: Routes = [
  {
    path: 'first-component',
    component: FirstComponent,
    children: [
      {
        path: 'child-a', // child route path
        component: ChildAComponent, // child route component / router renders
        title: 'Child A',
      },
      {
        path: 'child-b',
        component: ChildBComponent, // ANOTHER child route component / router renders
        title: 'Child B',
      },
    ],
  },
  {path: 'second-component', component: SecondComponent},
  // Wildcard route for a 404 page, 👀place LAST one route 👀
  {path: '**', component: PageNotFoundComponent},
];
