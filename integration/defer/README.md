Example of [View encapsulation](https://angular.io/guide/view-encapsulation)

# How to run locally?
* `cd /aio`
* `yarn build`
  * Problems:
    * Problem1: "The engine "node" is incompatible with this module. Expected version ">=16.14.0". Got "X.Y.Z""
      * Solution: `nvm use v16.20.1`
* `yarn example-playground view-encapsulation --local`
  * Generated folder is created
* `cd ...aio/content/example-playground/view-encapsulation`
* `ng serve`
* Open in your browser "localhost:4200"

# How was it created?
* It had got a basic skeleton with the main component, but it could have been generated via 
  * `npm init @angular view-encapsulation` or
  * `ng new view-encapsulation`
* All the components have been created manually apparently, since they don't follow the common structure

# Notes
* NoEncapsulationComponent & EmulatedEncapsulationComponent & ShadowDomEncapsulationComponent
  * seem to have been created manually
* NoEncapsulationComponent
  * examining the elements in the browser, the styles are
    * added to the document's head
    * added to all shadow DOM hosts === available to the whole application
* EmulatedEncapsulationComponent
  * examining the elements in the browser, the styles are
    * added to the document's head, but "scoped"
    * applied to only the elements directly within this component's template
      * overriding the global added by NoEncapsulationComponent
      * without being applied to child components -- such as NoEncapsulationComponent -- 
* ShadowDomEncapsulationComponent
  * examining the elements in the browser, a ShadowRoot exists with
    * all the global styles, even the added by other components
    * EmulatedEncapsulationComponent's element has their own styles -- due to be "scoped" styles --
    * their own styles added at the end -> override the NoEncapsulationComponent's styles
