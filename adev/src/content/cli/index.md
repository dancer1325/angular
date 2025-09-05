# CLI Overview and Command Reference

* Angular CLI
  * == CL interface tool
  * allows, about Angular applications 
    * initialize,
    * develop,
    * scaffold,
    * maintain 

## Installing Angular CLI

* | MAJOR Angular version,
  * Angular CLI version == Angular version
* | MINOR Angular versions,
  * ⚠️Angular CLI -- is released separately to -- Angular ⚠️

* `npm install -g @angular/cli`

## Basic workflow

* 
  ```
  ng new my-first-project
  cd my-first-project
  ng serve
  ```

* _Example:_ [here](../examples/basicWorkflow)

## Workspaces & project files

* TODO: add examples

* [`ng new`](cli/new)
  * creates an Angular workspace folder
  * generates a NEW application skeleton 
    * == root module + root component + root template

* workspace
  * == MULTIPLE applications & libraries /
    * initial application / created by [`ng new`](cli/new)
      * is | top level of the workspace
    * if you generate an ADDITIONAL application OR library | workspace -> goes | `projects/` subfolder
    * applications'
      * `src/` == logic + data + assets

* [`ng generate`](cli/generate)
  * add NEW 
    * components
    * services
    * pipes,
    * directives,
  * ALTERNATIVE 
    * add MANUALLY

* [`ng add`](cli/add) & [`ng generate`](cli/generate) 's requirements
  * execute | workspace OR project folder

* [MORE here](../reference/configs/file-structure)

### Workspace and project configuration

A single workspace configuration file, `angular.json`, is created at the top level of the workspace.
This is where you can set per-project defaults for CLI command options, and specify configurations to use when the CLI builds a project for different targets.

The [ng config](cli/config) command lets you set and retrieve configuration values from the command line, or you can edit the `angular.json` file directly.

<div class="alert is-helpful">

**NOTE**: <br />
Option names in the configuration file must use [camelCase](guide/glossary#case-types), while option names supplied to commands must be dash-case.

</div>

*   See more about [Workspace Configuration](guide/workspace-config).

## CLI command-language syntax

* `ng <command-name> <required-arg> [*optional-arg*] [options]`
  * aliases
    * EXIST | 
      * MOST commands
      * SOME options  
    * shown | syntax statement / EACH command
  * Option names
    * prefixed with `--`
  * Option aliases
    * prefixed with `-`
  * arguments NOT prefixed
    ```
    ng build my-app -c production
    ```
* TODO: Typically, the name of a generated artifact can be given as an argument to the command or specified with the `--name` option.
* Arguments and option names must be given in [dash-case](guide/glossary#case-types).
    For example: `--my-option-name`

### Boolean options

* forms
  * `--this-option`
    * == set to `true`
  * `--no-this-option`
    * == set to `false`

### Array options

* forms
  * `--option value1 value2` OR
  * `--option value1 --option value2`

### Schematics

* [ng generate](cli/generate) OR [ng add](cli/add) commands'
  * argument
    * artifact OR library / generated OR added | current project
* EACH artifact or library
  * defines its OWN options | a schematic
    * == Schematic options
    * ' format to supply == IMMEDIATE command options' format to supply

@reviewed 2022-02-28
