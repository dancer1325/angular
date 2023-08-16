Example of [Sharing data between child and parent directives or components](https://angular.io/guide/inputs-outputs)

# How to run locally?
* `cd /aio`
* `yarn build`
  * Problems:
    * Problem1: "The engine "node" is incompatible with this module. Expected version ">=16.14.0". Got "X.Y.Z""
      * Solution: `nvm use v16.20.1`
* `yarn example-playground inputs-outputs --local`
  * Generated folder is created
* `cd ...aio/content/example-playground/inputs-outputs`
* `ng serve`
* Open in your browser "localhost:4200"

# How was it created?
* It had got a basic skeleton with the main component, but it could have been generated via 
  * `npm init @angular inputs-outputs` or
  * `ng new inputs-outputs`
* All the components have been created via Angular CLI
  * `ng generate component componentName`

# Notes
* ItemDetailMetadataComponent
  * several @Input properties are available in the same component
  * @Input(required) and @Input(transform)
* ItemOutputComponent
  * possible either @input or @output at the same time
* InTheMetadataComponent
  * @Input -- can be replaced by --> component.inputs
  * @Output -- can be replaced by --> component.outputs
* AliasingComponent
  * @iInput + component.inputs + @Output + component.outputs