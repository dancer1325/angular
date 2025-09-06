# ComponentlessRoutes

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.5.

## How has it been created?

* | root path,
  * `ng new componentless-routes --directory=packages/router/src/examples/componentless-routes`

* | this path,
  * `ng generate component MainChild`
  * `ng generate component AuxChild`

* | app.component.html
  * add 
    ```.html
    <app-main-child></app-main-child>   
    <app-aux-child></app-aux-child>
    ```
* | app.router.ts
  * modify it

## how to run?
* `ng serve`
* | '/parent/10',
  * -> creates the MainChild & AuxChild components
* | 'parent/10/(a//aux:b)',
  * route instantiates MainChild & AuxChild components
