Example of [Lifecycle hooks](https://angular.io/guide/lifecycle-hooks#lifecycle-example-set)

# How to run locally?
* `cd /aio`
* `yarn build`
  * Problems:
    * Problem1: "The engine "node" is incompatible with this module. Expected version ">=16.14.0". Got "X.Y.Z""
      * Solution: `nvm use v16.20.1`
* `yarn example-playground lifecycle-hooks --local`
  * Generated folder is created
* `cd ...aio/content/example-playground/lifecycle-hooks`
* `ng serve`
* Open in your browser "localhost:4200"

# How was it created?
* It had got a basic skeleton with the main component, but it could have been generated via 
  * `npm init @angular lifecycle-hooks` or
  * `ng new lifecycle-hooks`
* All the components have been created manually apparently, since they don't follow the common structure

# Notes
* PeekABooParentComponent & PeekABooComponent
  * implement every lifecycle hook
* SpyParentComponent
  * implement a custom directive -- SpyDirective --
* OnChangesParentComponent & OnChangesComponent
  * analyzes ngOnChanges()
* DoCheckParentComponent & DoCheckComponent
  * analyzes ngDoCheck()
    * Pretty expensive hook === Called frequently
* AfterViewParentComponent & AfterViewComponent & ChildViewComponent
  * analyzes AfterViewChecked and AfterViewInit
    * concern to ViewChildren
* AfterContentParentComponent & AfterContentComponent
  * analyzes AfterContentInit and AfterContentChecked
    * concern to ContentChildren
* CounterParentComponent & MyCounterComponent
  * analyzes OnChanges & OnInit & OnDestroy
* CounterDestroyRefComponent
  * analyzes DestroyRef
  * `ng generate component counterDestroyRef --skip-import`
    * `--skip-import` because these examples are built in a different common Angular workspace
* AfterNextRenderComponent
  * analyzes afterNextRender
    * Problems:
      * Problem1: `afterNextRender` not found
  * `ng generate component afterNextRenderComponent --skip-import`
    * `--skip-import` because these examples are built in a different common Angular workspace
* AfterRenderComponent
  * analyzes afterRender
    * Problems:
      * Problem1: `afterRender` not found 
  * `ng generate component afterRenderComponent --skip-import`
    * `--skip-import` because these examples are built in a different common Angular workspace
