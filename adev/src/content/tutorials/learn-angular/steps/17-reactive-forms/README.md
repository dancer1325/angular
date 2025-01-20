# Reactive Forms

* goal
  * how to setup reactive forms

* reactive forms
  * allows
    * 👀managing your forms programmatically 👀 
      * ⚠️!= -- relying purely on the -- template ⚠️ 
  * `FormControl`
    * == reactive forms' class / 👀-- represent the -- form controls (e.g., inputs) 👀
    * -- has an associated directive -- `formControlName`
  *  `FormGroup`
    * == reactive forms' class / 
      * allows
        * 👀grouping form controls 👀 
      * uses
        * large forms
    * -- has an associated directive -- `formGroup`
    * ways to access their values 
      * property class' value

* `ngSubmit`
  * == Angular's submission event handler

* steps
  * | `app.component.ts`, 
    * add & import `ReactiveFormsModule` 
    * add `FormControl` and `FormGroup` 
    * add `[formGroup]` directive / EACH `FormGroup`
    * add `formControlName` directive / EACH `FormControl`
