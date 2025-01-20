# Component Communication -- via -- `@Input`

* goal
  * how to use the `@Input` decorator -- to send information to -- components

* `Input` 
  * == property
  * 👀== React's `props` 👀
  * steps
    * add `@Input` decorator | component class' property
    * if you want to pass a value -> use the attribute syntax
  * use cases
    * send data -- via -- 1! direction  | component -- to --
      * customize a component OR
      * from a parent component -- send information to a -- child component

# How to run locally?

* ways
  * see [here](/adev/README.md#how-to-generate-a-specific-example-project-locally)
    * Solution: TODO:
  * create an angular project -- `final` --
    * Attempts:
      * Attempt1: `npm init @angular final`
      * Attempt2: `ng new final`
    * Solution: 
      * `mkdir final`
      * `ng new 8-input --directory=adev/src/content/tutorials/learn-angular/steps/8-input/final`
  * use [existing `common/` Angular skeleton project](../../common)
    * | "common/", `yarn build`
      * Problems:
        * Problem1: "Cannot find tsconfig file "tsconfig.app.json"
          * Solution: Add reference to ["adev/tsconfig"](/adev/tsconfig.app.json)
        * Problem2: Files from ALL files are taking in account "../../../../app/core/layout/secondary-navigation/secondary-navigation.component.scss"
          * Solution: TODO:


