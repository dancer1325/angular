import {Routes} from '@angular/router';
import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {HeroesListComponent} from './heroes-list/heroes-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ErrorHandler, inject} from '@angular/core';

export const routes: Routes = [
  {path: 'crisis-list', component: CrisisListComponent},
  {path: 'heroes-list', component: HeroesListComponent},
  {path: '', redirectTo: '/heroes-list', pathMatch: 'full'}, // -- redirect to -- /heroes-list
  {
    path: 'old-user-page',
    redirectTo: ({queryParams}) => {
      // TODO: create page / url with params
      const errorHandler = inject(ErrorHandler);
      const userIdParam = queryParams['userId'];
      if (userIdParam !== undefined) {
        return `/user/${userIdParam}`;
      } else {
        errorHandler.handleError(new Error('Attempted navigation to user page without user ID.'));
        return `/heroes-list`;
      }
    },
  },
  {path: '**', component: PageNotFoundComponent}, // **   == wildcard route       place LAST one
];
