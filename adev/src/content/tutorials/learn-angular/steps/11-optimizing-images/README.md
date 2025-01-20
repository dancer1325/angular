# Optimizing images

* goal  
  * how to use `NgOptimizedImage` -- to ensure -- your images are loaded efficiently

* context
  * images -- can cause -- application performance problems + low [Core Web Vitals](https://web.dev/explore/learn-core-web-vitals) scores
    * Reason: 🧠they are a big part of applications 🧠

* `NgOptimizedImage` 
  * == directive / 
    * optimizes image
    * handled MOST it -- by -- Angular
    * ALLOWED |
      * static image sources
      * dynamic image sources
        * -- via -- property binding
    * requirements
      * set `width` and `height`
        * if you do NOT want to specify a static value -> use `fill` attribute
          * requirements
            * its parent element -- must be styled with -- `position: "relative"`, `position: "fixed"`, or `position: "absolute"` 
        * Reason: 🧠 prevent [layout shift](https://github.com/dancer1325/web.dev/tree/main/src/site/content/en/metrics/cls) 🧠
    * [image loader](../../../../guide/image-optimization#configuring-an-image-loader-for-ngoptimizedimage)
      * allows
        * formatting (short or relative) URLs for your images
        * using the FULL capabilities of `NgOptimizedImage`
      * | [popular CDNs](../../../../guide/image-optimization#configuring-an-image-loader-for-ngoptimizedimage)
  * steps
    * add it to `imports`
    * replace `src` -- by -- `ngSrc` or `[ngSrc]`
    * prioritize an image / might be ["LCP element"](https://github.com/dancer1325/web.dev/tree/main/src/site/content/en/blog/optimize-lcp)
      * -- via -- `priority`

* see [`NgOptimizedImage`](../../../../guide/image-optimization)

## How to run locally?

* ways
  * see [here](/adev/README.md#how-to-generate-a-specific-example-project-locally)
    * Solution: TODO:
  * create an angular project -- `final` --
    * Problems:
      * Problem1: "Error: This command is not available when running the Angular CLI inside a workspace." The "/adev/angular.json"
    * Attempts:
      * Attempt1: `npm init @angular final`
      * Attempt2: `ng new final`
    * Solution: 
      * `mkdir final`
      * `ng new 11-optimizing-images --directory=adev/src/content/tutorials/learn-angular/steps/11-optimizing-images/final`
  * use [existing `common/` Angular skeleton project](../../common)
    * | "common/", `yarn build`
      * Problems:
        * Problem1: "Cannot find tsconfig file "tsconfig.app.json"
          * Solution: Add reference to ["adev/tsconfig"](/adev/tsconfig.app.json)
        * Problem2: Files from ALL files are taking in account "../../../../app/core/layout/secondary-navigation/secondary-navigation.component.scss"
          * Solution: Create dedicated "tsconfig.json"
        * Problem3: " Cannot find module '@angular/core'"
          * Attempt1: add "tsconfig.json" | this path
          * Attempt2: add "tsconfig.json" | "common"
          * Solution: TODO:
  * [waiting for reply of the question](https://discord.com/channels/748677963142135818/762717176142495814/1330602931694866483)

