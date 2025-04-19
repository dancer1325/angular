# Final

* goal
  * create a builder / file (| source file path) is copied | NEW location (destination file path)
    * user options
      * source file paths
      * destination file paths

## How has it been created?
* `mkdir copyBuilder`
* `npm init -y`
* `npm install @angular-devkit/architect`
* `npm install --save-dev @types/jasmine @types/node jasmine jasmine-node ts-node typescript`
* create
  * [tsconfig.json](tsconfig.json)
  * [builders.json](builders.json)
  * [src/my-builder.ts](src/my-builder.ts) & [src/my-builder.spec.ts](src/my-builder.spec.ts)

## How to run?
* `ng build`
* | "../final"
  * | "package.json",
    * add "copybuilder" -- as -- devDependency
  * | "angular.json",
    * add architect
  * `ng run final:copy`
    * Problems:
      * Problem1: "An unhandled exception occurred: Cannot find module '*/angular/adev/src/content/examples/cli-builder/copyBuilder/src'"
        * Attempt1: `npm ci && npm run build`
        * Solution: ⚠️"my-builder.ts" -- MUST be renamed to -- "index.ts"⚠️ 
  * check "package-copy.json" is created

## Notes
* copy logic -- based on -- [NodeJS `copyFile()`](https://nodejs.org/api/fs.html#fs_fspromises_copyfile_src_dest_mode)