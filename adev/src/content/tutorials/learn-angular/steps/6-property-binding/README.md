# Property Binding | Angular

* Property binding | Angular
  * enables you to set dynamically values -- for -- HTML elements' OR Angular components'
    * properties
    * attributes
      ```angular-html
      <  [someAttribute]= >
      ```
      ```angular-html
      <!-- `src` attribute value -- will be bound to the -- class property `imageURL` -->
      <img alt="photo" [src]="imageURL"> 
      ```
  * use cases
    * toggle button features,
    * set image paths programmatically,
    * share values between components
  * see [binding](/adev/src/content/guide/templates/binding.md)

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

