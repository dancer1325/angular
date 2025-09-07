# Services

* goal
  * test Angular services
    * [ValueService](src/app/value.service.ts)
      * [WITHOUT Angular testing utilities](src/app/value.service.spec.ts)
      * [WITH Angular testing utilities](src/app/value.service.testbed.spec.ts)
    * [/ have service dependencies](src/app/master.service.ts)
      * [WITHOUT Angular testing utilities](src/app/master.service.spec.ts)
      * [WITH Angular testing utilities](src/app/master.service.testbed.spec.ts)

## How has it been created?

* | root path,
  * `ng new services --directory=adev/src/content/examples/testing/services`

## Running unit tests

* ways
  * -- via -- [Karma](https://karma-runner.github.io) test runner
    * Problems:
      * Solution: TODO:
  * -- via -- IDE
    * Problems:
      * Attempt1: "node_modules/karma-jasmine/bin/karma"
      * Solution: TODO:
  * `ng test`
    * Problems:
      * Problem1: | run 2@ time, "An unhandled exception occurred: error TS500: Error: ENOENT: no such file or directory, stat"
        * Attempt1: `npm install`
        * Attempt2: `rm -rf node_modules`, `rm -rf node_modules`, `npm install` & `ng test`
        * Attempt3: `npm cache clean --force` & `ng cache clean`
        * Attempt4: `rm -rf .angular/cache/`
        * Attempt5: `npx ng cache clean`
        * Attempt6: `ng generate config karma` -> create "karma.conf.json"
        * Attempt7: `./node_modules/karma/bin/karma start`
          * == start Karma
        * Attempt8: set Karma's config file `files.nocache`
        * Solution: 💡`rm -rf '${local_app_data}\Chrome\Cache'`💡

## how to debug unit tests?
* steps
  * `ng test`
  * [follow these steps](/adev/src/content/guide/testing/debugging.md)

## Running end-to-end tests

* `ng e2e`
