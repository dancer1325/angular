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
    * Problems:
      * Problem1: "Error: This command is not available when running the Angular CLI inside a workspace." The "/adev/angular.json"
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
          * Solution: Create dedicated "tsconfig.json"
        * Problem3: " Cannot find module '@angular/core'"
          * Attempt1: add "tsconfig.json" | this path
          * Attempt2: add "tsconfig.json" | "common"
          * Solution: TODO:
  * [waiting for reply of the question](https://discord.com/channels/748677963142135818/762717176142495814/1330602931694866483)
