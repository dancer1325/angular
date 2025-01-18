# Components in Angular

* goal
  * how to update the component's
    * template
    * styles 

* Components
  * == Angular application's foundational building blocks 
  * 👀== TypeScript class + HTML template + CSS styles 👀
    * EACH one can be split | DIFFERENT files

* steps
  * replace the `template`' content -- by --

  ```ts
  template: `
    Hello Universe
  `,
  ```
 
  * change the color of the text.

  ```ts
  styles: `
    :host {
      color: #a144eb;
    }
  `,
  ```

## How to run locally?

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
