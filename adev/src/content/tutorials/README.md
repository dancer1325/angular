# Angular embedded docs tutorial

## Tutorial files

* EACH tutorial == tutorial content + source code + configuration

### Content

* == `README.md`
  * _Example:_ [`learn-angular`](learn-angular)'s content -> see [`learn-angular/intro/README.md`](learn-angular/intro/README.md)

### Configuration 

* == `config.json` / ALLOWED options
  * `title`
    * uses
      * tutorial nav
  * `nextTutorial`
    * == path of the next tutorial 
  * `src`
    * TODO: the relative path to an external directory, which defines the tutorial source code used in the embedded editor
  * `answerSrc`
    * the relative path to an external directory, which defines the tutorial answer used in the embedded editor
  * `openFiles`
    * == [files] -- to be -- open | editor
  * `type`
    * == required components -- for the -- tutorial
  * `cli`
    * a tutorial with a `cli` type will contain only the content and an interactive terminal with the Angular CLI
  * `editor`
    * used for the complete embedded editor, containing the code editor, the preview, an interactive terminal and the console with outputs from the dev server
  * `local`
    * disables the embedded editor and shows only the content
  * `editor-only`
    * a special config used for the tutorial playground and the homepage playground, which disables the content and shows only the embedded editor

### Source code

* tutorial source code's precedence > [`common`](#common) 
  * == if a file exists | tutorial directory & [`common`](#common), & SAME relative path -> tutorial file -- will override the -- [`common`](#common) file

## Tutorials directory structure

* == "intro/" + "steps/" 
  * step naming
    * == `number-stepPathname`
  * _Example:_ [`learn-angular` tutorial](learn-angular)
    * [`learn-angular/intro`](learn-angular/intro)
    * [`learn-angular/steps`](learn-angular/steps)

## Reserved tutorials directories

### `common/` project

* == COMPLETE Angular project / reused -- by -- ALL tutorials
  * == ALL dependencies(`package.json`, `package-lock.json`) + project configuration(`tsconfig.json`, `angular.json`) + main files / bootstrap the application(`index.html`, `main.ts`, `app.module.ts`)
  * SPECIFIC / EACH tutorial
    * _Example:_ [first-app's common/](first-app/common)

* Reasons to have it: 🧠
  * avoid duplication of files
  * optimize in-app performance -- thanks to --
    * request the COMMON project files and dependencies 1!
    * browser cache | subsequent requests
  * faster to navigate through tutorials -- thanks to -- 1! `npm install` | ALL tutorials 
  * consistent environment | ALL tutorials
  * EACH tutorial focus | specific source code (NOT | project setup) 🧠

### `playground/`

* [`playground`](playground)
  * == source code -- for the -- tutorials playground ❓

## Update dependencies 

* TODO:
To update the dependencies  of all tutorials you can run the following script

```bash 
rm ./adev/src/content/tutorials/homepage/package-lock.json  ./adev/src/content/tutorials/first-app/common/package-lock.json ./adev/src/content/tutorials/learn-angular/common/package-lock.json ./adev/src/content/tutorials/playground/common/package-lock.json 

npm i --package-lock-only --prefix ./adev/src/content/tutorials/homepage
npm i --package-lock-only --prefix ./adev/src/content/tutorials/first-app/common
npm i --package-lock-only --prefix ./adev/src/content/tutorials/learn-angular/common               
npm i --package-lock-only --prefix ./adev/src/content/tutorials/playground/common
```