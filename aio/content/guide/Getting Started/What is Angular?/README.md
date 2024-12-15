# Angular applications: The essentials
* -- '../examples/what-is-angular' --
  * Components
    * allow
      * strong encapsulation -- 'app.component.html' --
      * intuitive application structure -- 'app.component.html' --
      * painless to unit test -- 'hello-world-component.spec.ts' --
      * improve readability -- 'app.component.html' --
      * reusing sets of UI functionality -- 'app.component.html' --
    * Check the resulting DOM
      * Open the Chrome Debugger tools
  * Templates
    * allow
      * adding syntax elements to extend the HTML
        * inserting dynamic values == if it's changed -> Angular automatically updates it
          * `{{ ValueInComponentToInterpolate }}` -- 'hello-world-interpolation' | 'hello-world-template' --
            * Play with 'hello-world-template' to check how dynamic and automatically it's updated by Angular
          * `[HTMLElementProperty]=”ValueToBindInTheComponentClass”` or `[HTMLElementAttribute]=”ValueToBindInTheComponentClass”`
          * `(eventName)=”MethodInTheComponentClass”`