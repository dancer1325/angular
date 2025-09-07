# CodeCoverage

* This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.0-next.0.
* goal
  * Karma's code coverage reports

## How has it been created?

* | root path,
  * `ng new codeCoverage --directory=adev/src/content/examples/testing/codeCoverage`
* | "angular.json"
  * if you want to create a coverage report | ANYTIME / you run `ng test` -> add
    ```
    "test": {
      "options": {
        "codeCoverage": true
      }
    }
    ```

## Running unit tests

* -- via -- [Karma](https://karma-runner.github.io) test runner
* `ng test`
  * generate "coverage/" with all reports
  * Problems:
    * Problem1: "An unhandled exception occurred: error TS500: Error: ENOENT: no such file or directory, stat"
      * Solution: `rm -rf '${local_app_data}\Chrome\Cache'`
    * Problem2: Why NOT displayed actively | "http://localhost:9877/"?
      * Attempt1: comment `jasmineHtmlReporter.suppressAll`
      * Attempt2: add `logLevel: config.LOG_INFO,` & `port: 9877,`
      * Solution: `ng test --watch`
      * Reason: 🧠"angular.json" is configured specifically with `"browsers": "ChromeHeadless"`🧠

### coverage report
* | root of your project
  * `ng test --no-watch --code-coverage`
    * check the coverage report | "/coverage/index.html"


## Running end-to-end tests

* `ng e2e`
