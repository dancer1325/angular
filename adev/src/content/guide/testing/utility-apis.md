# Testing Utility APIs

* goal
  * useful Angular testing utilities
    * [`TestBed`](#testbed)
    * [`ComponentFixture`](#componentfixture)
    * functions / control the test environment

* stand-alone functions

| Function                     | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|:-----------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `waitForAsync`               | allows <br/> &nbsp;&nbsp; \| async test zone, <br/> &nbsp;&nbsp;&nbsp;&nbsp; runs the test \(`it`\)'s body OR <br/> &nbsp;&nbsp;&nbsp;&nbsp; runs the setup \(`beforeEach`\)'s body <br/> see [waitForAsync](components-scenarios.md)                                                                                                                                                                                                                                                                                                                                                             |
| `fakeAsync`                  | allows <br/> &nbsp;&nbsp; \| fakeAsync test zone, <br/> &nbsp;&nbsp;&nbsp;&nbsp; runs the test \(`it`\)'s body / linear control flow coding style <br/> see [fakeAsync](components-scenarios.md)                                                                                                                                                                                                                                                                                                                                                                                                  |
| `tick`                       | Simulates the passage of time and the completion of pending asynchronous activities by flushing both *timer* and *micro-task* queues within the *fakeAsync test zone*.  The curious, dedicated reader might enjoy this lengthy blog post, ["*Tasks, microtasks, queues and schedules*"](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules).  Accepts an optional argument that moves the virtual clock forward by the specified number of milliseconds, clearing asynchronous activities scheduled within that timeframe. See [tick](guide/testing/components-scenarios#tick). |
| `inject`                     | injects >= 1 services -- from the -- CURRENT `TestBed` injector \| test function <br/> &nbsp;&nbsp; ❌service can NOT be provided -- by the -- component itself❌ <br/> see [debugElement.injector](components-scenarios.md)                                                                                                                                                                                                                                                                                                                                                                        |
| `discardPeriodicTasks`       | When a `fakeAsync()` test ends with pending timer event *tasks* \(queued `setTimeOut` and `setInterval` callbacks\), the test fails with a clear error message. <br /> In general, a test should end with no queued tasks. When pending timer tasks are expected, call `discardPeriodicTasks` to flush the *task* queue and avoid the error.                                                                                                                                                                                                                                                      |
| `flushMicrotasks`            | When a `fakeAsync()` test ends with pending *micro-tasks* such as unresolved promises, the test fails with a clear error message. <br /> In general, a test should wait for micro-tasks to finish. When pending microtasks are expected, call `flushMicrotasks` to flush the  *micro-task* queue and avoid the error.                                                                                                                                                                                                                                                                             |
| `ComponentFixtureAutoDetect` | A provider token for a service that turns on [automatic change detection](guide/testing/components-scenarios#automatic-change-detection).                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `getTestBed`                 | Gets the current instance of the `TestBed`. Usually unnecessary because the static class methods of the `TestBed` class are typically sufficient. The `TestBed` instance exposes a few rarely used members that are not available as static methods.                                                                                                                                                                                                                                                                                                                                              |

## `TestBed`

* == class /
  * 👀MAIN Angular testing utilities👀
  * 's API 
    * large
    * static
    * allows
      * update a *global* `TestBed`'s instance
      * reference a *global* `TestBed`'s instance

* `.configureTestingModule(moduleDef: TestModuleMetadata): TestBed;`
  * 's input
    * `moduleDef: TestModuleMetadata`
      * == 👀subset of `@NgModule` metadata properties👀

* `.overrideSomething(something: override: MetadataOverride<Something>): TestBed;`
  * ALLOWED `Something`
    * module
    * component
    * directive
    * pipe
    * template
    * provider

* `export function getTestBed(): TestBed {}`
  * 's return
    * CURRENT runtime `TestBed` instance

* recommendations
  * 👀call `TestBed`'s methods | `beforeEach()`👀
    * Reason: 🧠ensure a fresh start BEFORE EACH individual test🧠

| `TestBed`'s methods MOST important                       | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|:---------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `configureTestingModule`                                 | testing shims \(`karma-test-shim`, `browser-test-shim`\) establish the <br/> &nbsp;&nbsp; [initial test environment](guide/testing) <br/> &nbsp;&nbsp; default testing module <br/> &nbsp;&nbsp;&nbsp;&nbsp; is configured -- with -- <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; basic declaratives <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; some Angular service substitutes <br /> uses <br/> &nbsp;&nbsp; refine the testing module configuration / particular set of tests <br/> &nbsp;&nbsp;&nbsp;&nbsp; _Example:_ modify imports, declarations \(of components, directives, and pipes\), or providers |
| `compileComponents`                                      | AFTER configuring the testing module, <br/> &nbsp;&nbsp; compile the testing module asynchronously <br/> &nbsp;&nbsp;&nbsp;&nbsp; == \| current spec's duration, `TestBed` configuration is frozen <br/> uses<br/> &nbsp;&nbsp; 👀if SOME testing module's components have a `templateUrl` or `styleUrls`👀 <br/> &nbsp;&nbsp;&nbsp;&nbsp; Reason:🧠fetching component template & style files is asynchronous 🧠<br/> see [compileComponents](components-scenarios.md#calling-compilecomponents)                                                                                                               |
| `createComponent<T>`                                     | create a component's instance / type `T` -- based on the -- CURRENT `TestBed` configuration <br/> -> \| CURRENT spec's duration, `TestBed` configuration is frozen                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `overrideModule`                                         | Replace metadata for the given `NgModule`. Recall that modules can import other modules. The `overrideModule` method can reach deeply into the current testing module to modify one of these inner modules.                                                                                                                                                                                                                                                                                                                                                                                                    |
| `overrideComponent`                                      | Replace metadata for the given component class, which could be nested deeply within an inner module.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `overrideDirective`                                      | Replace metadata for the given directive class, which could be nested deeply within an inner module.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `overridePipe`                                           | Replace metadata for the given pipe class, which could be nested deeply within an inner module.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|
 `inject<T>(token: ProviderToken<T>, notFoundValue?,...)` | 👀retrieve a service -- from the -- CURRENT `TestBed` injector👀 <br/> &nbsp;&nbsp; ❌if it can NOT be provided -> throws an error ❌ <br /> `notFoundValue?` <br/> &nbsp;&nbsp; == returned object \| Angular can NOT find the provider <br/> -> \| CURRENT spec's duration, `TestBed` configuration is frozen <br/> \| Angular v9+, <br/> &nbsp;&nbsp; replacement of `get()`                                                                                                                                                                                                                                  |
|
 `initTestEnvironment`                                    | Initialize the testing environment for the entire test run. <br /> The testing shims \(`karma-test-shim`, `browser-test-shim`\) call it for you so there is rarely a reason for you to call it yourself. <br /> Call this method *exactly once*. To change this default in the middle of a test run, call `resetTestEnvironment` first. <br /> Specify the Angular compiler factory, a `PlatformRef`, and a default Angular testing module. Alternatives for non-browser platforms are available in the general form `@angular/platform-<platform_name>/testing/<platform_name>`.                              |
| `resetTestEnvironment`                                   | Reset the initial test environment, including the default testing module.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

## `ComponentFixture`

* `createComponent<T>(component: Type<T>): ComponentFixture<T> {}`
  * 's return
    * ComponentFixture<T>

* `ComponentFixture`'s properties & methods
  * provide
    * access -- to the -- 
      * component
      * component's DOM representation
      * Angular environment

### `ComponentFixture` properties

| Properties          | Details                                                                                                                                                                                                                                                                                            |
|:---                 |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `componentInstance` | component's instance / created -- by -- `TestBed.createComponent`                                                                                                                                                                                                                                  |
| `debugElement`      | The `DebugElement` associated with the root element of the component. <br /> The `debugElement` provides insight into the component and its DOM element during test and debugging. It's a critical property for testers. The most interesting members are covered [below](#debug-element-details). |
| `nativeElement`     | The native DOM element at the root of the component.                                                                                                                                                                                                                                               |
| `changeDetectorRef` | The `ChangeDetectorRef` for the component. <br /> The `ChangeDetectorRef` is most valuable when testing a component that has the `ChangeDetectionStrategy.OnPush` method or the component's change detection is under your programmatic control.                                                   |

### `ComponentFixture` methods

* -> 💡Angular perform tasks | component tree💡

* uses
  * trigger Angular behavior / simulate user action

| Methods             | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:---                 |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `detectChanges`     | 👀trigger a change detection cycle / component👀 <br /> uses<br/> &nbsp;&nbsp; initialize the component \(== `ngOnInit`\) <br/> &nbsp;&nbsp; AFTER test code / change the component's data bound property values <br/> recommendations <br/> &nbsp;&nbsp; `checkNoChanges` AFTERWARDS, OR use ALWAYS `detectChanges(false)` <br/> &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Reason: 🧠confirm there are NO circular updates🧠                                                                                                                              |
| `autoDetectChanges` | Set this to `true` when you want the fixture to detect changes automatically. <br /> When autodetect is `true`, the test fixture calls `detectChanges` immediately after creating the component. Then it listens for pertinent zone events and calls `detectChanges` accordingly. When your test code modifies component property values directly, you probably still have to call `fixture.detectChanges` to trigger data binding updates. <br /> The default is `false`. Testers who prefer fine control over test behavior tend to keep it `false`. |
| `checkNoChanges`    | Do a change detection run to make sure there are no pending changes. Throws an exceptions if there are.                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `isStable`          | If the fixture is currently *stable*, returns `true`. If there are async tasks that have not completed, returns `false`.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `whenStable`        | Returns a promise that resolves when the fixture is stable. <br /> To resume testing after completion of asynchronous activity or asynchronous change detection, hook that promise. See [whenStable](guide/testing/components-scenarios#when-stable).                                                                                                                                                                                                                                                                                                  |
| `destroy`           | Trigger component destruction.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### `DebugElement`

The `DebugElement` provides crucial insights into the component's DOM representation.

From the test root component's `DebugElement` returned by `fixture.debugElement`, you can walk \(and query\) the fixture's entire element and component subtrees.

Here are the most useful `DebugElement` members for testers, in approximate order of utility:

| Members               | Details |
|:---                   |:---     |
| `nativeElement`       | The corresponding DOM element in the browser                                                                                                                                                                                                                                                                        |
| `query`               | Calling `query(predicate: Predicate<DebugElement>)` returns the first `DebugElement` that matches the [predicate](#query-predicate) at any depth in the subtree.                                                                                                                                                                                                                                        |
| `queryAll`            | Calling `queryAll(predicate: Predicate<DebugElement>)` returns all `DebugElements` that matches the [predicate](#query-predicate) at any depth in subtree.                                                                                                                                                                                                                                              |
| `injector`            | The host dependency injector. For example, the root element's component instance injector.                                                                                                                                                                                                                                                                                                              |
| `componentInstance`   | The element's own component instance, if it has one.                                                                                                                                                                                                                                                                                                                                                    |
| `context`             | An object that provides parent context for this element. Often an ancestor component instance that governs this element. <br /> When an element is repeated within `*ngFor`, the context is an `NgForOf` whose `$implicit` property is the value of the row instance value. For example, the `hero` in `*ngFor="let hero of heroes"`.                                                                   |
| `children`            | The immediate `DebugElement` children. Walk the tree by descending through `children`.  `DebugElement` also has `childNodes`, a list of `DebugNode` objects. `DebugElement` derives from `DebugNode` objects and there are often more nodes than elements. Testers can usually ignore plain nodes.                                                                  |
| `parent`              | The `DebugElement` parent. Null if this is the root element.                                                                                                                                                                                                                                                                                                                                            |
| `name`                | The element tag name, if it is an element.                                                                                                                                                                                                                                                                                                                                                              |
| `triggerEventHandler` | Triggers the event by its name if there is a corresponding listener in the element's `listeners` collection. The second parameter is the *event object* expected by the handler. See [triggerEventHandler](guide/testing/components-scenarios#trigger-event-handler). <br /> If the event lacks a listener or there's some other problem, consider calling `nativeElement.dispatchEvent(eventObject)`. |
| `listeners`           | The callbacks attached to the component's `@Output` properties and/or the element's event properties.                                                                                                                                                                                                                                                                                                   |
| `providerTokens`      | This component's injector lookup tokens. Includes the component itself plus the tokens that the component lists in its `providers` metadata.                                                                                                                                                                                                                                                            |
| `source`              | Where to find this element in the source component template.                                                                                                                                                                                                                                                                                                                                            |
| `references`          | Dictionary of objects associated with template local variables \(for example, `#foo`\), keyed by the local variable name.                                                                                                                                                                                                                                                                                        |

The `DebugElement.query(predicate)` and `DebugElement.queryAll(predicate)` methods take a predicate that filters the source element's subtree for matching `DebugElement`.

The predicate is any method that takes a `DebugElement` and returns a *truthy* value.
The following example finds all `DebugElements` with a reference to a template local variable named "content":

<docs-code header="app/demo/demo.testbed.spec.ts" path="adev/src/content/examples/testing/src/app/demo/demo.testbed.spec.ts" visibleRegion="custom-predicate"/>

The Angular `By` class has three static methods for common predicates:

| Static method             | Details |
|:---                       |:---     |
| `By.all`                  | Return all elements                                                        |
| `By.css(selector)`        | Return elements with matching CSS selectors                                |
| `By.directive(directive)` | Return elements that Angular matched to an instance of the directive class |

<docs-code header="app/hero/hero-list.component.spec.ts" path="adev/src/content/examples/testing/src/app/hero/hero-list.component.spec.ts" visibleRegion="by"/>
