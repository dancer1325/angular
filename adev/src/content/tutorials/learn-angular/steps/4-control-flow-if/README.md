# Control Flow in Components - `@if`

* goal
  * use conditionals | templates

* `@if`
  * uses
    * what to display programmatically
  * | Angular v16-,
    * see [NgIf](/adev/src/content/guide/directives/structural-directives.md)

* `@` prefix
  * == [Angular template syntax](/adev/src/content/guide/templates)

* `@else`

# How to run locally?

* ways
  * see [here](/adev/README.md#how-to-generate-a-specific-example-project-locally)
    * Solution: TODO:
  * create an angular project -- `final/` --
    * Attempts:
      * Attempt1: `npm init @angular final`
      * Attempt2: `ng new final`
    * Solution: 
      * `mkdir final`
      * `ng new 4-control-flow-if --directory=adev/src/content/tutorials/learn-angular/steps/4-control-flow-if/final`
  * use [existing `common/` Angular skeleton project](../../common)
    * | "common/", `yarn build`
      * Problems:
        * Problem1: "Cannot find tsconfig file "tsconfig.app.json"
          * Solution: Add reference to ["adev/tsconfig"](/adev/tsconfig.app.json)
        * Problem2: Files from ALL files are taking in account "../../../../app/core/layout/secondary-navigation/secondary-navigation.component.scss"
          * Solution: TODO:
