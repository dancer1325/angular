Example of [Interpolation](https://angular.io/guide/interpolation)

# How to run locally?
* `cd /aio`
* `yarn build`
  * Problems:
    * Problem1: "The engine "node" is incompatible with this module. Expected version ">=16.14.0". Got "X.Y.Z""
      * Solution: `nvm use v16.20.1`
* `yarn example-playground interpolation --local`
  * Generated folder is created
* `cd content/example-playground/interpolation`
* `ng serve`
* Open in your browser "localhost:4200"

# How was it created?
* It had got a basic skeleton with the main component, but it could have been generated via 
  * `npm init @angular interpolation` or
  * `ng new interpolation`

# Notes
* Customer  === DTO's model
* 'app.component.1.ts'   is not used
