# Angular services

* goal
  * how to 
    * create an Angular service
    * use dependency injection | your app

* [Youtube](https://www.youtube.com/embed/-jRxG84AzCI?si=rieGfJawp9xJ00Sz)

* Angular services
  * allows
    * serving data | your app / separated -- from -- Angular's components
  * 👀if you want to use it | MULTIPLE components -> make it injectable 👀
    * == component's dependency

* Dependency injection
  * == mechanism / manages the 
    * dependencies of an app's components
    * services / OTHER components can use

* steps
  * `ng generate service housing --skip-tests`
  * | HousingService,
    * paste `HomeComponent`'s properties
    * create functions / return those properties
  * | HomeComponent
    * inject the NEW service
    * get the list of items -- invoking a -- service's method

* see 
  * [Creating an injectable service](../../../../guide/di/creating-injectable-service) 
  * [Dependency injection | Angular](../../../../guide/di)
  * [`ng generate service`](../../../../cli/generate/service)
  * [`ng generate`](../../../../cli/generate)
