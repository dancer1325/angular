# Creating libraries

* goal
  * how to create and publish NEW libraries / extend Angular functionality

* use cases (to create a library)
  * solve the SAME problem | >1 application
    * _Example:_ button / 
      * sends users -- to -- your company website & 
      * MUST be included | ALL your company's applications

## Getting started

* generate a NEW library skeleton | NEW workspace -- via -- Angular CLI
  ```
  ng new my-workspace --no-create-application
  cd my-workspace
  ng generate library my-lib-name
  ```
  * `ng generate`
    * creates the `projects/my-lib/` | your workspace
      * == 1 component + 1 service | NgModule
      * -> `angular.json` -- is updated with a -- project of type `library`
    * see [Project File Structure](../../reference/configs/file-structure)
  * ⚠️`my-lib-name` chooses it CAREFULLY ⚠️
    * recommendations
      * avoid using `ng-`
        * Reason: 🧠reserved keyword -- from the -- Angular framework 🧠
      * use `ngx-`
        * Reason: 🧠== library -- is suitable for use with -- Angular 🧠
    * Reason: 🧠used AFTERWARD, publish | public package registry 🧠
  * 👀if you are going to use the SAME workspace | MULTIPLE projects -> use the monorepo model 👀
    * see [here](../../reference/configs/file-structure#multiple-projects)

* typical commands
  ```
  # build
  ng build my-lib --configuration development
  
  # test
  ng test my-lib
  
  # lint
  ng lint my-lib
  ```

* project's configured builder -- `@angular-devkit/build-angular:browser` --
  * != application projects' default builder -- `@angular-devkit/build-angular:application` --
  * -> library -- is ALWAYS built with -- [AOT compiler](../cli/aot-compiler)

* 👀define a library's public API 👀 -- `public-api.ts` -- 
  * Reason: 🧠make library code reusable 🧠 
  * == what is available -- to -- consumers of your library
    * MINIMUM public functionality / could be accessed
      * NgModules,
      * service providers
      * general utility functions
  * ==  ALL exported | `public-api.ts`
  * 👀if you want to expose services and components -> use an NgModule 👀

## application's parts / -- want to be refactored to a -- library

* good practices
  * ❌NOT application-specific code-dependant ❌
  * declarations (== `NgModule`'s `declarations` -- _Example:_ components, pipes --) -- should be designed as -- stateless
    * == NOT
      * -- rely on -- external variables
      * -- alter -- external variables
    * Reason: 🧠if you rely on state -> you need to decide EACH case whether it is application state OR state / library would manage 🧠
  * observables / components subscribe to internally -- should be -- cleaned up and disposed | lifecycle of those components
  * components -- should expose -- their
    * interactions -- through -- inputs
    * outputs / communicate events -- to -- OTHER components
  * check ALL internal dependencies
    * | custom classes or interfaces / used | components or service,
      * check whether they -- depend on -- ADDITIONAL classes or interfaces 
        * -> NEED to migrate them
    * if your library code -- depends on a -- service -> that service -- needs to be -- migrated
    * If your library code OR its templates -- depend on -- OTHER libraries (_Example:_ Angular Material) -> configure your library -- with -- those dependencies
  * way to provide services | client applications
    * services -- should declare -- their OWN providers
      * != declaring providers | NgModule or a component
      * -> 👀service is *tree-shakable* 👀
        * -> ⚠️if service NEVER gets injected | application / imports the library -> compiler leave the service -- out of the -- bundle ⚠️ 
        * see [Tree-shakable providers](../../guide/di/lightweight-injection-tokens)
    * 👀if you register global service providers OR share providers | MULTIPLE NgModules -> use [`RouterModule.forRoot()` and `RouterModule.forChild()` design patterns](../../guide/ngmodules/overview.md) 👀
    * if your library provides OPTIONAL services / might NOT be used by ALL client applications -- via [lightweight token design pattern](../../guide/di/lightweight-injection-tokens), support -- proper tree-shaking 

## Integrating -- via code-generation schematics, with the -- CLI 

* | library's npm package,
  * 👀you can include schematics 👀
    * uses
      * provide information to Angular CLI -- to -- generate a component 
    * _Example:_ [Angular Material's navigation schematic](https://material.angular.io/guide/schematics#navigation-schematic)
      * configures the CDK's [BreakpointObserver](https://material.angular.io/cdk/layout/overview#breakpointobserver)
      * -- used with --
        * Material's [MatSideNav](https://material.angular.io/components/sidenav/overview) components
        * Material's [MatToolbar](https://material.angular.io/components/toolbar/overview) components
    * recommended schematics -- to -- include
      * installation schematic
        * Reason: 🧠 `ng add` -- can add -- your library | project 🧠
      * generation schematics
        * Reason: 🧠 `ng generate` -- can scaffold -- your defined artifacts (components, services, tests) | project
      * update schematic
        * Reason: 🧠`ng update` -- can 
          * update -- your library's dependencies
          * provide -- migrations for new releases' breaking changes 🧠 
    * -- depend on -- your tasks
      * MORE complex the customization -> MORE useful the schematic approach

* see
  * [Schematics Overview](../cli/schematics)
  * [Schematics for Libraries](../cli/schematics-for-libraries)

## Publishing your library

* 👀if you want to build & publish your library -- as an -- npm package -> use Angular CLI + npm package manager 👀
  * Angular CLI, from your compiled code, creates -- via the tool [ng-packagr](https://github.com/ng-packagr/ng-packagr/blob/master/README.md), -- packages / can be published | npm
    * see [here](#publishing-libraries)
  * libraries for distribution -- should be built, via -- `production` configuration
    * Reason: 🧠generated output -- uses the -- appropriate optimizations & correct package format for npm 🧠

* steps
  ```
  ng build my-lib
  cd dist/my-lib
  npm publish  
  ```

## Library's assets

* | library's npm package,
  * 👀you can include additional assets (_Example:_ theming files, Sass mixins, or documentation \(like a changelog\)) 👀
    * see
      * [copy assets | your library -- as part of the -- build](https://github.com/ng-packagr/ng-packagr/blob/master/docs/copy-assets.md)
      * [embed assets | component styles](https://github.com/ng-packagr/ng-packagr/blob/master/docs/embed-assets-css.md)
    * ⚠️if you include ADDITIONAL assets (_Example:_ Sass mixins or pre-compiled CSS) -> add them MANUALLY | [`package.json`'s "exports"](angular-package-format.md) ⚠️
      * 👀`ng-packagr` -- will merge -- handwritten `"exports"` + auto-generated ones 👀
      * _Example:_ [@angular/material](https://unpkg.com/browse/@angular/material/package.json) distributable
        ```.json, tittle=package.json
            "exports": {
                ".": {
                "sass": "./_index.scss",
                },
                "./theming": {
                "sass": "./_theming.scss"
                },
                "./prebuilt-themes/indigo-pink.css": {
                "style": "./prebuilt-themes/indigo-pink.css"
                }
            }
        ```

## Peer dependencies

* TODO:
Angular libraries should list any `@angular/*` dependencies the library depends on as peer dependencies.
This ensures that when modules ask for Angular, they all get the exact same module.
If a library lists `@angular/core` in `dependencies` instead of `peerDependencies`, it might get a different Angular module instead, which would cause your application to break.

## Using your own library in applications

You don't have to publish your library to the npm package manager to use it in the same workspace, but you do have to build it first.

To use your own library in an application:

* Build the library.
    You cannot use a library before it is built.

    <docs-code language="shell">

    ng build my-lib

    </docs-code>

* In your applications, import from the library by name:

    <docs-code language="typescript">

    import { myExport } from 'my-lib';

    </docs-code>

### Building and rebuilding your library

The build step is important if you haven't published your library as an npm package and then installed the package back into your application from npm.
For instance, if you clone your git repository and run `npm install`, your editor shows the `my-lib` imports as missing if you haven't yet built your library.

HELPFUL: When you import something from a library in an Angular application, Angular looks for a mapping between the library name and a location on disk.
When you install a library package, the mapping is in the `node_modules` folder.
When you build your own library, it has to find the mapping in your `tsconfig` paths.

Generating a library with the Angular CLI automatically adds its path to the `tsconfig` file.
The Angular CLI uses the `tsconfig` paths to tell the build system where to find the library.

For more information, see [Path mapping overview](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping).

If you find that changes to your library are not reflected in your application, your application is probably using an old build of the library.

You can rebuild your library whenever you make changes to it, but this extra step takes time.
*Incremental builds* functionality improves the library-development experience.
Every time a file is changed a partial build is performed that emits the amended files.

Incremental builds can be run as a background process in your development environment.
To take advantage of this feature add the `--watch` flag to the build command:

<docs-code language="shell">

ng build my-lib --watch

</docs-code>

IMPORTANT: The CLI `build` command uses a different builder and invokes a different build tool for libraries than it does for applications.

* The build system for applications, `@angular-devkit/build-angular`, is based on `webpack`, and is included in all new Angular CLI projects
* The build system for libraries is based on `ng-packagr`.
    It is only added to your dependencies when you add a library using `ng generate library my-lib`.

The two build systems support different things, and even where they support the same things, they do those things differently.
This means that the TypeScript source can result in different JavaScript code in a built library than it would in a built application.

For this reason, an application that depends on a library should only use TypeScript path mappings that point to the *built library*.
TypeScript path mappings should *not* point to the library source `.ts` files.

## Publishing libraries

* goal
  * distribution formats / -- supported by -- `ng-packagr`
  * how to choose the right format | your library


| Distribution formats            | Details                                                                                                                                                                                                                                                                                             |
|:--------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Partial-Ivy \(👀recommended👀\) | == portable code / can be consumed by Ivy applications -- built with -- Angular v12+ <br/> use cases: publish to npm Reason: 🧠it's STABLE BETWEEN patch versions of Angular 🧠                                                                                                                     |
| Full-Ivy                        | == private Angular Ivy instructions / ⚠️ NOT guaranteed to work ACROSS DIFFERENT versions of Angular ⚠️ <br/> requirements: Angular version / build library === Angular version / build application <br/> use cases: environments / from source -- is built directly -- ALL library and application |

## Ensuring library version compatibility

The Angular version used to build an application should always be the same or greater than the Angular versions used to build any of its dependent libraries.
For example, if you had a library using Angular version 13, the application that depends on that library should use Angular version 13 or later.
Angular does not support using an earlier version for the application.

If you intend to publish your library to npm, compile with partial-Ivy code by setting `"compilationMode": "partial"` in `tsconfig.prod.json`.
This partial format is stable between different versions of Angular, so is safe to publish to npm.
Code with this format is processed during the application build using the same version of the Angular compiler, ensuring that the application and all of its libraries use a single version of Angular.

Avoid compiling libraries with full-Ivy code if you are publishing to npm because the generated Ivy instructions are not part of Angular's public API, and so might change between patch versions.

If you've never published a package in npm before, you must create a user account.
Read more in [Publishing npm Packages](https://docs.npmjs.com/getting-started/publishing-npm-packages).

## Consuming partial-Ivy code outside the Angular CLI

An application installs many Angular libraries from npm into its `node_modules` directory.
However, the code in these libraries cannot be bundled directly along with the built application as it is not fully compiled.
To finish compilation, use the Angular linker.

For applications that don't use the Angular CLI, the linker is available as a [Babel](https://babeljs.io) plugin.
The plugin is to be imported from `@angular/compiler-cli/linker/babel`.

The Angular linker Babel plugin supports build caching, meaning that libraries only need to be processed by the linker a single time, regardless of other npm operations.

Example of integrating the plugin into a custom [webpack](https://webpack.js.org) build by registering the linker as a [Babel](https://babeljs.io) plugin using [babel-loader](https://webpack.js.org/loaders/babel-loader/#options).

<docs-code header="webpack.config.mjs" path="adev/src/content/examples/angular-linker-plugin/webpack.config.mjs" visibleRegion="webpack-config"/>

HELPFUL: The Angular CLI integrates the linker plugin automatically, so if consumers of your library are using the CLI, they can install Ivy-native libraries from npm without any additional configuration.
