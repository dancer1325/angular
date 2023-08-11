Example of [GettingStarted-What's Angular](https://angular.io/guide/what-is-angular)

# How to run locally?
* `cd /aio`
* `yarn build`
  * Problems:
    * Problem1: "The engine "node" is incompatible with this module. Expected version ">=16.14.0". Got "X.Y.Z""
      * Solution: `nvm use v16.20.1`
* `yarn example-playground what-is-angular --local`
  * Generated folder is created
* `cd ...aio/content/example-playground/what-is-angular`
* `ng serve`