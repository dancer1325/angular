# Updating the Component Class

* goal
  * how to update the component class
  * how to use [interpolation](/adev/src/content/guide/templates/binding.md#render-dynamic-text-with-text-interpolation) 

* component's logic and behavior
  * defined | component's TypeScript class

* steps
  * add a property | `AppComponent` class

  ```ts
  export class AppComponent {
    // type -- can be inferred by -- Typescript
    city = 'San Francisco';
  }
  ```
  * `{{ }}`
    * interpolation 
    * == Angular template syntax
      * allows
        * call functions,
        * evaluate expressions
    * how does it work?
      * evaluates the contents
      * renders the output | template

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
      * `ng new 2-updating-the-component-class --directory=adev/src/content/tutorials/learn-angular/steps/2-updating-the-component-class/final`
  * use [existing `common/` Angular skeleton project](../../common)
    * | "common/", `yarn build`
      * Problems:
        * Problem1: "Cannot find tsconfig file "tsconfig.app.json"
          * Solution: Add reference to ["adev/tsconfig"](/adev/tsconfig.app.json)
        * Problem2: Files from ALL files are taking in account "../../../../app/core/layout/secondary-navigation/secondary-navigation.component.scss"
          * Solution: TODO:
