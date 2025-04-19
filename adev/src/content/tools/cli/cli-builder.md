# Angular CLI builders

* goal
  * how CLI builders -- integrate with the -- workspace configuration file
  * how to create your OWN builder 
    * -- via -- CLI Builder API
    * recommendations
      * add integration tests / test Architect builders
      * add unit tests / validate the builder's logic

* SOME Angular CLI commands -- run a -- complex process | your code
  * _Example:_ building, testing, or serving your application
  * 👀-- via using under the hood -- Architect 👀

* CLI builder 
  * := handler function / 
    * perform -- [via Architect API](https://github.com/dancer1325/angular-cli/blob/main/packages/angular_devkit/architect/src/api.ts) -- complex process (build / test / ...)
    * 's code is defined / distributed | npm package
      * Check the code [here](https://github.com/angular/angular-cli/blob/main/packages/angular_devkit/build_angular/builders.json)
    * returns `BuilderOutput` /
      * ['s fields](https://github.com/dancer1325/angular-cli/blob/main/packages/angular_devkit/architect/src/output-schema.json)
        * `success: Boolean`
        * `error`
          * OPTIONAL
          * contain an error message 
        * `target`
        * `info`
      * can be
        * synchronous (== value),
        * asynchronous (== `Promise`),
        * watch & return multiple values (== `Observable`)
        * schedule OTHER builders or targets
  * ways to run
    * `ng run specificCommand`
    * -- via -- schematics
  * types
    * built-in by Angular
      * -- used by the -- Angular CLI commands
        * _Example:_ `ng build`, `ng test`
    * [custom builders](#how-to-create-a-builder)
  * you can [publish it | npm](../../tools/libraries/creating-libraries)
  * _Examples:_
    * _Example1:_ [BrowserBuilder](https://github.com/angular/angular-cli/tree/main/packages/angular_devkit/build_angular/src/builders/browser) runs a webpack build for a browser target
    * _Example2:_ [KarmaBuilder](https://github.com/angular/angular-cli/tree/main/packages/angular_devkit/build_angular/src/builders/karma) runs a webpack build for unit tests
    * see [this GitHub repository](https://github.com/dancer1325/cli-builders-demo)
  *
  | Argument  | Type             |
  |:---       |:---              |
  | `options` | `JSONObject`     |
  | `context` | `BuilderContext` |
  
    * `options` object
      * -- provided by the -- CLI 
        * user's options
        * configuration
    * `context` object
      * -- provided automatically by the -- CLI Builder API
      * provide access to
        * the contextual information
        * a scheduling method -- `context.scheduleTarget()` --

* scheduler
  * executes the CLI builder handler function -- with a -- given target configuration

* see [default target configurations](../../reference/configs/workspace-config.md#default-architect-builders-and-targets)

## Builder project structure

* builder
  * placed | "project/" /
    * 's structure
      * == [Angular workspace's structure](../../reference/configs/workspace-config.md)
      * | top level, global configuration files
      * | src, specific configuration / define the behavior
      * _Example:_ `myBuilder/` 

| Files               | Purpose                                                                                     |
|:--------------------|:--------------------------------------------------------------------------------------------|
| `src/index.ts`      | builder definition's MAIN source file  <br/> ⚠️this CONCRETE file name ⚠️                   |
| `src/index.spec.ts` | Source file -- for -- tests                                                                 |
| `src/schema.json`   | builder input options' definition                                                           |
| `builders.json`     | Builders definition.                                                                        |
| `package.json`      | See [https://docs.npmjs.com/files/package.json](https://docs.npmjs.com/files/package.json)  |
| `tsconfig.json`     | [TypeScript configuration](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) |

## how to create a builder?

* use the `createBuilder()` CLI Builder function / return a `Promise<BuilderOutput>` object

### Handling output

* `BuilderContext.logger`
  * log additional information / makes easier to understand problems occured

### Progress and status reporting

* `BuilderContext.reportStatus(status: string): void;`
  * [here](https://github.com/dancer1325/angular-cli/blob/main/packages/angular_devkit/architect/src/api.md)
* `BuilderContext.reportProgress(current: number, total?: number, status?: string): void;`
  * [here](https://github.com/dancer1325/angular-cli/blob/main/packages/angular_devkit/architect/src/api.md)
* allows
  * providing hints | CERTAIN functions & interfaces

## Builder input

* ways to invoke a builder
  * INDIRECTLY -- through a -- CLI command
    * _Example:_ `ng build`
  * DIRECTLY -- through -- `ng run` command

* inputs 
  * / used in HIGHEST - LOWEST priority
    * CL's arguments
    * [environment-specific](environments)
    * default | target configuration

### Input validation

* define | JSON schema -- associated with -- that builder
  * how does it work?
    * == schematics
    * steps
      * resolved input values -- are collected into an -- 💡`options` object 💡
      * | BEFORE passing -- to -- builder function 
        * 's types -- are validated against the -- 💡schema.json💡
          ```
          {
            "$schema": "http://json-schema.org/schema",
            "type": "object",
            "properties": {
              "source": {
                "type": "string"
              },
              "destination": {
                "type": "string"
              }
            }
          }
          ```

* [JSON schemas website](http://json-schema.org)

* 👀steps / our builder implementation -- is linked with -- its schema & name 👀
  * | `package.json`, add `"builders"`
    ```title=package.json
    {
      "name": "@example/copy-file",
      "version": "1.0.0",
      "description": "Builder for copying files",
      "builders": "builders.json",
      "dependencies": {
        "@angular-devkit/architect": "~0.1200.0",
        "@angular-devkit/core": "^12.0.0"
      }
    }
    ```
    * builder's official name == "packageName:builderNameSpecifiedInBuildersJSON"
      * _Example:_ "@example/copy-file:copy"
  * create a builder definition file == "builders.json"
    ```title=builders.json
    {
      "builders": {
        "copy": {
          "implementation": "./dist/my-builder.js",
          "schema": "./src/schema.json",
          "description": "Copies a file."
        }
      }
    }
    ```

### Target configuration -- `architect.*.configurations` --

* builder's target
  * specifies
    * builder's input configuration & project
      * default options -- `"options"` -- 
      * named alternative
    * builder 
      * -- to -- use
  * defined | `angular.json` 
    * [CLI configuration file](reference/configs/workspace-config)
    * section / EACH project's "architect" section
  * uses
    * by Angular CLI, to resolve input options / given run
  ```title=angular.json
  …
  "myApp": {
    …
    "architect": {
      "build": {
        "builder": "@angular-devkit/build-angular:browser",
        "options": {
          "outputPath": "dist/myApp",
          "index": "src/index.html",
          …
        },
        "configurations": {
          "production": {
            "fileReplacements": [
              {
                "replace": "src/environments/environment.ts",
                "with": "src/environments/environment.prod.ts"
              }
            ],
            "optimization": true,
            "outputHashing": "all",
            …
          }
        }
      },
      …
    }
  }
  …
  ```

* | CL, if you pass `--configuration=configurationName` -> override values
  * _Example:_ `ng build --configuration=production`

#### Target strings

* `ng run project:target[:configuration]`

|               | Details                                                                                  |
|:--------------|:-----------------------------------------------------------------------------------------|
| project       | Angular CLI project's name / target is associated with                                   |
| target        | \| `angular.json`, SOME `architect`'s named builder configuration                        |
| configuration | OPTIONAL <br/> \| `angular.json`'s specific configuration's name / override the target |

* if your builder calls ANOTHER builder -> read a parsed target string
  * -- via -- `@angular-devkit/architect`'s `targetFromTargetString()` 

## Schedule and run

* builders
  * 👀are run ASYNCHRONOUSLY -- by -- Architect 👀
  * ways to run
    * schedule a task / run | ALL configuration resolution is complete
      * == execution | scheduler returns a `BuilderRun` control object
      * CLI schedules tasks -- by calling the -- `context.scheduleTarget()` function
    * from ANOTHER builder
    * call `context.scheduleBuilder()`

* if inputs are valid -> Architect
  * creates the `BuilderContext`
  * executes the builder

### Adding a target

* ways to refer the target
  * published | npm registry
  * relative path

### Running the builder

* `ng run projectName:architectName`
  * == use target's default configuration
* if you want to override the configured defaults -> use CL arguments 

## Testing a builder

* integration testing -- for -- your builder
  * requirements
    * [`ts-node`](https://github.com/TypeStrong/ts-node) OR `my-builder.spec.ts` -- be renamed to -- `my-builder.spec.js`
  * Reason: 🧠create a context -- via the -- Architect scheduler🧠
  * _Example:_ [here](https://github.com/mgechev/cli-builders-demo)
  * / uses
    * `JsonSchemaRegistry`
      * -- for -- schema validation 
    * `TestingArchitectHost`
      * == `ArchitectHost`'s in-memory implementation
    * `Architect`

### Watch mode

* goal
  * builder /
    * 1! run & return
    * watches for changes (_Example:_ devserver)
* requirements by Architect
  * builder handler function -- returns an -- `Observable`
    * Architect subscribes to the `Observable` | TILL it completes
    * if the builder is scheduled AGAIN / SAME arguments -> Architect might reuse it 
  * | AFTER EACH execution, builder -- should ALWAYS emit a -- `BuilderOutput` object 
    * -> enter a watch mode / -- can be triggered, by an -- EXTERNAL event
    * if an event triggers it to restart -> the builder should execute the `context.reportRunning()` function
      * Reason: 🧠tell Architect / it is running AGAIN🧠
    * -> if ANOTHER run is scheduled -- prevents -- Architect / stop the builder 

* `BuilderRun.stop()`
  * == builder wants to exit watch mode
  * Architect 
    * unsubscribes -- from the -- builder's `Observable`
    * calls the builder's teardown logic -- to -- clean up
  * allows
    * about long-running builds, to be
      * stopped
      * cleaned up

* if the builder is watching an external event -> phases | separate your run

| Phases     | Details                                                                                                                                                                                                                                      |
|:-----------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Running    | == task / being performed _Example:_ invoking a compiler <br/> if compiler finishes & your builder emits a `BuilderOutput` object -> ends                                                                                                    |
| Watching   | == watch an EXTERNAL event stream \| 2 runs <br/> _Example:_ watch the file system / ANY changes <br/> if compiler restarts & `context.reportRunning()` is called -> ends                                                                    |
| Completion | == task is FULLY completed (_Example:_ compiler / needs to run a NUMBER of times) & builder run was stopped (-- via -- `BuilderRun.stop()`) <br/> from your builder's `Observable` -> Architect -- executes -- teardown logic & unsubscribes |
