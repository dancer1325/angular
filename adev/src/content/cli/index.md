# CLI Overview and Command Reference

* Angular CLI
  * == CL interface tool
  * uses about Angular applications 
    * initialize,
    * develop,
    * scaffold,
    * maintain 

## Installing Angular CLI

* | MAJOR Angular version,
  * Angular CLI version == Angular version
* | MINOR Angular versions,
  * Angular CLI -- is released separately to -- Angular

* `npm install -g`

## Basic workflow

* 
  ```
  ng new my-first-project
  cd my-first-project
  ng serve
  ```
* | your browser,
  * open http://localhost:4200/

## Workspaces and project files

The [ng new](cli/new) command creates an *Angular workspace* folder and generates a new application skeleton.
A workspace can contain multiple applications and libraries.
The initial application created by the [ng new](cli/new) command is at the top level of the workspace.
When you generate an additional application or library in a workspace, it goes into a `projects/` subfolder.

A newly generated application contains the source files for a root module, with a root component and template.
Each application has a `src` folder that contains the logic, data, and assets.

You can edit the generated files directly, or add to and modify them using CLI commands.
Use the [ng generate](cli/generate) command to add new files for additional components and services, and code for new pipes, directives, and so on.
Commands such as [add](cli/add) and [generate](cli/generate), which create or operate on applications and libraries, must be executed from within a workspace or project folder.

*   See more about the [Workspace file structure](guide/file-structure).

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

Boolean options have two forms: `--this-option` sets the flag to `true`, `--no-this-option` sets it to `false`.
If neither option is supplied, the flag remains in its default state, as listed in the reference documentation.

### Array options

Array options can be provided in two forms: `--option value1 value2` or `--option value1 --option value2`.

### Relative paths

Options that specify files can be given as absolute paths, or as paths relative to the current working directory, which is generally either the workspace or project root.

### Schematics

The [ng generate](cli/generate) and [ng add](cli/add) commands take, as an argument, the artifact or library to be generated or added to the current project.
In addition to any general options, each artifact or library defines its own options in a *schematic*.
Schematic options are supplied to the command in the same format as immediate command options.

<!-- links -->

<!-- external links -->

<!-- end links -->

@reviewed 2022-02-28
