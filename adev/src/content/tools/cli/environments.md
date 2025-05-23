# Configuring application environments

* goal
  * define DIFFERENT named build configurations | your project 
    * _Example:_ `development`, `staging`, ... 
    * / DIFFERENT defaults | options / apply | builder targets

## Angular CLI configurations == `configurations`

* Angular CLI builders' `configurations`
  * == object
    * [here](https://github.com/dancer1325/angular-cli/blob/main/packages/angular_devkit/architect/src/targets-schema.json#L23-L27)
  * allows
    * ⚠️overwriting SPECIFIC options / builder -- based on the -- configuration provided | CL ⚠️
  * _Example:_ `ng build --configuration debug`
    ``` 
    {
      "projects": {
        "my-app": {
          "architect": {
            "build": {
              "builder": "@angular-devkit/build-angular:browser",
              "options": {
                // ⚠️By default, disable source map generation⚠️
                "sourceMap": false
              },
              "configurations": {
                // ⚠️| `debug` configuration, enable source maps⚠️
                "debug": {
                  "sourceMap": true
                }
              }
            },
            …
          }
        }
      }
    }
    ```
  * uses
    * | ANY Angular CLI builder 
  * if you want to apply MULTIPLE configurations -> specify -- with a -- `,` separator /
    * applied in order
    * if there are conflicting options -> use LAST configuration's value
    ```
    ng build --configuration debug,production,customer-facing
    ```

## Configure environment-specific defaults

* TODO:
`@angular-devkit/build-angular:browser` supports file replacements, an option for substituting source files before executing a build.
Using this in combination with `--configuration` provides a mechanism for configuring environment-specific data in your application.

Start by [generating environments](cli/generate/environments) to create the `src/environments/` directory and configure the project to use file replacements.

<docs-code language="shell">

ng generate environments

</docs-code>

The project's `src/environments/` directory contains the base configuration file, `environment.ts`, which provides the default configuration for production.
You can override default values for additional environments, such as `development` and `staging`, in target-specific configuration files.

For example:

<docs-code language="text">

my-app/src/environments
├── environment.development.ts
├── environment.staging.ts
└── environment.ts

</docs-code>

The base file `environment.ts`, contains the default environment settings.
For example:

<docs-code language="typescript">

export const environment = {
  production: true
};

</docs-code>

The `build` command uses this as the build target when no environment is specified.
You can add further variables, either as additional properties on the environment object, or as separate objects.
For example, the following adds a default for a variable to the default environment:

<docs-code language="typescript">

export const environment = {
  production: true,
  apiUrl: 'http://my-prod-url'
};

</docs-code>

You can add target-specific configuration files, such as `environment.development.ts`.
The following content sets default values for the development build target:

<docs-code language="typescript">

export const environment = {
  production: false,
  apiUrl: 'http://my-dev-url'
};

</docs-code>

## Using environment-specific variables in your app

To use the environment configurations you have defined, your components must import the original environments file:

<docs-code language="typescript">

import { environment } from './environments/environment';

</docs-code>

This ensures that the build and serve commands can find the configurations for specific build targets.

The following code in the component file (`app.component.ts`) uses an environment variable defined in the configuration files.

<docs-code language="typescript">

import { environment } from './../environments/environment';

// Fetches from `http://my-prod-url` in production, `http://my-dev-url` in development.
fetch(environment.apiUrl);

</docs-code>

The main CLI configuration file, `angular.json`, contains a `fileReplacements` section in the configuration for each build target, which lets you replace any file in the TypeScript program with a target-specific version of that file.
This is useful for including target-specific code or variables in a build that targets a specific environment, such as production or staging.

By default no files are replaced, however `ng generate environments` sets up this configuration automatically.
You can change or add file replacements for specific build targets by editing the `angular.json` configuration directly.

<docs-code language="json">

  "configurations": {
    "development": {
      "fileReplacements": [
          {
            "replace": "src/environments/environment.ts",
            "with": "src/environments/environment.development.ts"
          }
        ],
        …

</docs-code>

This means that when you build your development configuration with `ng build --configuration development`, the `src/environments/environment.ts` file is replaced with the target-specific version of the file, `src/environments/environment.development.ts`.

To add a staging environment, create a copy of `src/environments/environment.ts` called `src/environments/environment.staging.ts`, then add a `staging` configuration to `angular.json`:

<docs-code language="json">

  "configurations": {
    "development": { … },
    "production": { … },
    "staging": {
      "fileReplacements": [
        {
          "replace": "src/environments/environment.ts",
          "with": "src/environments/environment.staging.ts"
        }
      ]
    }
  }

</docs-code>

You can add more configuration options to this target environment as well.
Any option that your build supports can be overridden in a build target configuration.

To build using the staging configuration, run the following command:

<docs-code language="shell">

ng build --configuration staging

</docs-code>

By default, the `build` target includes `production` and `development` configurations and `ng serve` uses the development build of the application.
You can also configure `ng serve` to use the targeted build configuration if you set the `buildTarget` option:

<docs-code language="json">

  "serve": {
    "builder": "@angular-devkit/build-angular:dev-server",
    "options": { … },
    "configurations": {
      "development": {
        // Use the `development` configuration of the `build` target.
        "buildTarget": "my-app:build:development"
      },
      "production": {
        // Use the `production` configuration of the `build` target.
        "buildTarget": "my-app:build:production"
      }
    },
    "defaultConfiguration": "development"
  },

</docs-code>

The `defaultConfiguration` option specifies which configuration is used by default.
When `defaultConfiguration` is not set, `options` are used directly without modification.
