# Overview of Angular libraries

* == Angular project /
  * can NOT run on its OWN (!= Angular application)
  * 👀-- extend -- Angular's base features 👀
* allows
  * re-use | DIFFERENT applications
* uses
  * | Angular applications 
    * if you want to add Angular features | non-Angular web applications -> use [Angular custom elements](../../guide/elements)
* use cases
  * create unified UI + presented data
* how to use it?
  * based on the audience
    * public -> publish -- as -- *npm packages*
      * _Example:_ `@angular/forms`
    * private -> locally | your workspace
  * add & import | YOUR application
    * _Example:_ 
      * `ng add @angular/forms`
      * import `@angular/forms`'s `ReactiveFormsModule` | your application code
  * see [Using Published Libraries](using-libraries)

* _Examples:_
  * [Angular Material](https://material.angular.io)
  * [service worker](../../ecosystem/service-workers)

## Creating libraries

* == architectural decision
  * OTHERS
    * feature is a component OR service ?
    * scope of a component ?
* good practices | create a library
  * library's artifacts -- MUST be decoupled from the -- application's business logic
* 's complexity > create application's complexity

* see [Creating Libraries](creating-libraries)