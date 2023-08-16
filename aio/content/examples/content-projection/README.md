Example of [Content projection](https://angular.io/guide/content-projection)

# How to run locally?
* `cd /aio`
* `yarn build`
  * Problems:
    * Problem1: "The engine "node" is incompatible with this module. Expected version ">=16.14.0". Got "X.Y.Z""
      * Solution: `nvm use v16.20.1`
* `yarn example-playground content-projection --local`
  * Generated folder is created
* `cd ...aio/content/example-playground/content-projection`
* `ng serve`
* Open in your browser "localhost:4200"

# How was it created?
* It had got a basic skeleton with the main component, but it could have been generated via 
  * `npm init @angular content-projection` or
  * `ng new content-projection`
* All the components have been created via angular cli apparently
  * `ng generate component newComponent`

# Notes
* ZippyBasicComponent
  * single-slot content projection
    * `<ng-content>`
* ZippyMultislotComponent
  * multi-slot content projection
    * `<ng-content>` & `<ng-content select="selector">`
* ZippyComponent
  * conditional & multiple times content projection
    * `<ng-template>`
      * -- represented as -- instances of TemplateRef
  * `<ng-container>`
    * Angular element to hold structural directive without adding HTML element
  * `ngTemplateOutlet`
    *  directive which from a prepared TemplateRef — inserts an ⟶ Embedded view
      * === allows rendering the template
  * `ViewContainerRef.createEmbeddedView(TemplateRef)`
    * alternative to `ngTemplateOutlet` to manage the render of the ngTemplate
* ZippyNgprojectasComponent
  * project in more complex environments
    * === multi-slot + project a component / another element
  * `ngProjectAs`
    * attribute to project the whole component's content
  * `<ng-content>`
    * similar to the multi-slot to identify which to display