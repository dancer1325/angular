# Create Home component

* goal
  * how to create a new [component](/adev/src/content/guide/components)

* [Youtube video](https://www.youtube.com/embed/R0nRX8jD2D0?si=OMVaw71EIa44yIOJ)

* Angular component
  * == basic Angular application's building block
  * -- nest -- OTHER components
  * 's metadata
    * `selector`
      * how to refer to the component | templates
    * `standalone`
      * == whether the component -- requires a -- `NgModule`
    * `imports`
      * == component's dependencies
    * `template`
      * == component's HTML
    * `styleUrls`
      * == list the URLs of the CSS files / -- used by the -- component

* steps
  * `ng generate component home`
    * create home component
  * | `app.component.ts`,
    * import & add `HomeComponent`
  * | `home.component.ts`,
    * update the `template`
  * | `home.component.css`,
    * add styles
    