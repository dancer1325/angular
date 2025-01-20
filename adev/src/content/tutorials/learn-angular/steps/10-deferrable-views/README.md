# Deferrable Views

* goal
  * how to use deferrable views -- to defer load a -- section of your component template 

* deferrable views
  * by default, 
    * deferrable views happen | browser is idle
  * ALLOWED trigger options
    * viewport trigger
      * == if content enters | viewport -> content starts to be loaded
      * uses
        * | content / far away down, scrolling down
  * use cases
    * components / 
      * ❌NOT need to be loaded right away ❌
      * SOME of those resources -- are loaded later, via -- deferrable views
  * steps
    * wrap the component -- with -- `@defer`

      ```angular-html
      @defer {
        <angularComponent />
      }
      ```
    * | (, BEFORE deferred loading starts) 
      * displayed content -- is wrapped with -- `@placeholder`
        * == eagerly loaded
        * properties
          * `minimum`
            * == MINIMUM time / this content is displayed
            * if load of deferred content is fast -> avoid flickering
    * | (start loading deferred content, deferred content NOT YET loaded)
      * displayed content -- is wrapped with -- `@loading`
        * == eagerly loaded
        * properties
          * `minimum` 
            * == MINIMUM time / this content is displayed
            * if load of deferred content is fast -> avoid flickering
          * `after`
    * add a viewport trigger
  * see [documentation for Deferrable views](../../../../guide/templates/defer)

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
      * `ng new 10-deferrable-views --directory=adev/src/content/tutorials/learn-angular/steps/10-deferrable-views/final`
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

