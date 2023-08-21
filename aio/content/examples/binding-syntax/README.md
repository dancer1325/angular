Example of [Binding syntax](https://angular.io/guide/binding-syntax)

# How to run locally?
* `cd /aio`
* `yarn build`
  * Problems:
    * Problem1: "The engine "node" is incompatible with this module. Expected version ">=16.14.0". Got "X.Y.Z""
      * Solution: `nvm use v16.20.1`
* `yarn example-playground bynding-syntax --local`
  * Generated folder is created
* `cd ...aio/content/example-playground/bynding-syntax`
* `ng serve`
* Open in your browser "localhost:4200"

# How was it created?
* It had got a basic skeleton with the main component, but it could have been generated via 
  * `npm init @angular bynding-syntax` or
  * `ng new bynding-syntax`


# Notes
* Property binding
* Event binding
* Variable reference to an HTML element
* ElementRef
  * `nativeElement: T`
    * not recommended to get access to the DOM
