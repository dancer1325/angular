# Angular routes | single-page application

* goal
  * tutorial 
    * -- about -- Angular routing's patterns
    * SPA / uses MULTIPLE Angular routes

* | SPA
  * ALL your application's functions exist | 1! HTML page
    * if your user navigates -> browser 
      * renders ONLY the parts / matter to the user
      * ❌NOT load a NEW page ❌
  * == pattern / improve your application's user experience

* `Routes`
  * == `[JS object]` / 's 
    * properties
      * `path: string`
        * == URL path -- for the -- route
      * `component: string`
        * == component should be displayed | path
  * uses
    * define how users -- navigate through your -- application
    * configure unexpected or unauthorized behavior

* `@angular/router`'s `provideRouter`
  * allows
    * including defined `Routes` | your application
  * uses
    * WHATEVER module | your application's `bootstrapModule`

* `router-outlet`
  * := directive
  * allows
    * 👀dynamically loading a component -- based on the -- URL path 👀
  * uses
    ```.html
    <router-outlet></router-outlet>
    ```
    ```.ts
    imports: [RouterOutlet]
    ```

* [source code](/adev/src/content/examples/router-tutorial/final)

* steps
  * `ng generate component heroes-list` & `ng generate component crisis-list`
  * ALTERNATIVES
    * `app.component.onlyComponents.html`
    * `app.component.routerOutlet.html`
      * steps
        * | `app.component.ts`
          * `imports: [RouterOutlet, ...]`
        * | `app.routes.ts`
          * define 2 routes -- to -- `CrisisListComponent` & `HeroesListComponent`
        * open your browser | "http://localhost:4200/heroes-list", "http://localhost:4200/crisis-list"
    * `app.component.routerLink.html`
      * goal
        * add 2 links / users -- can navigate to -- DIFFERENT components
      * steps
        * | `app.component.ts`
          * `imports: [RouterLink, ...]`
        * | `app.component.routerLink.html`,
          * add 
            * HTML link elements / have `routerLink` attribute
            * ⚠️`<router-outlet></router-outlet>` ⚠️
    * `app.component.routerActiveLink.html`
      * goal
        * from app.component.routerLink.html -- identify the -- active route
      * steps
        * | `app.component.ts`
          * `imports: [RouterLinkActive, ...]`
        * | `app.component.routerActiveLink.html`,
          * add
            * HTML link elements / have `routerLinkActive` attribute
            * ⚠️`<router-outlet></router-outlet>` ⚠️

## Adding a redirect

* steps
  * | `app.routes.ts`
    * `{path: '', redirectTo: '/heroes-list', pathMatch: 'full'},`

* `Route`
  * 's `component` -- can be replaced by -- 2

      | Properties   | Details                                                                                                                                         |
      |:---        |:------------------------------------------------------------------------------------------------------------------------------------------------|
      | `redirectTo` | redirect from a path -- to -- ANOTHER path                                                                                                      |
      | `pathMatch`  | how much of the URL to match <br/> if you have a `''` path -> recommended to use `'full'` <br/> see the [Route API documentation](api/router/Route) |

## Adding a 404 page

* use case
  * user tries to access a route / NOT defined

* steps
  * `ng generate component page-not-found`
  * | `page-not-found.component.html`,
    * replace its contents
  * | `app.routes.ts`,
    * `{path: '**', component: PageNotFoundComponent}`
      * if you want to test it -> | browser, any RANDOM url / base "http://localhost:4200/"