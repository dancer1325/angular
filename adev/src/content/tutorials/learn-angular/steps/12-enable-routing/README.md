# Routing Overview

* goal
  * how to use Angular Router
    * setup
    * configure
      * ❌NOT make it work YET ❌

* use case
  * app requires > 1 page
* steps
  * add `app.routes.ts` 
  ```ts
  import {Routes} from '@angular/router';
  
  export const routes: Routes = [];
  ```
  * configure the app to Angular Router | `app.config.ts` 
  * add `RouterOutlet` directive | you want to display the content

## How to run locally?

* ways
  * see [here](/adev/README.md#how-to-generate-a-specific-example-project-locally)
    * Solution: TODO:
  * create an angular project -- `final` --
    * Problems:
      * Problem1: "Error: This command is not available when running the Angular CLI inside a workspace." The "/adev/angular.json"
    * Attempts:
      * Attempt1: `npm init @angular final`
      * Attempt2: `ng new final`
    * Solution: 
      * `mkdir final`
      * `ng new 12-enable-routing --directory=adev/src/content/tutorials/learn-angular/steps/12-enable-routing/final`
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
