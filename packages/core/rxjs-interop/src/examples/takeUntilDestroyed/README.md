# Final

* This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.0-next.0.

## How has it been created?

* | root path,
  * `ng new takeUntilDestroyed --directory=packages/core/rxjs-interop/src/examples/takeUntilDestroyed`
* | here
  * `ng generate component passInjectionContext`

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


## steps to comprehend it?
* `ng serve`
  * | browser's console
    * check that you see "destroyRef is NOT passed - next" is logged
* click & mouse out
  * | browser's console
    * check that you see "destroyRef is passed - next" is logged
* kill the Angular app
  * | browser's console
    * ⚠️check that you STILL see "destroyRef is NOT passed - next" is logged⚠️
      * Reason:🧠AppComponent root NOT destroyed🧠
