# Event handling

* goal
  * how to add an event handler 

* Event handling
  * enables interactive features | web apps
    * _Example:_ respond to user actions (button presses, form submissions, ...)

* event binding -- `(eventName)="eventHandlerFunction()"`

  ```angular-ts
  @Component({
      ...
      template: `<button (click)="greet()">`
  })
  class AppComponent {
      greet() {
          console.log('Hello, there 👋');
      }
  }
  ```

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
      * `ng new 7-event-handling --directory=adev/src/content/tutorials/learn-angular/steps/7-event-handling/final`
  * use [existing `common/` Angular skeleton project](../../common)
    * | "common/", `yarn build`
      * Problems:
        * Problem1: "Cannot find tsconfig file "tsconfig.app.json"
          * Solution: Add reference to ["adev/tsconfig"](/adev/tsconfig.app.json)
        * Problem2: Files from ALL files are taking in account "../../../../app/core/layout/secondary-navigation/secondary-navigation.component.scss"
          * Solution: TODO:

