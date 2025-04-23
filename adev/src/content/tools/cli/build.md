# Building Angular apps or libraries

* `ng build` command
  * specified | `angular.json`'s `build` target
* your TypeScript code -- is compiled to -- JavaScript / 
  * optimize,
  * bundle,
  * minify
 
* built-in builders

| Builder                                         | Purpose                                                                                                                                                                                                                                                                                      |
| ----------------------------------------------- |----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `@angular-devkit/build-angular:browser`         | client-side application -- , via [webpack](https://webpack.js.org/), is  -- bundled <br/> uses \| browser                                                                                                                                                                                    |
| `@angular-devkit/build-angular:browser-esbuild` | client-side application -- , via [esbuild](https://esbuild.github.io/), is -- bundled <br/> uses \| browser <br/> see [`browser-esbuild` documentation](tools/cli/build-system-migration#manual-migration-to-the-compatibility-builder)                                                      |
| `@angular-devkit/build-angular:application`     | builds -- , via [esbuild](https://esbuild.github.io/),an -- application / has <br/> &nbsp;&nbsp; client-side bundle <br/> &nbsp;&nbsp; Node server <br/> &nbsp;&nbsp; build-time prerendered routes <br/> if you run `ng new` -> by default, use `@angular-devkit/build-angular:application` |
| `@angular-devkit/build-angular:ng-packagr`      | builds an Angular library / added to [Angular Package Format](tools/libraries/angular-package-format) <br/> if you use `ng generate library` -> by default, use `@angular-devkit/build-angular:ng-packagr`                                                                                                                                                                                 |

## build's OUTPUT directory

* by default, `dist/${PROJECT_NAME}` 

## Configuring size budgets

* | `angular.json`, 
  * `budgets` / EACH [configured environment](tools/cli/environments)
    * == 💡`configurations.environmentName.budgets` 💡
    * set size thresholds
      * ⚠️if the application's part reaches or exceeds it -> warns or reports an error ⚠️ 

  
  | Property       | Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
  |:---------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
  | type           | ALLOWED <table> <thead> <tr> <th> Value </th> <th> Details </th> </tr> </thead> <tbody> <tr> <td> <code>bundle</code> </td> <td> The size of a specific bundle. </td> </tr> <tr> <td> <code>initial</code> </td> <td> JavaScript's size -- for -- bootstrapping the application <br/> by default, <br/> &nbsp;&nbsp; \| 500kb, warning <br/> &nbsp;&nbsp; \| 1mb erroring </td> </tr> <tr> <td> <code>allScript</code> </td> <td> The size of all scripts. </td> </tr> <tr> <td> <code>all</code> </td> <td> The size of the entire application. </td> </tr> <tr> <td> <code>anyComponentStyle</code> </td> <td> This size of any one component stylesheet. Defaults to warning at 2kb and erroring at 4kb. </td> </tr> <tr> <td> <code>anyScript</code> </td> <td> The size of any one script. </td> </tr> <tr> <td> <code>any</code> </td> <td> The size of any file. </td> </tr> </tbody> </table> |
  | name           | The name of the bundle (for `type=bundle`).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
  | baseline       | The baseline size for comparison.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
  | maximumWarning | == maximum threshold -- for -- warning / -- relative to the -- baseline                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
  | maximumError   | == maximum threshold -- for -- error / -- relative to the -- baseline                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
  | minimumWarning | The minimum threshold for warning relative to the baseline.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
  | minimumError   | The minimum threshold for error relative to the baseline.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
  | warning        | The threshold for warning relative to the baseline (min & max).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
  | error          | The threshold for error relative to the baseline (min & max).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
 
  | Size value's formats | Details                                                                     |
  |:---------------------| :-------------------------------------------------------------------------- |
  | `123` or `123b`      | Size in bytes.                                                              |
  | `123kb`              | Size in kilobytes.                                                          |
  | `123mb`              | Size in megabytes.                                                          |
  | `12%`                | Percentage of size relative to baseline. \(Not valid for baseline values.\) |

  ```
  {
    …
    "configurations": {
      "production": {
        …
        "budgets": [
          {
            "type": "initial",
            "maximumWarning": "250kb",
            "maximumError": "500kb"
          },
        ]
      }
    }
  }
  ```


## Configuring CommonJS dependencies

* ALLOWED module formats -- by -- Angular CLI 
  * [ECMAScript modules](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/import)
    * ⭐️recommended one ⭐️
      * Reason: 🧠
        * FULLY specified web standard
        * strong static analysis support🧠
  * [CommonJS](https://nodejs.org/api/modules.html)
    * dependencies -- are AUTOMATICALLY -- bundled
    * ⚠️NO optimized == larger bundle sizes ⚠️
      * [here](https://web.dev/commonjs-larger-bundles)
    * ⚠️if you use it | browser application -> outputs a warning ⚠️
      * if you want to disable it -> add `build.options.allowedCommonJsDependencies=commonJSModuleNameUsed`
        ```
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "allowedCommonJsDependencies": [
                "lodash"
            ]
            …
          }
          …
        }
        ```

## Configuring browser compatibility

* [Browserslist](https://github.com/browserslist/browserslist)
  * uses
    * by Angular CLI
  * allows
    * 👀ensuring compatibility -- with -- DIFFERENT browser versions 👀 
      * Reason: 🧠CERTAIN JS & CSS features -- will be AUTOMATICALLY transformed by -- Angular / built application does NOT use a feature / NOT been implemented by a supported browser🧠
* TODO: However, the Angular CLI will not automatically add polyfills to supplement missing Web APIs.
* Use the `polyfills` option in `angular.json` to add polyfills.

Internally, the Angular CLI uses the below default `browserslist` configuration which matches the [browsers that are supported](reference/versions#browser-support) by Angular.

<docs-code language="text">

last 2 Chrome versions
last 1 Firefox version
last 2 Edge major versions
last 2 Safari major versions
last 2 iOS major versions
last 2 Android major versions
Firefox ESR

</docs-code>

To override the internal configuration, run [`ng generate config browserslist`](cli/generate/config), which generates a `.browserslistrc` configuration file in the project directory.

See the [browserslist repository](https://github.com/browserslist/browserslist) for more examples of how to target specific browsers and versions.
Avoid expanding this list to more browsers. Even if your application code more broadly compatible, Angular itself might not be.
You should only ever _reduce_ the set of browsers or versions in this list.

HELPFUL: Use [browsersl.ist](https://browsersl.ist) to display compatible browsers for a `browserslist` query.
