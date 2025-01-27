# NgModules

* This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.0-next.0.

## How has it been created?

* | root path,
  * `ng new ngModules --directory=adev/src/content/examples/ngModules`
* | this folder
  * `ng generate module customMenu`
    * create the NgModule `CustomMenuModule`
  * `ng generate component CustomMenu`, `ng generate component CustomMenuItem`, `ng generate component CustomSlider` & `ng generate component CustomCheckbox`
* | `CustomMenuModule`,
  * add `declarations`

## How to run local development server?

* `ng serve`
* | browser,
  * open `http://localhost:4200/`

## How to build?

* `ng build`
  * compile your project
  * | `dist/`, store build artifacts

## Running unit tests

* -- via -- [Karma](https://karma-runner.github.io) test runner
* `ng test`

## Running end-to-end tests

* `ng e2e`
