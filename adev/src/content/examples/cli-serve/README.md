# Final

* This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.0-next.0.

* 👀`architect.build.builder` == `@angular-devkit/build-angular:browser` == webPack 👀

## How has it been created?

* | root path,
  * `ng new final --directory=adev/src/content/examples/cli-serve`
* "app.component.html"
  * remove ALL unneeded
* steps to proxy
  * | "src/", 
    * create "proxy.conf.json"
  * | "angular.json"'s `serve.options`, 
    * specify `proxyConfig`
* create express server
  * `npm install express`
  * create "backend-server.js"

## How to run local development server?

* `ng serve`
* | browser,
  * open `http://localhost:4200/`

## ⭐️How to test proxy backend?⭐️

* [run locally development server](#how-to-run-local-development-server)
* `npm run start:express`
* 💡click | button & check you get response💡

## How to build?

* `ng build`
  * compile your project
  * | `dist/`, store build artifacts

## Running unit tests

* -- via -- [Karma](https://karma-runner.github.io) test runner
* `ng test`

## Running end-to-end tests

* `ng e2e`
