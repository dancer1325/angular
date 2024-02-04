# DocumentationApp

This project 
* was generated with `ng new documentationApp`
  * [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.
* supports the [NgIf](https://angular.io/api/common/NgIf)

# := Structural directive 
* === DOM layout is changed -- ExpressionComponent -- 
  * === DOM elements are added or removed
* which
  * based on the value of an expression -> creates / disposes a template -- ExpressionComponent --
    * if expression == true ⟶ Angular renders the template in a `then`
    * if expression == false / null ⟶ Angular renders the template in a `else`
      * by default the template in `else` is blank 
    * expression can be stored in a variable locally
      * Check also '../NgIfAs'
  * exported from 'CommonModule' -- AppModule --
  * `[ngIf]` or `*ngIf` -- CssSelectorComponent --
    * CSS selector 
  * properties -- PropertiesComponent --
    * `@Input() ngIf: T`
    * `@Input() ngIfThen: TemplateRef<NgIfContext<T>>`
      * Optional to be added or not!! -- PropertiesComponent --
    * `@Input() ngIfElse: TemplateRef<NgIfContext<T>>`
      * Optional to be added or not!! -- PropertiesComponent --
    * `static ngTemplateGuard_ngIf: 'binding’`
      * TODO: Check how to use it?
    * ways to define them
      * inline
      * `<ng-template>` referenced
        * in the template
        * in the component

## How to run locally?
* `ng serve`
* Open in your browser `http://localhost:4200/`
