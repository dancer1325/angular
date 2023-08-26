Example of [Binding syntax](https://angular.io/guide/binding-syntax)

# How to run locally?
* `cd /aio`
* `yarn build`
  * Problems:
    * Problem1: "The engine "node" is incompatible with this module. Expected version ">=16.14.0". Got "X.Y.Z""
      * Solution: `nvm use v16.20.1`
* `yarn example-playground template-syntax --local`
  * Generated folder is created
* `cd content/example-playground/template-syntax`
* `ng serve`
* Open in your browser "localhost:4200"

# How was it created?
* It had got a basic skeleton with the main component, but it could have been generated via 
  * `npm init @angular template-syntax` or
  * `ng new template-syntax`
* All the components have been created manually apparently, since they don't follow the common structure

# Notes
* Components
  * `component.inputs` & `component.outputs` can be specified
    * === define via `@input` and `@output` decorators
  * `component.styles` are specified, separated by a whitespace
* Images come from public domain -- [Link](https://wpclipart.com/terms.html)
* `[ngClass]`
  * `<some-element [ngClass]="stringExp|arrayExp|objExp">...</some-element>`
    * `stringExp = CSSClass1 CSSClass2 ...`
    * `objExp` = `{key1BeingACSSClass: value1BeingABoolean, key2BeingACSSClass: value2BeingABoolean, ...}`
* `[ngStyle]`
  * `<some-element [ngStyle]="objExp">...</some-element>`
    * `objExp` = `{styleName1: valueOfStyle1, styleName2: valueOfStyle2, ...}`
* Ways to add a directive to an element
  * Add directive's selector to some element
  * If you want to listen a directive's event whose name === Directive's selector -> Just add the event's listening
* [aria-label](https://www.w3.org/TR/wai-aria-1.2/#aria-label)
* `[attr.AttributeName]="expression"`
  * `attr` is the prefix used always for attribute binding
* `<... disabled ...` / `<... disabled="expression" ...`  vs `<... [disabled]="expression" ...` 
  * `disabled` / `disabled="expression"`
    * always disabled, independent if you add a falsy or truly expression 
  * `[disabled]="expression"`
    * depending on the expression -> it's disabled or not
  * vs `hidden`
    * hidden    --  hided the element completely
    * disabled  --  element is grayed
* `innerHTML`
  * [DOM node's property](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML), without HTML element's attribute related
* Binding is
  * to properties of
    * DOM node
    * components
    * directives
    * events of the target object
  * not to HTML attributes!!
* Ways to build two-way binding
  * mix of property + event binding of
    * HTML elements or DOM's properties or
    * if they are form elements -> `NgModel`
  * `[(target)]="expression"`
* `{{ input | Pipe1 ... | Pipe2 ...}`
  * pipes which can be applied in chain
  * some pipes accept optional configurations to pass
  * Example
    * ` ... | json`
* `*:prefix="( :expression | :let ) (';' | ',')? ( :let | :as | :keyExp )*"`
  * Shorthand structural directive
  * `( :expression | :let )`
    * If Directive's selector == Some Directive's input parameter ⟶ we need to use `:expression`, else `:let`
      * Example: `ngIf` -> `:expression`, and `ngFor` -> `:let`
    * `expression: boolean | functionInvoke | componentVariables`
      * `functionInvoke | componentVariables` are evaluated as truly or falsy expressions
    * `:let`
      * `"let" :local "=" :export ";"?`
        * `:local`
          *  local variable used in the template -- Local, that not global -- 
        * `:export`
          * value exported by the directive
        * `;`
          * optional
* `ngIf`
  * `@Input() ngIf: T`
    * property to determine if a template should be displayed or not
    * `T`
      * truly / falsy expression
* `ngFor`
  * Ways to declare the use of
    * shorthand
    * full form with `ngTemplate`
  * `@Input() ngForTrackBy: TrackByFunction<T>`
    * optional property to specify a custom TrackByFunction
      * === how to identify the elements in the iterable
* Template reference variable
  * Ways to declare it
    * `#TemplateVariableName`
    * `#TemplateVariableName="exportAsComponentOrDirective"`
      * `exportAs` is a directive's property, to refer to the component / directive's instance
* `!`
  * is the [non-null assertion operator](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#non-null-assertion-operator-postfix-)
  * === not expected to be null or undefined
* `$any(ObjectToCast)`
  * Cast to any
  * avoid compilation errors, trying to get access to undeclared members
* svg
  * can be used as templates
