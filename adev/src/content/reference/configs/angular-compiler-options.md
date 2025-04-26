# Angular compiler options

* `angularCompilerOptions`
  * == Angular options object /
    * == `compilerOptions` object
    * specified | [TypeScript configuration file](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) 
  * allows
    * specifying your application's compilation
  * uses
    * [ahead-of-time compilation (AOT)](tools/cli/aot-compiler),

* _Example:_ [here](../../examples/angular-compiler-options)

## Configuration inheritance -- with -- `extends`

* | TypeScript configuration file's top-level
  * 's level == `compilerOptions`' level == `angularCompilerOptions`' level 
* == TypeScript compiler's `extends`
* allows
  * extending `angularCompilerOptions` /
    * steps
      * load base file's configuration options
      * override -- by -- inheriting configuration file's options

* _Example:_ [tsconfig.app.json](../../examples/angular-compiler-options/tsconfig.app.json)

* see [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

## Template options

* == options -- to configure the -- Angular AOT compiler

### `annotationsAs`

* TODO:
Modifies how Angular-specific annotations are emitted to improve tree-shaking.
Non-Angular annotations are not affected.
One of `static fields` or `decorators`. The default value is `static fields`.

* By default, the compiler replaces decorators with a static field in the class, which allows advanced tree-shakers like [Closure compiler](https://github.com/google/closure-compiler) to remove unused classes
* The `decorators` value leaves the decorators in place, which makes compilation faster.
    TypeScript emits calls to the `__decorate` helper.
    Use `--emitDecoratorMetadata` for runtime reflection.

    HELPFUL: That the resulting code cannot tree-shake properly.

### `annotateForClosureCompiler`

<!-- vale Angular.Angular_Spelling = NO -->

When `true`, use [Tsickle](https://github.com/angular/tsickle) to annotate the emitted JavaScript with [JSDoc](https://jsdoc.app) comments needed by the [Closure Compiler](https://github.com/google/closure-compiler).
Default is `false`.

<!-- vale Angular.Angular_Spelling = YES -->

### `compilationMode`

Specifies the compilation mode to use.
The following modes are available:

| Modes       | Details |
|:---         |:---     |
| `'full'`    | Generates fully AOT-compiled code according to the version of Angular that is currently being used. |
| `'partial'` | Generates code in a stable, but intermediate form suitable for a published library.                 |

The default value is `'full'`.

For most applications, `'full'` is the correct compilation mode.

Use `'partial'` for independently published libraries, such as NPM packages.
`'partial'` compilations output a stable, intermediate format which better supports usage by applications built at different Angular versions from the library.
Libraries built at "HEAD" alongside their applications and using the same version of Angular such as in a mono-repository can use `'full'` since there is no risk of version skew.

### `disableExpressionLowering`

When `true`, the default, transforms code that is or could be used in an annotation, to allow it to be imported from template factory modules.
See [metadata rewriting](tools/cli/aot-compiler#metadata-rewriting) for more information.

When `false`, disables this rewriting, requiring the rewriting to be done manually.

### `disableTypeScriptVersionCheck`

When `true`, the compiler does not look at the TypeScript version and does not report an error when an unsupported version of TypeScript is used.
Not recommended, as unsupported versions of TypeScript might have undefined behavior.
Default is `false`.

### `enableI18nLegacyMessageIdFormat`

Instructs the Angular template compiler to create legacy ids for messages that are tagged in templates by the `i18n` attribute.
See [Mark text for translations][GuideI18nCommonPrepareMarkTextInComponentTemplate] for more information about marking messages for localization.

Set this option to `false` unless your project relies upon translations that were created earlier using legacy IDs.
Default is `true`.

The pre-Ivy message extraction tooling created a variety of legacy formats for extracted message IDs.
These message formats have some issues, such as whitespace handling and reliance upon information inside the original HTML of a template.

The new message format is more resilient to whitespace changes, is the same across all translation file formats, and can be created directly from calls to `$localize`.
This allows `$localize` messages in application code to use the same ID as identical `i18n` messages in component templates.

### `enableResourceInlining`

When `true`, replaces the `templateUrl` and `styleUrls` properties in all `@Component` decorators with inline content in the `template` and `styles` properties.

When enabled, the `.js` output of `ngc` does not include any lazy-loaded template or style URLs.

For library projects created with the Angular CLI, the development configuration default is `true`.

### `enableLegacyTemplate`

When `true`, enables the deprecated `<template>` element in place of `<ng-template>`.
Default is `false`.
Might be required by some third-party Angular libraries.

### `flatModuleId`

The module ID to use for importing a flat module \(when `flatModuleOutFile` is `true`\).
References created by the template compiler use this module name when importing symbols from the flat module.
Ignored if `flatModuleOutFile` is `false`.

### `flatModuleOutFile`

When `true`, generates a flat module index of the given filename and the corresponding flat module metadata.
Use to create flat modules that are packaged similarly to `@angular/core` and `@angular/common`.
When this option is used, the `package.json` for the library should refer to the created flat module index instead of the library index file.

Produces only one `.metadata.json` file, which contains all the metadata necessary for symbols exported from the library index.
In the created `.ngfactory.js` files, the flat module index is used to import symbols. Symbols that include both the public API from the library index and shrouded internal symbols.

By default, the `.ts` file supplied in the `files` field is assumed to be the library index.
If more than one `.ts` file is specified, `libraryIndex` is used to select the file to use.
If more than one `.ts` file is supplied without a `libraryIndex`, an error is produced.

A flat module index `.d.ts` and `.js` is created with the given `flatModuleOutFile` name in the same location as the library index `.d.ts` file.

For example, if a library uses the `public_api.ts` file as the library index of the module, the `tsconfig.json` `files` field would be `["public_api.ts"]`.
The `flatModuleOutFile` option could then be set, for example, to `"index.js"`, which produces `index.d.ts` and `index.metadata.json` files.
The `module` field of the library's `package.json` would be `"index.js"` and the `typings` field would be `"index.d.ts"`.

### `fullTemplateTypeCheck`

When `true`, the recommended value, enables the [binding expression validation](tools/cli/aot-compiler#binding-expression-validation) phase of the template compiler. This phase uses TypeScript to verify binding expressions.
For more information, see [Template type checking](tools/cli/template-typecheck).

Default is `false`, but when you use the Angular CLI command `ng new --strict`, it is set to `true` in the new project's configuration.

IMPORTANT: The `fullTemplateTypeCheck` option has been deprecated in Angular 13 in favor of the `strictTemplates` family of compiler options.

### `generateCodeForLibraries`

When `true`, creates factory files \(`.ngfactory.js` and `.ngstyle.js`\) for `.d.ts` files with a corresponding `.metadata.json` file. The default value is `true`.

When `false`, factory files are created only for `.ts` files.
Do this when using factory summaries.

### `preserveWhitespaces`

When `false`, the default, removes blank text nodes from compiled templates, which results in smaller emitted template factory modules.
Set to `true` to preserve blank text nodes.

HELPFUL: When using hydration, it is recommended that you use `preserveWhitespaces: false`, which is the default value. If you choose to enable preserving whitespaces by adding `preserveWhitespaces: true` to your tsconfig, it is possible you may encounter issues with hydration. This is not yet a fully supported configuration. Ensure this is also consistently set between the server and client tsconfig files. See the [hydration guide](guide/hydration#preserve-whitespaces) for more details.

### `skipMetadataEmit`

When `true`, does not produce `.metadata.json` files.
Default is `false`.

The `.metadata.json` files contain information needed by the template compiler from a `.ts` file that is not included in the `.d.ts` file produced by the TypeScript compiler.
This information includes, for example, the content of annotations, such as a component's template, which TypeScript emits to the `.js` file but not to the `.d.ts` file.

You can set to `true` when using factory summaries, because the factory summaries include a copy of the information that is in the `.metadata.json` file.

Set to `true` if you are using TypeScript's `--outFile` option, because the metadata files are not valid for this style of TypeScript output.
The Angular community does not recommend using `--outFile` with Angular.
Use a bundler, such as [webpack](https://webpack.js.org), instead.

### `skipTemplateCodegen`

When `true`, does not emit `.ngfactory.js` and `.ngstyle.js` files.
This turns off most of the template compiler and disables the reporting of template diagnostics.

Can be used to instruct the template compiler to produce `.metadata.json` files for distribution with an `npm` package. This avoids the production of `.ngfactory.js` and `.ngstyle.js` files that cannot be distributed to `npm`.

For library projects created with the Angular CLI, the development configuration default is `true`.

### `strictMetadataEmit`

* allows
  * verifying the `.metadata.json` files / emitted for bundling -- with an -- `npm` package
    * strict validation
      * ⚠️if the metadata -- is used to determine the -- annotation's contents -> can emit errors / metadata ⚠️ 
        * != use ONLY template compiler
        * 👀if you include `@dynamic` | comment documenting the symbol -> you can suppress the error emitted👀  

* by default, 
  * `false`
  * | library projects / created with Angular CLI, `true` 
* if `true` & `"skipMetadataEmit"=false` -> reports an error | `.metadata.json`

* use cases
  * `"skipMetadataEmit"=false`
  * `"skipTemplateCodegen"=true`

* about symbols
  * metadata collector 
    * can NOT predict the symbols / designed for use | annotation
    * preemptively includes error nodes | metadata / exported symbols
  * template compiler
    * if exported symbols are used -> template compiler -- , via using PREVIOUS error nodes, report an -- error
    * if library's client 
      * tries to use a symbol | annotation -> template compiler does NOT NORMALLY report this error
      * AFTER using a symbol -> template compiler reports this error
  * allows
    * | library's build phase, detecting errors 
  * uses
    * produce Angular libraries themselves

### `strictInjectionParameters`

When `true`, reports an error for a supplied parameter whose injection type cannot be determined.
When `false`, constructor parameters of classes marked with `@Injectable` whose type cannot be resolved produce a warning.
The recommended value is `true`, but the default value is `false`.

When you use the Angular CLI command `ng new --strict`, it is set to `true` in the created project's configuration.

### `strictTemplates`

When `true`, enables [strict template type checking](tools/cli/template-typecheck#strict-mode).

The strictness flags that this option enables allow you to turn on and off specific types of strict template type checking.
See [troubleshooting template errors](tools/cli/template-typecheck#troubleshooting-template-errors).

When you use the Angular CLI command `ng new --strict`, it is set to `true` in the new project's configuration.

### `strictStandalone`

When `true`, reports an error if a component, directive, or pipe is not standalone.

### `trace`

When `true`, prints extra information while compiling templates.
Default is `false`.

## CL options

* `ngc` command
  * -- provided by the -- `@angular/compiler-cli` npm package
  * allows
    * calling the compiler -- from the -- CL
  * wrapper around TypeScript's `tsc` compiler command 
  * ways to configure
    * -- through -- `tsconfig.json`
      * != Angular CLI (`ng`)
        * Reason: 🧠configured -- through -- `angular.json`🧠
    * -- through -- [`tsc` CL options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

[GuideI18nCommonPrepareMarkTextInComponentTemplate]: guide/i18n/prepare#mark-text-in-component-template "Mark text in component template - Prepare component for translation | Angular"
