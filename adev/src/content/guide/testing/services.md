# Testing services

## Testing WITHOUT Angular testing utilities 

* _Example:_ [here](../../examples/testing/services/src/app/value.service.spec.ts)

## Services / dependencies -- WITHOUT -- Angular testing functionalities

* ways
  * real service
    * 👀if there are SEVERAL services to inject -> NOT recommended 👀
  * fake service
  * create a [spy](https://jasmine.github.io/tutorials/your_first_suite#section-Spies)
    * spy == recommended way to mock a service
* recommendations
  * if there are SEVERAL 
* _Example:_ [`MasterService`](../../examples/testing/services/src/app/master.service.spec.ts)

* recommendations
  * 👀use Angular's `TestBed` rather than this approach 👀 
    * Reason: 🧠ALWAYS inject services | application classes -- via -- Angular dependency injection 🧠

## Testing services -- via -- `TestBed`

* Angular creates -- via [dependency injection (DI)](guide/di), -- services
* TODO:
When a service has a dependent service, DI finds or creates that dependent service.
And if that dependent service has its own dependencies, DI finds-or-creates them as well.

As a service *consumer*, you don't worry about any of this.
You don't worry about the order of constructor arguments or how they're created.

As a service *tester*, you must at least think about the first level of service dependencies but you *can* let Angular DI do the service creation and
deal with constructor argument order when you use the `TestBed` testing utility to provide and create services.

## Angular `TestBed`

* 👀MOST important Angular testing utilities 👀
The `TestBed` creates a dynamically-constructed Angular *test* module that emulates an Angular [@NgModule](guide/ngmodules).

The `TestBed.configureTestingModule()` method takes a metadata object that can have most of the properties of an [@NgModule](guide/ngmodules).

To test a service, you set the `providers` metadata property with an array of the services that you'll test or mock.

<docs-code header="app/demo/demo.testbed.spec.ts (provide ValueService in beforeEach)" path="adev/src/content/examples/testing/src/app/demo/demo.testbed.spec.ts" visibleRegion="value-service-before-each"/>

Then inject it inside a test by calling `TestBed.inject()` with the service class as the argument.

HELPFUL: `TestBed.get()` was deprecated as of Angular version 9.
To help minimize breaking changes, Angular introduces a new function called `TestBed.inject()`, which you should use instead.

<docs-code path="adev/src/content/examples/testing/src/app/demo/demo.testbed.spec.ts" visibleRegion="value-service-inject-it"/>

Or inside the `beforeEach()` if you prefer to inject the service as part of your setup.

<docs-code path="adev/src/content/examples/testing/src/app/demo/demo.testbed.spec.ts" visibleRegion="value-service-inject-before-each"> </docs-code>

When testing a service with a dependency, provide the mock in the `providers` array.

In the following example, the mock is a spy object.

<docs-code path="adev/src/content/examples/testing/src/app/demo/demo.testbed.spec.ts" visibleRegion="master-service-before-each"/>

The test consumes that spy in the same way it did earlier.

<docs-code path="adev/src/content/examples/testing/src/app/demo/demo.testbed.spec.ts" visibleRegion="master-service-it"/>

## Testing without `beforeEach()`

Most test suites in this guide call `beforeEach()` to set the preconditions for each `it()` test and rely on the `TestBed` to create classes and inject services.

There's another school of testing that never calls `beforeEach()` and prefers to create classes explicitly rather than use the `TestBed`.

Here's how you might rewrite one of the `MasterService` tests in that style.

Begin by putting re-usable, preparatory code in a *setup* function instead of `beforeEach()`.

<docs-code header="app/demo/demo.spec.ts (setup)" path="adev/src/content/examples/testing/src/app/demo/demo.spec.ts" visibleRegion="no-before-each-setup"/>

The `setup()` function returns an object literal with the variables, such as `masterService`, that a test might reference.
You don't define *semi-global* variables \(for example, `let masterService: MasterService`\) in the body of the `describe()`.

Then each test invokes `setup()` in its first line, before continuing with steps that manipulate the test subject and assert expectations.

<docs-code path="adev/src/content/examples/testing/src/app/demo/demo.spec.ts" visibleRegion="no-before-each-test"/>

Notice how the test uses [*destructuring assignment*](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to extract the setup variables that it needs.

<docs-code path="adev/src/content/examples/testing/src/app/demo/demo.spec.ts" visibleRegion="no-before-each-setup-call"/>

Many developers feel this approach is cleaner and more explicit than the traditional `beforeEach()` style.

Although this testing guide follows the traditional style and the default [CLI schematics](https://github.com/angular/angular-cli) generate test files with `beforeEach()` and `TestBed`, 
feel free to adopt *this alternative approach* in your own projects.

## Testing HTTP services

Data services that make HTTP calls to remote servers typically inject and delegate to the Angular [`HttpClient`](guide/http/testing) service for XHR calls.

You can test a data service with an injected `HttpClient` spy as you would test any service with a dependency.

<docs-code header="app/model/hero.service.spec.ts (tests with spies)" path="adev/src/content/examples/testing/src/app/model/hero.service.spec.ts" visibleRegion="test-with-spies"/>

IMPORTANT: The `HeroService` methods return `Observables`.
You must *subscribe* to an observable to \(a\) cause it to execute and \(b\) assert that the method succeeds or fails.

The `subscribe()` method takes a success \(`next`\) and fail \(`error`\) callback.
Make sure you provide *both* callbacks so that you capture errors.
Neglecting to do so produces an asynchronous uncaught observable error that the test runner will likely attribute to a completely different test.

## `HttpClientTestingModule`

Extended interactions between a data service and the `HttpClient` can be complex and difficult to mock with spies.

The `HttpClientTestingModule` can make these testing scenarios more manageable.

While the *code sample* accompanying this guide demonstrates `HttpClientTestingModule`, this page defers to the [Http guide](guide/http/testing), which covers testing with the `HttpClientTestingModule` in detail.
