# Hello world

* goal
  * display the famous "Hello World"

* [youtube](https://www.youtube.com/embed/UnOwDuliqZA?si=uML-cDRbrxmYdD_9)

* | browser playground,
  * NOT need to run `ng serve`

* Angular project structure
  * `/src/index.html`
    * == app's top level HTML template
  * `/src/styles.css`
    * == app's top level CSS
  * `/src/main.ts`
    * where the app starts running
  * `/src/favicon.ico`
    * == app's icon
  * `/src/app`
    * == top-level Angular component | app
  * `/src/assets`
    * == images -- used by the -- app
  * `.angular`
    * == files -- required to build the -- Angular app
  * `.e2e`
    * == files -- used to test the -- app
  * `.node_modules`
    * == node.js packages / used by the app
  * `angular.json`
    * == Angular app + app building tools
  * `package.json`
    * -- used by -- `npm`
  * `tsconfig.*`
    * == app's configuration -- to the -- TypeScript compiler

* steps
  * | `index.html`,
    * replace the title
  * | `/src/app/app.component.ts`.
    * replace the `template` line
    * replace the class property `title`
