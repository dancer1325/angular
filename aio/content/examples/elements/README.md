Example of [Angular elements](https://angular.io/guide/elements)

# How to run locally?
* `cd /aio`
* `yarn build`
  * Problems:
    * Problem1: "The engine "node" is incompatible with this module. Expected version ">=16.14.0". Got "X.Y.Z""
      * Solution: `nvm use v16.20.1`
* `yarn example-playground elements --local`
  * Generated folder is created
* `cd ...aio/content/example-playground/elements`
* `ng serve`
* Open in your browser "localhost:4200"

# How was it created?
* It had got a basic skeleton with the main component, but it could have been generated via 
  * `npm init @angular elements` or
  * `ng new elements`
* All the components have been created manually

# Notes
* `.showAsComponent()`
  * === dynamic-component-loader
* `.showAsElement()`
  * alternative to add the components dynamically, but
    * more straightforward
    * simpler (all the infrastructure and frameworks is provided automatically)
    * more transparent
