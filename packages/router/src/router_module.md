* TODO:
* `export class RouterModule {}`
  * | application's view1 -- navigation to -- application's view2 
    * adds 
      * directives &
      * providers
  * Angular `Router` service
    * allows,
      * specifying declaratively
        * application states
        * manage state transitions
  * uses
    * (allowed) MULTIPLE times /
      * 1 / EACH lazy-loaded bundle
      * ONLY 1! `Router` service can be active
  * | importing this module,
    * ways to register routes
      * `.forRoot()`
        * creates an `NgModule` / contains
          * ALL directives,
          * the given routes,
          * `Router` service itself
      * `forChild()`
        * creates an `NgModule` / contains
          * ALL directives
          * the given routes
  * `.forRoot(): ModuleWithProviders<RouterModule> {}`
    * OPTIONALLY,
      * sets up an application listener -- to perform an -- initial navigation
    * uses
      * if you register the NgModule | root, -> import as 

        ```
        @NgModule({
          imports: [RouterModule.forRoot(ROUTES)]
        })
        class MyNgModule {}
        ```
  * TODO: