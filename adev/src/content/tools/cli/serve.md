# Serving Angular apps for development

You can serve your Angular CLI application with the `ng serve` command.
This will compile your application, skip unnecessary optimizations, start a devserver, and automatically rebuild and live reload any subsequent changes.
You can stop the server by pressing `Ctrl+C`.

`ng serve` only executes the builder for the `serve` target in the default project as specified in `angular.json`.
While any builder can be used here, the most common (and default) builder is `@angular-devkit/build-angular:dev-server`.

You can determine which builder is being used for a particular project by looking up the `serve` target for that project.

<docs-code language="json">

{
  "projects": {
    "my-app": {
      "architect": {
        // `ng serve` invokes the Architect target named `serve`.
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          // ...
        },
        "build": { /* ... */ }
        "test": { /* ... */ }
      }
    }
  }
}

</docs-code>

This page discusses usage and options of `@angular-devkit/build-angular:dev-server`.

## Proxying to a backend server

* goal
  * 💡Angular CLI can redirect certain URLs -- , via passing `--proxy-config`, to a -- backend server💡
    * _Example:_ calls to `http://localhost:4200/api` be redirected -- to -- `http://localhost:3000/api`

* ways to proxy
  * depend -- on -- packaging tool
    * if you use 
      * `@angular-devkit/build-angular:browser` -> see [webpack DevServer documentation](https://webpack.js.org/configuration/dev-server/#devserverproxy)
      * `@angular-devkit/build-angular:browser-esbuild` or `@angular-devkit/build-angular:application` -> see [Vite DevServer documentation](https://vite.dev/config/server-options#server-proxy) 

### -- via -- Webpack

* steps
  1. | "src/", create "proxy.conf.json"
    ```json
    {
        "/api": {
          "target": "http://localhost:3000",
          "secure": false
        }
    }
    ```
  1. | "angular.json"'s `serve.options`, specify `proxyConfig`
    ```json
      {
        "projects": {
          "my-app": {
            "architect": {
              "serve": {
                "builder": "@angular-devkit/build-angular:dev-server",
                "options": {
                  "proxyConfig": "src/proxy.conf.json"
                }
              }
            }
          }
        }
      }
    ```
  1. `ng serve`

* ⚠️if you edit the "proxy.conf.json" -> you must relaunch the `ng serve` ⚠️

## `localhost` resolution

* TODO: As of Node version 17, Node will _not_ always resolve `http://localhost:<port>` to `http://127.0.0.1:<port>`
depending on each machine's configuration.

If you get an `ECONNREFUSED` error using a proxy targeting a `localhost` URL,
you can fix this issue by updating the target from `http://localhost:<port>` to `http://127.0.0.1:<port>`.

See [the `http-proxy-middleware` documentation](https://github.com/chimurai/http-proxy-middleware#nodejs-17-econnrefused-issue-with-ipv6-and-localhost-705)
for more information.
