Example of [Router](https://angular.io/guide/router-tutorial-toh)

# Structure
* Main features
  * Crisis Center
  * Heroes
  * Admin

# How to run locally?
* `cd /aio`
* `yarn build`
  * Problems:
    * Problem1: "The engine "node" is incompatible with this module. Expected version ">=16.14.0". Got "X.Y.Z""
      * Solution: `nvm use v16.20.1`
* `yarn example-playground router-tutorial-v2 --local`
  * Generated folder is created
* `cd ...aio/content/example-playground/router-tutorial-v2`
* `ng serve`
* Open in your browser "localhost:4200"

# How was it created?
* It had got a basic skeleton with the main component, but it could have been generated via 
  * `npm init @angular router-tutorial-v2` or
  * `ng new router-tutorial-v2`
    * select 'N' for routing

# Notes