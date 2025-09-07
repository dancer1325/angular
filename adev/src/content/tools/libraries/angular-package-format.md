# Angular package format (APF)

* APF
  * == Angular specific specification
    * -- about --
      * npm packages
        * structure
        * format
    * enables
      * package can work SEAMLESSLY
        * == compatible with the Angular's tooling
  * uses
    * ALL first-party Angular packages \(`@angular/core`, `@angular/material`, etc.\)
    * MOST third-party Angular libraries
  * 's versioning
    * == Angular's versioning 
    * [PRIOR to v13](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/preview) 
  * support
    * ALL commonly used development tools & workflows 
    * optimization -- via --
      * smaller application payload size OR
      * faster development iteration cycle (== build time) 
  * ways to produce packages | APF
    * Angular CLI
    * [ng-packagr](https://github.com/ng-packagr/ng-packagr)
      * used -- by -- Angular CLI 

* recommendations
  * third-party library developers follow it

## Reasons to use

* | JavaScript landscape,
  * developers consume packages -- via -- MANY different 
    * ways &
    * toolchains (webpack, Rollup, esbuild, etc.) / may process specific ES language version

## File layout

* _Example:_ `@angular/core` package's file layout simplified

  ```markdown
  node_modules/@angular/core
  ├── README.md
  ├── package.json
  ├── index.d.ts
  ├── fesm2022
  │   ├── core.mjs
  │   ├── core.mjs.map
  │   ├── testing.mjs
  │   └── testing.mjs.map
  └── testing
      └── index.d.ts
  ```

| Files                                                                                                                                                     | Purpose                                                                                                                                                             |
|:----------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `README.md`                                                                                                                                               | == Package's README <br/> uses <br/> &nbsp;&nbsp; by npmjs web UI                                                                                                   |
| `package.json`                                                                                                                                            | == MAIN `package.json` <br/> `"exports"` mapping <br/> &nbsp;&nbsp; uses <br/> &nbsp;&nbsp; &nbsp;&nbsp; 👀by runtimes & tools -- to perform -- module resolution👀 |
| `index.d.ts`                                                                                                                                              | MAIN entrypoint's bundled `.d.ts`                                                                                                                                   |
| `fesm2022/` <br /> &nbsp;&nbsp;─ `core.mjs` <br /> &nbsp;&nbsp;─ `core.mjs.map` <br /> &nbsp;&nbsp;─ `testing.mjs` <br /> &nbsp;&nbsp;─ `testing.mjs.map` | == (code + source maps) \| flattened ES2022 (FESM)  format                                                                                                          |
| `testing/`                                                                                                                                                | == "testing" entrypoint                                                                                                                                             |
| `testing/index.d.ts`                                                                                                                                      | `@angular/core/testing` entrypoint's bundled `.d.ts`                                                                                                        |

### "package.json"

#### ESM declaration

```json, package.json
{
  "type": "module"
}
```

* != CommonJS modules

#### `"exports"`

* ALL entrypoints' AVAILABLE source code formats 
  * == .js
    * if library want to expose static files (_Example:_ Sass mixins OR pre-compiled CSS) -> use direct routes
      * [how to manage assets | library](tools/libraries/creating-libraries#managing-assets-in-a-library) 

```json, package.json
{
  "exports": {
    "./schematics/*": {
      "default": "./schematics/*.js"
    },
    "./package.json": {
      "default": "./package.json"
    },
    ".": {
      "types": "./core.d.ts",
      "default": "./fesm2022/core.mjs"
    },
    "./testing": {
      "types": "./testing/testing.d.ts",
      "default": "./fesm2022/testing.mjs"
    }
  }
}
```

* `"."` key
  * `@angular/core` primary entrypoint's AVAILABLE code formats 
* `"./testing"` key
  * `@angular/core/testing` secondary entrypoint's AVAILABLE code formats

| Formats                   | Details                                                                         |
|:---                       |:--------------------------------------------------------------------------------|
| Typings \(`.d.ts` files\) | `.d.ts` files <br/> uses <br/> &nbsp;&nbsp; by TypeScript / -- depend on a -- given package |
| `default`               | ES2022 code flattened into a single source.                                     

* tools / aware of these keys
  * may choose BEST `"exports"`

#### Legacy resolution keys

* ⚠️deprecated⚠️
* uses
  * resolvers / ❌NOT support `"exports"`❌
    * can load a specific code format

```json, package.json
{
  "module": "./fesm2022/core.mjs",
  "typings": "./core.d.ts",
}
```

#### Side effects

* [side effects](#sideeffects-flag)

* MOST commonly
  ```json, package.json
  {
    "sideEffects": false
  }
  ```

### Entrypoints & code splitting

* packages | Angular Package Format
  * contain
    * 1 primary entrypoint
    * \>= 0 secondary entrypoints

* Entrypoints' functions
  1. TODO: They define the module specifiers from which users import code \(for example, `@angular/core` and `@angular/core/testing`\)
     * Users typically perceive these entrypoints as distinct groups of symbols, with different purposes or capability
     * Specific entrypoints might only be used for special purposes, such as testing.
     * Such APIs can be separated out from the primary entrypoint to reduce the chance of them being used accidentally or incorrectly.
  2. They define the granularity at which code can be lazily loaded
     * Many modern build tools are only capable of "code splitting" \(aka lazy loading\) at the ES Module level
     * The Angular Package Format uses primarily a single "flat" ES Module per entry point
       * This means that most build tooling is not able to split code with a single entry point into multiple output chunks.

The general rule for APF packages is to use entrypoints for the smallest sets of logically connected code possible.
For example, the Angular Material package publishes each logical component or set of components as a separate entrypoint - one for Button, one for Tabs, etc.
This allows each Material component to be lazily loaded separately, if desired.

Not all libraries require such granularity.
Most libraries with a single logical purpose should be published as a single entrypoint.
`@angular/core` for example uses a single entrypoint for the runtime, because the Angular runtime is generally used as a single entity.

### Resolution of secondary entry points

* -- via -- "package.json"'s `"exports"` 

### README.md

* == README file / used to display description of a package | npm & GitHub

* _Example:_ "@angular/core" package

  ```.markdown, README.md
  Angular
  &equals;&equals;&equals;&equals;&equals;&equals;&equals;
  
  The sources for this package are in the main [Angular](https://github.com/angular/angular) repo.Please file issues and pull requests against that repo.
  
  License: MIT
  ```

## Partial compilation

Libraries in the Angular Package Format must be published in "partial compilation" mode.
This is a compilation mode for `ngc` which produces compiled Angular code that is not tied to a specific Angular runtime version, 
in contrast to the full compilation used for applications, where the Angular compiler and runtime versions must match exactly.

To partially compile Angular code, use the `compilationMode` flag in the `angularCompilerOptions` property of your ``

```json, tsconfig.json
{
  …
  "angularCompilerOptions": {
    "compilationMode": "partial",
  }
}
```

Partially compiled library code is then converted to fully compiled code during the application build process by the Angular CLI.

If your build pipeline does not use the Angular CLI then refer to the [Consuming partial ivy code outside the Angular CLI](tools/libraries/creating-libraries#consuming-partial-ivy-code-outside-the-angular-cli) guide.

## Optimizations

### Flattening of ES modules

The Angular Package Format specifies that code be published in "flattened" ES module format.
This significantly reduces the build time of Angular applications as well as download and parse time of the final application bundle.
Please check out the excellent post ["The cost of small modules"](https://nolanlawson.com/2016/08/15/the-cost-of-small-modules) by Nolan Lawson.

The Angular compiler can generate index ES module files. Tools like Rollup can use these files to generate flattened modules in a *Flattened ES Module* (FESM) file format.

FESM is a file format created by flattening all ES Modules accessible from an entrypoint into a single ES Module.
It's formed by following all imports from a package and copying that code into a single file while preserving all public ES exports and removing all private imports.

The abbreviated name, FESM, pronounced *phe-som*, can be followed by a number such as FESM2020.
The number refers to the language level of the JavaScript inside the module.
Accordingly a FESM2022 file would be ESM+ES2022 and include import/export statements and ES2022 source code.

To generate a flattened ES Module index file, use the following configuration options in your tsconfig.json file:

<docs-code language="javascript">

{
  "compilerOptions": {
    …
    "module": "esnext",
    "target": "es2022",
    …
  },
  "angularCompilerOptions": {
    …
    "flatModuleOutFile": "my-ui-lib.js",
    "flatModuleId": "my-ui-lib"
  }
}

</docs-code>

Once the index file \(for example, `my-ui-lib.js`\) is generated by ngc, bundlers and optimizers like Rollup can be used to produce the flattened ESM file.

### "sideEffects" flag

By default, EcmaScript Modules are side-effectful: importing from a module ensures that any code at the top level of that module should run.
This is often undesirable, as most side-effectful code in typical modules is not truly side-effectful, but instead only affects specific symbols.
If those symbols are not imported and used, it's often desirable to remove them in an optimization process known as tree-shaking, and the side-effectful code can prevent this.

Build tools such as webpack support a flag which allows packages to declare that they do not depend on side-effectful code at the top level of their modules, giving the tools more freedom to tree-shake code from the package.
The end result of these optimizations should be smaller bundle size and better code distribution in bundle chunks after code-splitting.
This optimization can break your code if it contains non-local side-effects - this is however not common in Angular applications and it's usually a sign of bad design.
The recommendation is for all packages to claim the side-effect free status by setting the `sideEffects` property to `false`, and that developers follow the [Angular Style Guide](/style-guide) which naturally results in code without non-local side-effects.

More info: [webpack docs on side effects](https://github.com/webpack/webpack/tree/master/examples/side-effects)

### ES2022 language level

ES2022 Language level is now the default language level that is consumed by Angular CLI and other tooling.
The Angular CLI down-levels the bundle to a language level that is supported by all targeted browsers at application build time.

### d.ts bundling / type definition flattening

As of APF v8 it is now preferred to run [API Extractor](https://api-extractor.com), to bundle TypeScript definitions so that the entire API appears in a single file.

In prior APF versions each entry point would have a `src` directory next to the .d.ts entry point and this directory contained individual d.ts files matching the structure of the original source code.
While this distribution format is still allowed and supported, it is highly discouraged because it confuses tools like IDEs that then offer incorrect autocompletion, and allows users to depend on deep-import paths which are typically not considered to be public API of a library or a package.

### Tslib

As of APF v10, it is recommended to add tslib as a direct dependency of your primary entry-point.
This is because the tslib version is tied to the TypeScript version used to compile your library.

## Examples

<docs-pill-row>
  <docs-pill href="https://unpkg.com/browse/@angular/core@17.0.0/" title="@angular/core package"/>
  <docs-pill href="https://unpkg.com/browse/@angular/material@17.0.0/" title="@angular/material package"/>
</docs-pill-row>

## Definition of terms

The following terms are used throughout this document intentionally.
In this section are the definitions of all of them to provide additional clarity.

### Package

The smallest set of files that are published to NPM and installed together, for example `@angular/core`.
This package includes a manifest called package.json, compiled source code, typescript definition files, source maps, metadata, etc.
The package is installed with `npm install @angular/core`.

### Symbol

A class, function, constant, or variable contained in a module and optionally made visible to the external world via a module export.

### Module

Short for ECMAScript Modules.
A file containing statements that import and export symbols.
This is identical to the definition of modules in the ECMAScript spec.

### ESM

Short for ECMAScript Modules \(see above\).

### FESM

Short for Flattened ES Modules and consists of a file format created by flattening all ES Modules accessible from an entry point into a single ES Module.

### Module ID

The identifier of a module used in the import statements \(for example, `@angular/core`\).
The ID often maps directly to a path on the filesystem, but this is not always the case due to various module resolution strategies.

### Module specifier

A module identifier \(see above\).

### Module resolution strategy

Algorithm used to convert Module IDs to paths on the filesystem.
Node.js has one that is well specified and widely used, TypeScript supports several module resolution strategies, [Closure Compiler](https://developers.google.com/closure/compiler) has yet another strategy.

### Module format

Specification of the module syntax that covers at minimum the syntax for the importing and exporting from a file.
Common module formats are CommonJS \(CJS, typically used for Node.js applications\) or ECMAScript Modules \(ESM\).
The module format indicates only the packaging of the individual modules, but not the JavaScript language features used to make up the module content.
Because of this, the Angular team often uses the language level specifier as a suffix to the module format, \(for example, ESM+ES2022 specifies that the module is in ESM format and contains ES2022 code\).

### Bundle

An artifact in the form of a single JS file, produced by a build tool \(for example, [webpack](https://webpack.js.org) or [Rollup](https://rollupjs.org)\) that contains symbols originating in one or more modules.
Bundles are a browser-specific workaround that reduce network strain that would be caused if browsers were to start downloading hundreds if not tens of thousands of files.
Node.js typically doesn't use bundles.
Common bundle formats are UMD and System.register.

### Language level

The language of the code \(ES2022\).
Independent of the module format.

### Entry point

A module intended to be imported by the user.
It is referenced by a unique module ID and exports the public API referenced by that module ID.
An example is `@angular/core` or `@angular/core/testing`.
Both entry points exist in the `@angular/core` package, but they export different symbols.
A package can have many entry points.

### Deep import

A process of retrieving symbols from modules that are not Entry Points.
These module IDs are usually considered to be private APIs that can change over the lifetime of the project or while the bundle for the given package is being created.

### Top-Level import

An import coming from an entry point.
The available top-level imports are what define the public API and are exposed in "@angular/name" modules, such as `@angular/core` or `@angular/common`.

### Tree-shaking

The process of identifying and removing code not used by an application - also known as dead code elimination.
This is a global optimization performed at the application level using tools like [Rollup](https://rollupjs.org), [Closure Compiler](https://developers.google.com/closure/compiler), or [Terser](https://github.com/terser/terser).

### AOT compiler

The Ahead of Time Compiler for Angular.

### Flattened type definitions

The bundled TypeScript definitions generated from [API Extractor](https://api-extractor.com).
