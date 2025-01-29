# Generating code using schematics

* := Tools / simplify the development | large scale
  * == rules or instructions / transform -- by generating or modifying code, a -- software project 
  * == template-based code generator / supports complex logic
  * -- Example:_ 
    * automated scaffolding
      * === how to generate / transform a programming project
    * refactoring
    * update
  * 👀uses / built-in by Angular CLI 👀 
    * generate Angular web-projects 
      ```
      ng generate
      ```
      * _Examples:_
        * _Example1:_ generate -- via predefined templates or layouts -- commonly-used UI patterns 
    * modify Angular web-projects
      ```
      ng add
      ```
    * -- enforce -- architectural rules and conventions   
* see [source code](https://github.com/dancer1325/angular-cli/tree/main/packages/schematics/angular)
* packaged | collections
* installed -- via -- npm

## Schematics | Angular CLI

* allows
  * -- transforms to a -- web-app project
  * update your code / fix breaking changes | dependency,
  * add a NEW configuration option or framework | EXISTING project

* [`@schematics/angular`](https://github.com/dancer1325/angular-cli/tree/main/packages/schematics/angular)
  * == collection of schematics /
    * subcomands are specified
  * they are run -- via -- 
    * `ng generate`
    * `ng add`

* [angular material's schematics](https://github.com/angular/components/tree/main/src/material/schematics)

* if you want to generate a particular schematic OR a collection of schematics -> run
  ```
  ng generate my-schematic-collection:my-schematic-name
  ng generate my-schematic-name --collection collection-name
  ```

### Configuring CLI schematics

* 👀schematic's JSON schema 👀
  * indicates to Angular CLI
    * AVAILABLE 
      * commands' options & default ones
      * sub-commands' options & default ones
  * see [Workspace Configuration](../../reference/configs/workspace-config)

## Developing schematics for libraries

* TODO:
As a library developer, you can create your own collections of custom schematics to integrate your library with the Angular CLI.

* An *add schematic* lets developers install your library in an Angular workspace using `ng add`
* *Generation schematics* can tell the `ng generate` sub-commands how to modify projects, add configurations and scripts, and scaffold artifacts that are defined in your library
* An *update schematic* can tell the `ng update` command how to update your library's dependencies and adjust for breaking changes when you release a new version

For more details of what these look like and how to create them, see:

<docs-pill-row>
  <docs-pill href="tools/cli/schematics-authoring" title="Authoring Schematics"/>
  <docs-pill href="tools/cli/schematics-for-libraries" title="Schematics for Libraries"/>
</docs-pill-row>

### Add schematics

An *add schematic* is typically supplied with a library, so that the library can be added to an existing project with `ng add`.
The `add` command uses your package manager to download new dependencies, and invokes an installation script that is implemented as a schematic.

For example, the [`@angular/material`](https://material.angular.io/guide/schematics) schematic tells the `add` command to install and set up Angular Material and theming, and register new starter components that can be created with `ng generate`.
Look at this one as an example and model for your own add schematic.

Partner and third party libraries also support the Angular CLI with add schematics.
For example, `@ng-bootstrap/schematics` adds [ng-bootstrap](https://ng-bootstrap.github.io)  to an app, and  `@clr/angular` installs and sets up [Clarity from VMWare](https://clarity.design/documentation/get-started).

An *add schematic* can also update a project with configuration changes, add additional dependencies \(such as polyfills\), or scaffold package-specific initialization code.
For example, the `@angular/pwa` schematic turns your application into a PWA by adding an application manifest and service worker.

### Generation schematics

Generation schematics are instructions for the `ng generate` command.
The documented sub-commands use the default Angular generation schematics, but you can specify a different schematic \(in place of a sub-command\) to generate an artifact defined in your library.

Angular Material, for example, supplies generation schematics for the UI components that it defines.
The following command uses one of these schematics to render an Angular Material `<mat-table>` that is pre-configured with a datasource for sorting and pagination.

<docs-code language="shell">

ng generate @angular/material:table <component-name>

</docs-code>

### Update schematics

 The `ng update` command can be used to update your workspace's library dependencies.
 If you supply no options or use the help option, the command examines your workspace and suggests libraries to update.

<docs-code language="shell">

ng update
We analyzed your package.json, there are some packages to update:

    Name                                      Version                     Command to update
    &hyphen;-------------------------------------------------------------------------------
    @angular/cdk                       7.2.2 -> 7.3.1           ng update @angular/cdk
    @angular/cli                       7.2.3 -> 7.3.0           ng update @angular/cli
    @angular/core                      7.2.2 -> 7.2.3           ng update @angular/core
    @angular/material                  7.2.2 -> 7.3.1           ng update @angular/material
    rxjs                                      6.3.3 -> 6.4.0           ng update rxjs

    There might be additional packages that are outdated.
    Run "ng update --all" to try to update all at the same time.

</docs-code>

If you pass the command a set of libraries to update \(or the `--all` flag\), it updates those libraries, their peer dependencies, and the peer dependencies that depend on them.

HELPFUL: If there are inconsistencies \(for example, if peer dependencies cannot be matched by a simple [semver](https://semver.io) range\), the command generates an error and does not change anything in the workspace.

We recommend that you do not force an update of all dependencies by default.
Try updating specific dependencies first.

For more about how the `ng update` command works, see [Update Command](https://github.com/angular/angular-cli/blob/main/docs/specifications/update.md).

If you create a new version of your library that introduces potential breaking changes, you can provide an *update schematic* to enable the `ng update` command to automatically resolve any such changes in the project being updated.

For example, suppose you want to update the Angular Material library.

<docs-code language="shell">
ng update @angular/material
</docs-code>

This command updates both `@angular/material` and its dependency `@angular/cdk` in your workspace's `package.json`.
If either package contains an update schematic that covers migration from the existing version to a new version, the command runs that schematic on your workspace.
