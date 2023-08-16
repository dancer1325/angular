Example of [Component styles](https://angular.io/guide/component-styles)

# How to run locally?
* `cd /aio`
* `yarn build`
  * Problems:
    * Problem1: "The engine "node" is incompatible with this module. Expected version ">=16.14.0". Got "X.Y.Z""
      * Solution: `nvm use v16.20.1`
* `yarn example-playground component-styles --local`
  * Generated folder is created
* `cd ...aio/content/example-playground/component-styles`
* `ng serve`
* Open in your browser "localhost:4200"

# How was it created?
* It had got a basic skeleton with the main component, but it could have been generated via 
  * `npm init @angular component-styles` or
  * `ng new component-styles`
* All the components have been created manually apparently, since they don't follow the common structure

# Notes
* Special selectors for the components -- all come from [Shadow DOM](https://www.w3.org/TR/css-scoping-1/#selectors) --
  * `:host`
    * Pseudoclass, matching the host element in a Shadow Tree
      * "host element" refers to the component linked to that .css, not to the root
  * `:host(ElementToLookFor)`
    * Function Pseudoclass, matching the host's element (specific one, not the whole host element) in a Shadow Tree
  * `:host-context(ElementToLookFor)`
    * Function Pseudoclass, matching the host's element or ancestor host's element(specific one, not the whole host element) in a Shadow Tree
    * Just the host element or descendants will be affected, not the ancestors
  * `:host ::ng-deep HTMLElement { ... }`
    * `::ng-deep`
      * matching against all the host’s element or descendant’s element
    * make the style available for all the host's descendants 
* Ways to load component styles
  * styles / styleUrls
  * template inline styles
    * `template: <style> ..... </style> RestOfHTMLTemplate`
  * template link tags
    * `template: <link rel="stylesheet" href="PathToTheStyleSheet"> RestOfHTMLTemplate`
  * CSS `@import`
  * external and global style files, configured in the angular.json
  * non- `.css` and use
    * sass or
    * less
