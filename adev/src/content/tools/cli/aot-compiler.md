# Ahead-of-time (AOT) compilation

* goal
  * compile your applications -- via -- AOT compiler / you can specify
    * metadata &
    * compiler options

* Angular 
  * compilation process of Angular's components & templates 
    * | BEFORE running 
    * Reason: 🧠can NOT be understood -- DIRECTLY, by the -- browser 🧠
  * ahead-of-time (AOT) compiler
    * | build phase / BEFORE browser downloads & runs the code,
      * 💡Angular HTML & TypeScript code -- is converted into -- efficient JavaScript code 💡

| Reasons                                 | Details                                                                                                                                                                                                                 |
|:----------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Faster rendering                        | browser -- downloads an -- application's pre-compiled version == WITHOUT waiting -- to compile the -- application first                                                                                                 |
| Fewer asynchronous requests             | compiler -- inlines -- EXTERNAL HTML templates & CSS style sheets \| application JavaScript / <br/> &nbsp;&nbsp; eliminate separate ajax requests / those source files                                                  |
| Smaller Angular framework download size | if the application is ALREADY compiled -> ❌NO need to download the Angular compiler ❌<br/> compiler's size == (NORMALLY) half of Angular's size                                                                         |
| Detect template errors earlier          | \| build phase, AOT compiler can detects & reports template binding errors                                                                                                                                              |
| Better security                         | FEWER injection attacks' opportunities <br/> &nbsp;&nbsp; Reason: 🧠HTML templates & Angular components -- are converted into -- JavaScript files🧠|

* [Angular compiler explanation](https://www.youtube.com/watch?v=anphffaCZrQ)
  * TODO:

## Choosing a compiler

* ways to compile your Angular's application

| Angular compile       | Details                                                                                   |
|:----------------------|:------------------------------------------------------------------------------------------|
| Just-in-Time \(JIT\)  | \| runtime, compiles your application \| browser <br/> by default, \| Angular 8-          |
| Ahead-of-Time \(AOT\) | \| build time, compiles your application & libraries  <br/> by default, \| Angular v9+ |

* uses
  * | [`ng build`](cli/build) (== ONLY build)
  * | [`ng serve`](cli/serve) (== build & serve locally) 

* way to specify
  * `angular.json`'s `aot` property
    * | Angular v9+
      * by default, `aot=true`

## How AOT works

* extracts metadata 1! -- to interpret the -- Angular application's parts / supposed to manage
  * ways to specify metadata
    * | **decorators**
      * _Example:_ `@Component()` & `@Input()`
    * | decorated classes' constructor declarations
  * metadata's information
    * how to
      * construct your application classes' instances
      * interact your application classes' instances | runtime

* _Example:_
  ```typescript
  @Component({
    selector: 'app-typical',
    template: '<div>A typical component for {{data.name}}</div>'
  })
  export class TypicalComponent {
    @Input() data: TypicalData;
    constructor(private someService: SomeService) { … }
  }
  ```
  * Angular compiler 
    * -- extracts -- 1! the metadata 
    * -- generates a -- factory for `TypicalComponent`
      * if your Angular application needs to create a `TypicalComponent` instance -> Angular -- calls the -- factory /
        * produces a NEW visual element,
        * NEW element -- is bound to a -- NEW component class' instance + its injected dependency

### Compilation phases

|     | Phase                  | Details                                                                                                                                                                                                                                                                                                  |
|:--- |:---                    |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1   | code analysis          | TypeScript compiler & AOT collector -- create a -- source's representation <br/> &nbsp;&nbsp; ❌NOT attempt to interpret the metadata ❌ <br/> if there is a metadata syntax violation -> records errors                                                                                                   |
| 2   | code generation        | compiler's `StaticReflector` <br/> &nbsp;&nbsp; -- interprets the -- metadata / collected \| PREVIOUS phase <br/> &nbsp;&nbsp; performs ADDITIONAL validation of the metadata <br/> &nbsp;&nbsp; if it detects a metadata restriction violation -> throws an error                                       |
| 3   | template type checking | OPTIONAL phase <br/> &nbsp;&nbsp; if you want to enable -> set `strictTemplates` configuration option <br/> Angular *template compiler* -- , via TypeScript compiler, validates the -- binding expressions \| templates <br/> see [Angular compiler options](reference/configs/angular-compiler-options) |

### Metadata restrictions

* write metadata | TypeScript's subset 
  * required constraints
    * limit [expression syntax](#expression-syntax-limitations) | JavaScript's supported subset
    * | AFTER [code folding](#code-folding),
      * ONLY reference exported symbols 
    * call [functions supported](#supported-classes-and-functions) -- ONLY by the -- compiler
    * Input/Outputs & data-bound class members -- MUST be -- public OR protected
    * see [Angular: Writing AOT-friendly applications](https://medium.com/sparkles-blog/angular-writing-aot-friendly-applications-7b64c8afbe3f)

* Errors | AOT compilation
  * Reason: 🧠 COMMONLY, because metadata NOT meet compiler's requirements🧠
  * see [AOT Metadata Errors](tools/cli/aot-metadata-errors)

### Configuring AOT compilation

* [TypeScript configuration file](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) -- controls the -- compilation process
* see [Angular compiler options](reference/configs/angular-compiler-options)

## Phase 1: Code analysis

* TypeScript compiler 
  * -- makes -- SOME analytic work
  * -- emits -- `.d.ts` /
    * type information -- , used by the AOT compiler, to generate -- application code
* AOT **collector**
  * analyzes the metadata recorded | Angular decorators
  * outputs metadata information | **`.metadata.json`** files
    * 1 / `.d.ts` file

* `.metadata.json`
  * == decorator's metadata's OVERALL structure's diagram
  * == [abstract syntax tree (AST)](https://en.wikipedia.org/wiki/Abstract_syntax_tree)

* Angular's [schema.ts](https://github.com/angular/angular/blob/main/packages/compiler-cli/src/metadata/schema.ts) 
  * == JSON format == collection of TypeScript interfaces

### Expression syntax limitations

* AOT collector 
  * ONLY understands JavaScript's a subset
  * == metadata objects

| Syntax                    | Example |
|:---                       |:---     |
| Literal object            | `{cherry: true, apple: true, mincemeat: false}`                        |
| Literal array             | `['cherries', 'flour', 'sugar']`                                       |
| Spread in literal array   | `['apples', 'flour', …]`                                               |
| Calls                     | `bake(ingredients)`                                                    |
| New                       | `new Oven()`                                                           |
| Property access           | `pie.slice`                                                            |
| Array index               | `ingredients[0]`                                                       |
| Identity reference        | `Component`                                                            |
| A template string         | <code>`pie is ${multiplier} times better than cake`</code> |
| Literal string            | `'pi'`                                                                 |
| Literal number            | `3.14153265`                                                           |
| Literal boolean           | `true`                                                                 |
| Literal null              | `null`                                                                 |
| Supported prefix operator | `!cake`                                                                |
| Supported binary operator | `a+b`                                                                  |
| Conditional operator      | `a ? b : c`                                                            |
| Parentheses               | `(a+b)`                                                                |

* if an expression uses unsupported syntax -> AOT collector writes an error node | `.metadata.json` file
  * AFTER,
    * if compiler needs that piece of metadata -- to generate the -- application code -> compiler -- reports the -- error 
  * 👀if you want `ngc` report syntax errors IMMEDIATELY (!= produce `.metadata.json` / has errors) -> set `strictMetadataEmit` option | TypeScript configuration file 👀
    ```
    "angularCompilerOptions": {
      …
      "strictMetadataEmit" : true
    }
    ```
    * recommendations
      * build libraries

### NO arrow functions

* AOT compiler 
  * ❌does NOT support
    * [function expressions](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/function)
    * [arrow functions](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions) ❌
    * Solution: 👀use export function 👀
      * | Angular v5+,
        * | emite .js, done AUTOMATICALLY 

* _Example:_ 
  ```
  @Component({
    …
    providers: [{provide: server, useFactory: () => new Server()}]
    // () => new Server()   AOT collector does NOT support it -> generates an error 
  })
  ```
  
  solution
  ```
  export function serverFactory() {
    return new Server();
  }
  
  @Component({
    …
    providers: [{provide: server, useFactory: serverFactory}]
  })
  ```

### Code folding

* TODO:
The compiler can only resolve references to ***exported*** symbols.
The collector, however, can evaluate an expression during collection and record the result in the `.metadata.json`, rather than the original expression.
This allows you to make limited use of non-exported symbols within expressions.

For example, the collector can evaluate the expression `1 + 2 + 3 + 4` and replace it with the result, `10`.
This process is called *folding*.
An expression that can be reduced in this manner is *foldable*.

The collector can evaluate references to module-local `const` declarations and initialized `var` and `let` declarations, effectively removing them from the `.metadata.json` file.

Consider the following component definition:

<docs-code language="typescript">

const template = '<div>{{hero.name}}</div>';

@Component({
  selector: 'app-hero',
  template: template
})
export class HeroComponent {
  @Input() hero: Hero;
}

</docs-code>

The compiler could not refer to the `template` constant because it isn't exported.
The collector, however, can fold the `template` constant into the metadata definition by in-lining its contents.
The effect is the same as if you had written:

<docs-code language="typescript">

@Component({
  selector: 'app-hero',
  template: '<div>{{hero.name}}</div>'
})
export class HeroComponent {
  @Input() hero: Hero;
}

</docs-code>

There is no longer a reference to `template` and, therefore, nothing to trouble the compiler when it later interprets the *collector's* output in `.metadata.json`.

You can take this example a step further by including the `template` constant in another expression:

<docs-code language="typescript">

const template = '<div>{{hero.name}}</div>';

@Component({
  selector: 'app-hero',
  template: template + '<div>{{hero.title}}</div>'
})
export class HeroComponent {
  @Input() hero: Hero;
}

</docs-code>

The collector reduces this expression to its equivalent *folded* string:

<docs-code language="typescript">

'<div>{{hero.name}}</div><div>{{hero.title}}</div>'

</docs-code>

#### Foldable syntax

The following table describes which expressions the collector can and cannot fold:

| Syntax                           | Foldable |
|:---                              |:---      |
| Literal object                   | yes                                      |
| Literal array                    | yes                                      |
| Spread in literal array          | no                                       |
| Calls                            | no                                       |
| New                              | no                                       |
| Property access                  | yes, if target is foldable               |
| Array index                      | yes, if target and index are foldable    |
| Identity reference               | yes, if it is a reference to a local     |
| A template with no substitutions | yes                                      |
| A template with substitutions    | yes, if the substitutions are foldable   |
| Literal string                   | yes                                      |
| Literal number                   | yes                                      |
| Literal boolean                  | yes                                      |
| Literal null                     | yes                                      |
| Supported prefix operator        | yes, if operand is foldable              |
| Supported binary operator        | yes, if both left and right are foldable |
| Conditional operator             | yes, if condition is foldable            |
| Parentheses                      | yes, if the expression is foldable       |

If an expression is not foldable, the collector writes it to `.metadata.json` as an [AST](https://en.wikipedia.org/wiki/Abstract*syntax*tree) for the compiler to resolve.

## Phase 2: code generation

* AOT collector
  * NOT try to understand metadata / outputs | `.metadata.json`
* AOT compiler
  * | code generation phase,
    * interpret the `.metadata.json`
      * if the semantics violate compiler rules ALTHOUGH *syntactically* correct metadata -> it may be rejected

### Public or protected symbols

* compiler
  * ⚠️can -- ONLY reference -- exported symbols ⚠️

* Decorated component class members
  * requirements
    * public or
    * protected
    * _Example:_ `private @Input()` == NOT ALLOWED

* Data bound properties
  * requirements
    * public or
    * protected

### Supported classes & functions

* AOT collector
  * can represent a 
    * function call OR
    * object creation -- via -- `new`

* AOT compiler
  * ⚠️can refuse to
    * generate a call | particular function 
    * create a particular object ⚠️
  * ONLY can
    * create core decorators classes' instances
    * call to macros ( == functions OR static methods) / return expressions

| Compiler action      | Details                                                                                                                                               |
|:---                  |:------------------------------------------------------------------------------------------------------------------------------------------------------|
| New instances        | compiler ONLY allows metadata / create instances -- from -- `@angular/core`'s `InjectionToken`                                                        |
| Supported decorators | compiler ONLY supports metadata / [`@angular/core` module's decorators](api/core#decorators)                                                          |
| Function calls       | Factory functions must be exported named functions <br/> ❌AOT compiler does NOT support lambda expressions \("arrow functions"\) / factory functions❌ |

### Functions & static method calls

* AOT collector 
  * ONLY ALLOWS function OR static method / contains 1! `return` statement
* Compiler
  * ONLY ALLOWS functions OR static methods / return an expression

* _Example:_
  ```
  export function wrapInArray<T>(value: T): T[] {
    return [value];      // expression returned -> can be used | metadata definition  
  }
  ```
  use  `wrapInArray()`
  ```
  @NgModule({
    declarations: wrapInArray(TypicalComponent)
  })
  export class TypicalModule {}
  ```
  Compiler treats this -- as --
  ```
  @NgModule({
    declarations: [TypicalComponent]
  })
  export class TypicalModule {}
  ```

* macros 
  * allows
    * simplifying [NgModules' configuration](guide/ngmodules)
  * _Example:_ Angular [`RouterModule`](api/router/RouterModule) exported macro static methods
    * `forRoot`
    * `forChild`
    * see [source code](https://github.com/angular/angular/blob/main/packages/router/src/router_module.ts#L139 "RouterModule.forRoot source code")

### Metadata rewriting

* TODO:
The compiler treats object literals containing the fields `useClass`, `useValue`, `useFactory`, and `data` specially, converting the expression initializing one of these fields into an exported variable that replaces the expression.
This process of rewriting these expressions removes all the restrictions on what can be in them because
the compiler doesn't need to know the expression's value — it just needs to be able to generate a reference to the value.

You might write something like:

<docs-code language="typescript">

class TypicalServer {

}

@NgModule({
  providers: [{provide: SERVER, useFactory: () => TypicalServer}]
})
export class TypicalModule {}

</docs-code>

Without rewriting, this would be invalid because lambdas are not supported and `TypicalServer` is not exported.
To allow this, the compiler automatically rewrites this to something like:

<docs-code language="typescript">

class TypicalServer {

}

export const θ0 = () => new TypicalServer();

@NgModule({
  providers: [{provide: SERVER, useFactory: θ0}]
})
export class TypicalModule {}

</docs-code>

This allows the compiler to generate a reference to `θ0` in the factory without having to know what the value of `θ0` contains.

The compiler does the rewriting during the emit of the `.js` file.
It does not, however, rewrite the `.d.ts` file, so TypeScript doesn't recognize it as being an export.
And it does not interfere with the ES module's exported API.

## Phase 3: Template type checking

* == type-check expressions | templates
  * -> | BEFORE runtime crashes, catch any errors
    * _Example:_ 
      ```
      @Component({
        selector: 'my-component',
        template: '{{person.addresss.street}}'
      })
      class MyComponent {
        person?: Person;
      }
      ```
      produces the error "my.component.ts.MyComponent.html(1,1): : Property 'addresss' does not exist on type 'Person'. Did you mean 'address'?"

* == Angular compiler's features
  * validate binding expressions | templates -- via -- TypeScript compiler 
  * if you want to enable -> | project's TypeScript configuration file,
    * add `"angularCompilerOptions"`' `"fullTemplateTypeCheck"`
      * see [Angular Compiler Options](reference/configs/angular-compiler-options)

TODO:
The file name reported in the error message, `my.component.ts.MyComponent.html`, is a synthetic file
generated by the template compiler that holds contents of the `MyComponent` class template.
The compiler never writes this file to disk.
The line and column numbers are relative to the template string in the `@Component` annotation of the class, `MyComponent` in this case.
If a component uses `templateUrl` instead of `template`, the errors are reported in the HTML file referenced by the `templateUrl` instead of a synthetic file.

The error location is the beginning of the text node that contains the interpolation expression with the error.
If the error is in an attribute binding such as `[value]="person.address.street"`, the error
location is the location of the attribute that contains the error.

The validation uses the TypeScript type checker and the options supplied to the TypeScript compiler to control how detailed the type validation is.
For example, if the `strictTypeChecks` is specified, the error

<docs-code hideCopy language="shell">

my.component.ts.MyComponent.html(1,1): : Object is possibly 'undefined'

</docs-code>

is reported as well as the above error message.

### Type narrowing

The expression used in an `ngIf` directive is used to narrow type unions in the Angular
template compiler, the same way the `if` expression does in TypeScript.
For example, to avoid `Object is possibly 'undefined'` error in the template above, modify it to only emit the interpolation if the value of `person` is initialized as shown below:

<docs-code language="typescript">

@Component({
  selector: 'my-component',
  template: '<span *ngIf="person"> {{person.address.street}} </span>'
})
class MyComponent {
  person?: Person;
}

</docs-code>

Using `*ngIf` allows the TypeScript compiler to infer that the `person` used in the binding expression will never be `undefined`.

For more information about input type narrowing, see [Improving template type checking for custom directives](guide/directives/structural-directives#directive-type-checks).

### Non-null type assertion operator

Use the non-null type assertion operator to suppress the `Object is possibly 'undefined'` error when it is inconvenient to use `*ngIf` or when some constraint in the component ensures that the expression is always non-null when the binding expression is interpolated.

In the following example, the `person` and `address` properties are always set together, implying that `address` is always non-null if `person` is non-null.
There is no convenient way to describe this constraint to TypeScript and the template compiler, but the error is suppressed in the example by using `address!.street`.

<docs-code language="typescript">

@Component({
  selector: 'my-component',
  template: '<span *ngIf="person"> {{person.name}} lives on {{address!.street}} </span>'
})
class MyComponent {
  person?: Person;
  address?: Address;

  setData(person: Person, address: Address) {
    this.person = person;
    this.address = address;
  }
}

</docs-code>

The non-null assertion operator should be used sparingly as refactoring of the component might break this constraint.

In this example it is recommended to include the checking of `address` in the `*ngIf` as shown below:

<docs-code language="typescript">

@Component({
  selector: 'my-component',
  template: '<span *ngIf="person &amp;&amp; address"> {{person.name}} lives on {{address.street}} </span>'
})
class MyComponent {
  person?: Person;
  address?: Address;

  setData(person: Person, address: Address) {
    this.person = person;
    this.address = address;
  }
}

</docs-code>
