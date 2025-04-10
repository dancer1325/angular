# ComponentsBasics

* This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.0-next.0.

## How has it been created?

* | root path,
  * `ng new componentsBasics --directory=adev/src/content/examples/testing/componentsBasics`
* | this path
  * `ng generate component banner --inline-template --inline-style --module app`
    * generates "banner-external.component.spec.ts"

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
  * Problems:
    * Problem1: "An unhandled exception occurred: error TS500: Error: ENOENT: no such file or directory, stat"
      * Attempt1: `npm install`
      * Attempt2: `rm -rf node_modules`, `rm -rf node_modules`, `npm install` & `ng test`
      * Attempt3: `npm cache clean --force` & `ng cache clean`
      * Attempt4: `rm -rf .angular/cache/`
      * Attempt5: `npx ng cache clean`
      * Attempt6: `ng generate config karma` -> create "karma.conf.json"
      * Attempt7: `./node_modules/karma/bin/karma start`
        * == start Karma
      * Solution: TODO:

## Running end-to-end tests

* `ng e2e`
