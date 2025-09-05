# Testing

## Set up testing

* Angular CLI
  * downloads & installs ALL needed -- via -- [Jasmine testing framework](https://jasmine.github.io)

* [`ng test`](../../cli/help/test.json)
  * builds the application | 👀watch mode 👀
  * 👀launches the [Karma test runner](https://karma-runner.github.io)👀 /
    * output -- is displayed, via [Karma Jasmine HTML Reporter](https://github.com/dfederm/karma-jasmine-html-reporter) -- | browser
      * if you click | test row -> you can re-run

* _Example:_ [here](../../examples/testing/overview)

## Configuration

* Angular CLI
  * 💡configures AUTOMATICALLY "angular.json"'s `options` with Karma + Karma-jasmine💡
    * if you want to customize Karma -> `ng generate config karma`

### OTHER test frameworks

* ALSO allowed
  * requirements
    * MANUAL configuration

### Test file name & location

* requirements
  * ⚠️file extension -- MUST be -- `.spec.ts` ⚠️
    * Reason: 🧠 -- being identified by the -- tooling 🧠
  * test file name's base == file name's base
    * _Example:_ `app.component` | `app.component.ts` & `app.component.spec.ts`
  * 👀test file location 👀
    * -- depends on -- type of tests
      * [unit test](#where-to-place-unit-tests)
      * [integration test](#where-to-place-integration-tests)

#### Where to place unit tests?

* 's folder == application source code's folder 👀
  * _Example:_ `app.component.ts`'s folder == `app.component.spec.ts`'s folder
  * Reason: 🧠
    * painless to find
    * easy to comprehend how it works 🧠
  * cons 
    * if you
      * move the source file -> you need to move the test file
      * rename the source file -> you need to rename the test file 

#### Where to place integration tests?

* 's goal
  * test the interactions of MULTIPLE parts | DIFFERENT folders & modules
* recommendations
  * ⚠️create a dedicated `tests/`⚠️
  * if you use test helpers / place | `tests/` -> test of test helpers MUST be place | `tests/`

## Testing | CI

* recommendations
  * `ng test --no-watch --no-progress --browsers=ChromeHeadless`
    * `--no-watch`
      * == NO watch == execute & end up tests
    * `--no-progress`
      * == Angular CLI option
    * `--browsers=ChromeHeadless`
      * == Karma option
        * == run tests WITHOUT GUI
