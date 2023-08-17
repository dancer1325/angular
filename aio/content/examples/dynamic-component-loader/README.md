Example of [Dynamic component loader](https://angular.io/guide/dynamic-component-loader)

# How to run locally?
* `cd /aio`
* `yarn build`
  * Problems:
    * Problem1: "The engine "node" is incompatible with this module. Expected version ">=16.14.0". Got "X.Y.Z""
      * Solution: `nvm use v16.20.1`
* `yarn example-playground dynamic-component-loader --local`
  * Generated folder is created
* `cd ...aio/content/example-playground/dynamic-component-loader`
* `ng serve`
* Open in your browser "localhost:4200"

# How was it created?
* It had got a basic skeleton with the main component, but it could have been generated via 
  * `npm init @angular dynamic-component-loader` or
  * `ng new dynamic-component-loader`
* All the components have been created manually

# Notes
* Goal is to build a dynamic ad banner.
* `AdDirective`
  * added to the element which hosts the dynamic components -- `<ng-template>` --
  * `ViewContainerRef` is injected
    * `.createComponent()`  add the component to the template
* `<ng-template>`
  * used for the dynamic components
* HeroProfileComponent & HeroJobAdComponent
  * implement AdComponent, to  standardize the API for passing data to the components