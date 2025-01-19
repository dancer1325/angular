Example of [GettingStarted-What's Angular](https://angular.io/guide/what-is-angular)

# How to run locally?
* `cd /adev`
  * 
* `yarn build`
  * Problems:
    * Problem1: "The engine "node" is incompatible with this module. Expected version ">=16.14.0". Got "X.Y.Z""
      * Solution: `nvm use v16.20.1`
* `yarn example-playground what-is-angular --local`
  * Generated folder is created
  * Problems:
    * Problem1: `example-playground` does NOT exist
      * Solution: TODO:
* `cd ...adev/content/example-playground/what-is-angular`
* `ng serve`
* Open in your browser "localhost:4200"


# How to make unit testing ?
* Create the unit test file for an existing component -- 'hello-world-component.spec.ts' --
  * Attempt1: `ng generate component HelloWorldComponent --spec`
  * Solution: Create manually
* Run the unit test
  * Generate the corresponding 'example-playground'
    * `yarn example-playground what-is-angular --local`
  * `cd ...adev/content/example-playground/what-is-angular`
  * `ng test`
  * Open in your browser "localhost:9877"