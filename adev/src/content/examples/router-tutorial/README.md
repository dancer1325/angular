* Example of [Router | SPA](/adev/src/content/guide/routing/router-tutorial.md)

# Goal
* SAMPLE application's features | modules
* how to navigate -- to a -- component
* pass information -- via a parameter, to a -- component
* structure routes -- by -- nesting several routes
* control whether the application can discard unsaved changes
* improve performance -- by -- 
  * pre-fetching route data
  * lazy loading feature modules
* criteria to load components

# How to run locally?
* `cd /aio`
* `yarn build`
  * Problems:
    * Problem1: "The engine "node" is incompatible with this module. Expected version ">=16.14.0". Got "X.Y.Z""
      * Solution: `nvm use v16.20.1`
* `yarn example-playground router-tutorial --local`
  * Generated folder is created
* `cd ...aio/content/example-playground/router-tutorial`
* `ng serve`
* if you want to see
  * main page -> open | browser, http://localhost:4200
  * `CrisisListComponent` -> open | browser, http://localhost:4200/crisis-list
  * `HeroesListComponent` -> open | browser, http://localhost:4200/heroes-list

# How was it created?
* create skeleton of Angular application -- via -- 
  * `npm init @angular router-tutorial` or
  * `ng new router-tutorial`
    * if you get the prompt `Would you like to add Angular routing?"` -> select `N`
* `ng generate component crisis-list`
* `ng generate component heroes-list`
