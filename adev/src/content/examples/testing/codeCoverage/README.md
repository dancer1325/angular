# CodeCoverage

* This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.0-next.0.
* goal
  * Karma's code coverage reports

## How has it been created?

* | root path,
  * `ng new codeCoverage --directory=adev/src/content/examples/testing/codeCoverage`

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
  * generate "coverage/" with all reports
  * Problems:
    * Problem1: "An unhandled exception occurred: error TS500: Error: ENOENT: no such file or directory, stat"
      * Solution: `rm -rf '${local_app_data}\Chrome\Cache'`
    * Problem2: Why NOT displayed actively | "http://localhost:9877/"?
      * Attempt1: comment `jasmineHtmlReporter.suppressAll`
      * Solution: TODO:

## Running end-to-end tests

* `ng e2e`
