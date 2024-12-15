Example of [Component interaction](https://angular.io/guide/component-interaction)

# How to run locally?
* `cd /aio`
* `yarn build`
  * Problems:
    * Problem1: "The engine "node" is incompatible with this module. Expected version ">=16.14.0". Got "X.Y.Z""
      * Solution: `nvm use v16.20.1`
* `yarn example-playground component-interaction --local`
  * Generated folder is created
* `cd ...aio/content/example-playground/component-interaction`
* `ng serve`
* Open in your browser "localhost:4200"

# How was it created?
* It had got a basic skeleton with the main component, but it could have been generated via 
  * `npm init @angular component-interaction` or
  * `ng new component-interaction`
* All the components have been created manually apparently, since they don't follow the common structure

# Notes
* HeroParentComponent & HeroChildComponent
  * pass data from parent -- via @input -> child
  * check tests under /e2e
* NameParentComponent & NameChildComponent
  * pass data from parent -- via @input & setter -> child
    * != component to display that in HeroChildComponent
    * allow making some modifications, previous to display
  * check tests under /e2e
* VersionParentComponent & VersionChildComponent
  * pass data from parent -- via @input & OnChanges -> child
    * allow adding some logic, after being updated @input and @output values
  * check tests under /e2e
* VoteTakerComponent & VoterComponent
  * pass data from child -- via @output -> parent
  * check tests under /e2e
* CountdownLocalVarParentComponent & CountdownTimerComponent
  * pass data from child -- via local variable, reference to the child, -> parent
    * There is no parent-child relationship, since the own class cannot access child class’s properties / methods !!
  * check tests under /e2e
* CountdownViewChildParentComponent & CountdownTimerComponent
  * pass data from child -- via @ViewChild and ngAfterViewInit -> parent
  * check tests under /e2e
* MissionControlComponent & AstronautComponent
  * pass data parent < —- via injectable service -- > child
  * check tests under /e2e
* /e2e
  * [Protactor](https://www.protractortest.org/#/) used
