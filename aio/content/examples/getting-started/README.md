Example of [GettingStarted-What's Angular](https://angular.io/guide/what-is-angular)

# How to run locally?
* `cd /aio`
* `yarn build`
  * Problems:
    * Problem1: "The engine "node" is incompatible with this module. Expected version ">=16.14.0". Got "X.Y.Z""
      * Solution: `nvm use v16.20.1`
* `yarn example-playground getting-started --local`
  * Generated folder is created
* `cd ...aio/content/example-playground/getting-started`
* `ng serve`
* Open in your browser "localhost:4200"

# How it was created?
* It had got a basic skeleton with the main component, but it could have been generated via `npm init @angular getting-starter`
* `ng generate component product-alerts`
  * Create another component
* `ng generate component product-details`
  * Create another component
* `ng generate service cart`
  * Create a service
* `ng generate component cart`
  * Create another component
* Configure HTTPClientModule manually, importing it 
* `ng generate component shipping`
  * Create another component
* Inject FormBuilder service manually

# Notes:
* `@angular/router - Route`
  * Interface to define single routes
