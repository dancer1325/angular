# Deployment

* goal
  * ways to deploy your Angular application | remote server

## AUTOMATIC deployment -- via -- CLI == `ng deploy` 

* `ng deploy`
  * executes the `deploy` [CLI builder](tools/cli/cli-builder) / -- associated with -- your project
    * 👀EXIST SEVERAL third-party builders / implement deployment | DIFFERENT platforms👀
      * if you add a builder (-- via -- `ng add`) -> AUTOMATICALLY add a `deploy` section | your workspace configuration (`angular.json` file)
    * _Example:_ [Firebase](https://firebase.google.com/)
      * create a Firebase account
      * 
        ```
        ng add @angular/fire
        
        ng deploy
        # prompt -- to select a -- Firebase project | deploy 
        ```
  * if you want to deploy | self-managed server OR NO EXIST builder / your cloud platform -> 
    * [create a builder](tools/cli/cli-builder) / allows you to use `ng deploy` command, OR
    * [MANUALLY deploy your application](#manual-deployment-to-a-remote-server)

  | Deployment \|                                                     | Setup Command                                                                              |
  |:------------------------------------------------------------------|:---                                                                                  |
  | [Firebase hosting](https://firebase.google.com/docs/hosting)      | [`ng add @angular/fire`](https://npmjs.org/package/@angular/fire)                           |
  | [Vercel](https://vercel.com/solutions/angular)                    | [`vercel init angular`](https://github.com/vercel/vercel/tree/main/examples/angular) |
  | [Netlify](https://www.netlify.com)                                | [`ng add @netlify-builder/deploy`](https://npmjs.org/package/@netlify-builder/deploy)       |
  | [GitHub pages](https://pages.github.com)                          | [`ng add angular-cli-ghpages`](https://npmjs.org/package/angular-cli-ghpages)               |
  | [Amazon Cloud S3](https://aws.amazon.com/s3/?nc2=h_ql_prod_st_s3) | [`ng add @jefiozie/ngx-aws-deploy`](https://www.npmjs.com/package/@jefiozie/ngx-aws-deploy) |

## Manual deployment to a remote server

* steps
  * `ng build`
    * create a production build | `dist/my-app/`
      * Reason: 🧠by default, uses the `production` configuration🧠
      * if you want to customize the path -> configure `@angular-devkit/build-angular:browser` builder's `outputPath` 
  * copy the output directory | 
    * web server OR
    * content delivery network (CDN)

## Server configuration

* == ⚠️MANDATORY server's configuration -- to run -- your Angular application ⚠️

### Routed apps -- MUST fall back to -- `index.html`

* if your Angular application
  * client-side rendered -> use static HTML server 
    * Reason: 🧠ALL content is 
      * static
      * generated | build time 🧠
  * uses the Angular router & ask for a file / NOT have -> ⚠️server -- MUST return the -- application's host page (`index.html`) == server's SPA mode⚠️
    * Reason: 🧠routed application -- should support -- deep links 🧠
    * if [404 pages implemented | Angular router](guide/routing/common-router-tasks#displaying-a-404-page) -> ❌server does NOT require any additional configuration ❌

* deep link
  * 👀:= URL / specifies a path -- to an -- application's component 👀
    * -- handled by the -- browser / 
      * direct request | server
        * ⚠️== bypass Angular's router⚠️
      * ANYWHERE | deep link is
        * _Example:_ 
          * email, 
          * enter it | browser address bar,
          * refresh the browser / ALREADY | deep linked page  
  * _Example:_ `http://my-app.test/users/42` 
    * deep link -- to the -- user detail page / `id=42`

* Angular router
  * performs the navigation | client-side
    * ❌NOT request a NEW HTML page❌

### Requesting data -- from a -- DIFFERENT server (CORS)

* [*cross-origin resource sharing*](https://developer.mozilla.org/docs/Web/HTTP/CORS "Cross-origin resource sharing")
* use cases
  * make a network request -- to a -- server / != application's OWN host server
    * requirements
      * ⚠️server MUST explicitly permit them ⚠️ == ALL -- depends on -- server
        * see [enable-cors.org](https://enable-cors.org/server.html "Enabling CORS server")

## Production optimizations

* [`ng build`](cli/build)
  * by default, uses production optimization

| Optimization Features                                             | Details                                                                                         |
|:------------------------------------------------------------------|:------------------------------------------------------------------------------------------------|
| [Ahead-of-Time (AOT) Compilation](tools/cli/aot-compiler)         | Angular component templates -- are -- precompiled                                               |
| [Production mode](tools/cli/deployment#development-only-features) | Optimizes the application / BEST runtime performance                                            |
| Bundling                                                          | your application & library files -- are concatenated into a -- MINIMUM number of deployed files |
| Minification                                                      | Removes excess whitespace, comments, and optional tokens.                                       |
| Mangling                                                          | Renames functions, classes, and variables -- to use -- shorter, arbitrary identifiers           |
| Dead code elimination                                             | Removes unreferenced modules & unused code                                                      |

### Development-only features

* == removed -- from -- production build's output
  * Reason: 🧠extra code -> MORE size 🧠

* are
  * extra safety checks
    * _Example:_ [`expression-changed-after-checked`](errors/NG0100) detection
  * MORE detailed error messages
  * ADDITIONAL debugging utilities
    * global `ng` variable -- with -- [debugging functions](api#core-global)
    * [Angular DevTools](tools/devtools)

* use cases
  * `ng serve`

## `--deploy-url`

* == CL option /
  * ⭐️== base path -- for resolving -- relative URLs of assets (_Example:_ images, scripts, and style sheets | compile time) ⭐️
  * _Example:_ `ng build --deploy-url /my/assets`
  * vs [`<base href>`](guide/routing/common-router-tasks) 
    * COMMON use cases
      * initial scripts, stylesheets, lazy scripts, and css resources
    * DIFFERENT way to configure
      * `<base href>`
        * define | 1! | runtime
      * `--deploy-url`
        * hard-code | application | build time 
    * recommendation
      * 💡use `<base href>` 💡
