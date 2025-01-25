# Add routes to the application

* goal
  * enable routing
  * how to add routes | your app

* [Youtube](https://www.youtube.com/embed/r5DEBMuStPw?si=H6Bx6nLJoMLaMxkx)

* steps
  * `ng generate component details`
  * | `src/app`,
    * create `routes.ts`
  * | `main.ts`,
    * import the routes
    * update the call to `bootstrapApplication`
  * | `src/app/app.component.ts`,
    * add `RouterModule` | `imports`
    * | template,
      * replace `<app-home></app-home>` -- by -- `<router-outlet>`
  * | `routes.ts`,
    * declare the variable `Routes`

* Routing
  * == ability / from one component -- navigate to -- another component
  * | [SPA](../../../../guide/routing),
    * ONLY SOME parts of the page -- are -- updated 

* [Angular Router](../../../../guide/routing)
  * enables
    * declare routes / if that route is requested -- specify the -- component to display

* see
  * [Routing in Angular Overview](../../../../guide/routing)
  * [Common Routing Tasks](../../../../guide/routing/common-router-tasks)
