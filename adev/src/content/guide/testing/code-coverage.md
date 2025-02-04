# Code coverage == how much code you're testing

* goal
  * code coverage

* | root of your project
  * `ng test --no-watch --code-coverage`
    * 👀generate a coverage report | `/coverage/index.html`👀

* if you want to create code-coverage reports / EVERY time you test -> set | `angular.json`
  ```
  "test": {
  "options": {
    "codeCoverage": true
    }
  }
  ```
  * run again `ng test --no-watch`

## Code coverage enforcement (%)

* | `karma.conf.js`,
  * see [Karma configuration](overview.md#configuration)
  * add `coverageReporter:` key's `check` property 
    ```
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/<project-name>'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ],
      check: {
        global: {
          statements: 80,
          branches: 80,
          functions: 80,
          lines: 80
        }
      }
    }
    ```

* see [karma coverage documentation](https://github.com/karma-runner/karma-coverage/blob/master/docs/configuration.md)
