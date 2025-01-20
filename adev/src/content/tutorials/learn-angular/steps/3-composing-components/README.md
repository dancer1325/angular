# Composing Components

* goal
  * how to compose components

* `selector`
  * == component's property
  * uses
    * reference the component | ANOTHER template, -- as an -- HTML tag
      * 👀ANY NUMBER of times can be reused 👀

* steps
  * add component | OTHER component's `imports`

  ```ts
  template: `<app-user />`,
  imports: [UserComponent]
  ```

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
      * `ng new 3-composing-components --directory=adev/src/content/tutorials/learn-angular/steps/3-composing-components/final`
  * use [existing `common/` Angular skeleton project](../../common)
    * | "common/", `yarn build`
      * Problems:
        * Problem1: "Cannot find tsconfig file "tsconfig.app.json"
          * Solution: Add reference to ["adev/tsconfig"](/adev/tsconfig.app.json)
        * Problem2: Files from ALL files are taking in account "../../../../app/core/layout/secondary-navigation/secondary-navigation.component.scss"
          * Solution: TODO:
