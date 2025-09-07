# Testing services

* Angular creates -- via [dependency injection (DI)](../di), -- services

* _Example:_ [here](../../examples/testing/services/src/app/value.service.spec.ts)

## Services / have dependencies
### WITHOUT Angular testing functionalities

* ways
  * real service
    * 👀if there are SEVERAL services to inject -> NOT recommended 👀
  * fake service
  * create a [spy](https://jasmine.github.io/tutorials/your_first_suite#section-Spies)
    * spy == recommended way to mock a service

* _Example:_ [here](../../examples/testing/services/src/app/master.service.spec.ts)

### -- via -- `TestBed`

* recommended one
  * Reasons: 🧠
    * use Angular dependency injection
      * -> ALL is managed by it
    * if service has dependencies -> DI finds-or-creates them ALSO 🧠
* [MORE](#testbed)
* _Example:_ [here](../../examples/testing/services/src/app/master.service.testbed.spec.ts)

## `TestBed`

* 👀MOST important Angular testing utilities 👀

* 💡creates a dynamically-constructed Angular *test* module💡 /
  * emulates an Angular [@NgModule](../ngmodules)

* `.configureTestingModule(moduleDef: TestModuleMetadata): TestBed;`
  * method
  * 's input
    * `moduleDef: TestModuleMetadata`
      * 👀MOST of [@NgModule](../ngmodules)'s properties👀
      * `.providers?: any[];`
        * == 💡services / you'll test & mock💡
  * 👀place | `beforeEach()`👀
  * _Example:_ [here](../../examples/testing/services/src/app/master.service.testbed.spec.ts)

* `.inject(token: ProviderToken<T>, notFoundValue?,...)`
  * 's input
    * `token: ProviderToken<T>`
      * pass your Angular service (either real OR spy)
  * 👀place | 
    * `beforeEach()` OR
    * EACH `it()`👀

## Testing WITHOUT `beforeEach()`

* uses
  * set the preconditions / EACH `it()`
    * _Example:_ set `TestBed` / create classes & inject services

* extract re-usable code | `setup()`

* _Example:_ [here](../../examples/testing/services/src/app/master.service.spec.ts)

## Testing HTTP services

* [`HttpClient`](../http/testing)
  * == Angular service /
    * enable make XHR calls
  * uses
    * data services / make HTTP calls -- to -- remote servers 

* TODO: 
You can test a data service with an injected `HttpClient` spy as you would test any service
with a dependency.

<docs-code header="app/model/hero.service.spec.ts (tests with spies)" path="adev/src/content/examples/testing/src/app/model/hero.service.spec.ts" visibleRegion="test-with-spies"/>

IMPORTANT: The `HeroService` methods return `Observables`.
You must *subscribe* to an observable to \(a\) cause it to execute and \(b\) assert that 
the method succeeds or fails.

The `subscribe()` method takes a success \(`next`\) and fail \(`error`\) callback.
Make sure you provide *both* callbacks so that you capture errors.
Neglecting to do so produces an asynchronous uncaught observable error that 
the test runner will likely attribute to a completely different test.

## `HttpClientTestingModule`

Extended interactions between a data service and the `HttpClient` can be complex and difficult to mock with spies.

The `HttpClientTestingModule` can make these testing scenarios more manageable.

While the *code sample* accompanying this guide demonstrates `HttpClientTestingModule`, this page defers to the [Http guide](guide/http/testing), which covers testing with the `HttpClientTestingModule` in detail.
