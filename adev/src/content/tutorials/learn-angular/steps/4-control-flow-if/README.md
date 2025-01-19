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
  * create an angular project
    * Attempts:
      * Attempt1: `npm init @angular final`
      * Attempt2: `ng new final`
    * Solution: TODO:
  * use [existing `common/` Angular skeleton project](../../common)
    * | "common/", `yarn build`
      * Problems:
        * Problem1: "Cannot find tsconfig file "tsconfig.app.json"
          * Solution: Add reference to ["adev/tsconfig"](/adev/tsconfig.app.json)
        * Problem2: Files from ALL files are taking in account "../../../../app/core/layout/secondary-navigation/secondary-navigation.component.scss"
          * Solution: TODO:
