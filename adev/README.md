# [Angular.dev](https://www.angular.dev)

* site / 
  * built with Angular
  * content 
    * 👀| `src/content` 👀
    * 💡['s navigation](src/app/sub-navigation-data.ts) 💡

## Fundamentals

* [Getting Started](src/content/tutorials/learn-angular)
* [Architecture](src/content/introduction/essentials)

## Advanced

* [Angular Elements](src/content/guide/elements.md)
* [Server Side Rendering](src/content/guide/ssr.md)
* [Schematics](src/content/tools/cli/schematics.md)
* [Lazy Loading](src/content/guide/routing/common-router-tasks.md)
* [Animations](src/content/guide/animations)
* [Upgrade guide](https://angular.dev/update-guide/)

## How to run locally angular dev site?

* 
  ```bash
  # Install dependencies
  yarn
  
  # Build and run local dev server
  # Note: Initial build will take some time
  yarn docs
  ```
  * | browser, opens https://localhost:4200/
  * 👀since there is NO "package.json" | this level -> it's used [package.json](/package.json) 👀

## How to generate a specific example project locally?

* `yarn install`
  * Problems:
    * Problem1: No matching the requirements of node and yarn versions used
      * Solution: `nvm use v16.20.1`
* `yarn build`
* `yarn example-playground ProjectName --local`
  * Problems: NOT generated
    * Solution: TODO:
* `cd ...aio/content/example-playground/ProjectName`
* `ng serve`

## Built-in scripts

* TODO: Check & execute
* `yarn build`
  * create a development build of the application.
* `yarn build-prod`
  * create a production build of the application.
* `yarn build-local`
  * same as `build`, but uses locally built Angular packages from source code rather than from npm.
* `yarn start`
  * run a development web server that watches, rebuilds, and reloads the page when there are changes to the source code or docs.
* `yarn start-local`
  * same as `start`, but uses local Angular packages.
* `yarn test`
  * run all the unit tests for the doc-viewer once.
* `yarn test-local`
  * similar to `test`, but tests against locally built Angular packages.
* `yarn test-and-watch`
  * watch all the source files for the doc-viewer, and run all the unit tests when any change.
* `yarn e2e`
  * run all the e2e tests for the doc-viewer.
* `yarn e2e-local`
  * similar to `e2e`, but tests against locally built Angular packages.
* `yarn lint`
  * check that the doc-viewer code follows our style rules.
* `yarn docs-watch`
  * similar to `start`, but only watches for docs changes and uses a faster, low-fidelity build ideal for quick editing.
* `yarn docs-test`
  * run the unit tests for the doc generation code.
* `yarn docs-lint`
  * check that the doc gen code follows our style rules.
* `yarn create-example`
  * create a new example directory containing initial source files.
* `yarn example-playground <exampleName>`
  * set up a playground to manually test an example combined with its boilerplate files
    * `--local` - link locally build Angular packages as deps
    * `--watch` - update the playground when sources change
* `yarn example-e2e`
  * run all e2e tests for examples
    * `--local`
      * run e2e tests against locally built Angular packages
    * `--filter=foo`
      * limit e2e tests to those containing the word "foo"
    * `--exclude=bar`
      * exclude e2e tests containing the word "bar".

## How to use ServiceWorker locally?

* ❌`yarn start` does NOT set up the ServiceWorker ❌ 
* steps
  * `yarn build`
  * `yarn http-server ../dist/bin/aio/build -p 4200`
    * serve the files 

## Contributing

* see [contributing guidelines](/CONTRIBUTING.md)
