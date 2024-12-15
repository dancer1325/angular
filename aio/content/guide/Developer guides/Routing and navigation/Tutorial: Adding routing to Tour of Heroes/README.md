# Goal
* Basic router configuration with
  * child routes
  * route parameters
  * lazy load NgModules
  * guard routes
    * `canActivate`
      * check route access
    * `canActivateChild`
      * check child route access
    * `canDeactivate`
      * ask permission -- to -> discard unsaved changes
    * `resolve`
      * pre-fetch route data
    * `canMatch`
      * before loading feature module assets -> check
  * preload data

# Structure
* Multi-page application
* Application features organized into modules

# Notes
* Check '../examples/router-tutorial-v2'