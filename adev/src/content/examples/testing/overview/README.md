# Overview

* This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.0-next.0.

## How has it been created?

* | root path,
  * `ng new overview --directory=adev/src/content/examples/testing/overview`

## Running unit tests

* -- via -- [Karma](https://karma-runner.github.io) test runner

* ways
  * 💡`ng test`💡
    * Problems:
      * Problem1: "An unhandled exception occurred: error TS500: Error: ENOENT: no such file or directory, stat"
        * Attempt1: `npm install`
        * Attempt2: `rm -rf node_modules`, `rm -rf node_modules`, `npm install` & `ng test`
        * Attempt3: `npm cache clean --force` & `ng cache clean`
        * Attempt4: `rm -rf .angular/cache/`
        * Attempt5: `npx ng cache clean`
        * Attempt6: `ng generate config karma` -> create "karma.conf.json"
        * Solution: `rm -rf '${local_app_data}\Chrome\Cache'`
      * Problem2: "Server start failed on port 9876: Error: The '@angular-devkit/build-angular/plugins/karma' karma plugin is meant to be used from within Angular CLI and will"
        * Solution: Use `ng test` instead of direct Karma command
          * Attempt1: `./node_modules/karma/bin/karma start`
          * Solution: `ng test`
  * IDE
    * == `ng test`

### recommended | CI

* `ng test --no-watch --no-progress --browsers=ChromeHeadless`

## how to debug unit tests?
* steps
  * `ng test`
  * [follow these steps](/adev/src/content/guide/testing/debugging.md)

## Running end-to-end tests

* `ng e2e`
