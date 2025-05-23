import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withComponentInputBinding, withHashLocation} from '@angular/router';

import {routes} from './app.routes';

/*export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes)],
};*/

// use case:    getting route information
// 1. -- via -- `withComponentInputBinding()`
/*export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding())]
};*/

// 2. -- via -- RouterModule.forRoot`'s `bindToComponentInputs`
// TODO: How to set up?

// 3.   `HashLocationStrategy`
// | bootstrap the application, check ALL views have "#"
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes, withHashLocation()),
  ],
};
