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

* see [examples/'s README.md](src/content/examples)
  * _Example:_ [here](src/content/examples/ngModules/README.md)

## How to use ServiceWorker locally?

* ❌`yarn start` does NOT set up the ServiceWorker ❌ 
* steps
  * `yarn build`
  * `yarn http-server ../dist/bin/aio/build -p 4200`
    * serve the files 

## Contributing

* see [contributing guidelines](/CONTRIBUTING.md)
