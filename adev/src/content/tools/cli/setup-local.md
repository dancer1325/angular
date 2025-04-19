# Setting up the local environment and workspace

* goal
  * install Angular CLI -- to -- create & run an Angular app

## Requirements

* install [Node.js](https://nodejs.org/)
  * used by Angular CLI -- to -- install & run JS tools / OUTSIDE the browser
  * [active LTS or maintenance LTS versions](https://nodejs.org/en/about/previous-releases)
    * Reason: 🧠required by Angular 🧠

## Install the Angular CLI

* `npm install -g @angular/cli`

### Powershell execution policy

* TODO:
On Windows client computers, the execution of PowerShell scripts is disabled by default, so the above command may fail with an error.
To allow the execution of PowerShell scripts, which is needed for npm global binaries, you must set the following <a href="https://docs.microsoft.com/powershell/module/microsoft.powershell.core/about/about_execution_policies">execution policy</a>:

<docs-code language="sh">

Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

</docs-code>

Carefully read the message displayed after executing the command and follow the instructions. 
Make sure you understand the implications of setting an execution policy.

### Unix permissions

* `sudo npm install -g @angular/cli`

## Create a workspace & initial application

* Angular apps
  * are developed | Angular workspace

* `ng new my-app`
  * creates a 
    * NEW workspace
      * -> MUST be executed | OUTSIDE a workspace 
    * NEW app 
      * | workspace
      * | root directory
      * / 's name == workspace's name

## Run the application

* `ng serve --open`
  * `ng serve` command
    * launches the server,
    * watches your files / if you make changes -> rebuilds the app & reloads the browser
  * `--open`
    * AUTOMATICALLY opens your browser | `http://localhost:4200/` 

## Workspaces & project files

* if you generate ADDITIONAL application or library | EXISTING workspace -> created | `projects/` subfolder
