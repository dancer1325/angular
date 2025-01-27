# Integrate details page into application

* goal
  * how to use
    * route parameters -- to pass data to a -- route
    * `routerLink` directive / -- via dynamic data, create a -- route

* [Youtube](https://www.youtube.com/embed/-jRxG84AzCI?si=CbqIpmRpwp5ZZDnu&amp;start=345)

* route parameters
  * enable you to
    * include dynamic information -- as a part of -- your route URL  

* `routerLink`
  * == directive /
    * 👀enables Angular's router -- to create -- dynamic links | application 👀
      ```
      [routerLink]="['/staticPortion', dynamicData]"
      ```

* `ActivatedRoute`
  * == class /
    * 👀-- have access to the -- data about the CURRENT route 👀

* steps
  * | `housing-location.component.ts`,
    * add 
      * `<a routerLink ...>`
      * `imports: [RouterLink]`
  * | `details.component.ts`,
    * adjust the
      * template
      * class' body
        * include `HousingService` -- to retrieve -- information
  * | `details.component.css`
    * copy the style
  * | `app.component.ts`
    * 'logo, add a `routerLink` -- to -- `HomeComponent`

* see
  * [Route Parameters](../../../../guide/routing/common-router-tasks#accessing-query-parameters-and-fragments)
  * [Optional Chaining Operator](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
