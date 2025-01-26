# Creating custom route matches

* goal
  * how to use custom matching strategy patterns | Angular routing
    * by implementing Angular's `UrlMatcher`

* Angular Router
  * -- supports a -- powerful matching strategy /
    * enable users -- navigate -- your application
    * supports
      * static routes,
      * variable routes with parameters, 
      * wildcard routes,
      * ...
    * you can build your OWN custom pattern matching

* custom pattern matching
  * == function / 
    * it's tasks are
      * verifies / array -- contains -- 1! segment
      * matcher -- is done via a -- regular expression
      * if there is a match -> the function 👀returns the entire URL 👀
      * if there is NOT a match -> 
        * the function returns null
        * router -- continues to look for -- other routes / match the URL
    * 's behaviour == ANY other route's behaviour

* steps
  * `ng generate component profile`
  * | `profile.component.html`,
    * modify it
  * | `app.component.html`,
    * modify it
  * | `app.config.ts`,
    * modify `provideRouter(routes, withComponentInputBinding())`
  * | app.routes.ts,
    * define the custom route matcher
  * `profile.component.ts`
    * bind the route parameter | `profile` component -- via --
      * 👀creating an input class' property 👀
  * if you want to test custom URL matcher -> click on "my profile"
    * TODO: Why nothing happens?

## Test your custom URL matcher

* see 
  * [Custom Route Matching -- with the -- Angular Router](https://medium.com/@brandontroberts/custom-route-matching-with-the-angular-router-fbdd48665483)
