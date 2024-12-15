* goal
  * describes an injection context
  * how to use the DI system

# Injection context

* == runtime context
  * 👀injector is available | this context 👀
    * ⚠️== requirements to work injectors 
      * code is executed | injection context ⚠️ 
    * -> you can use [`inject`](api/core/inject) function -- to -- inject instances
  * uses
    * by DI system 
  * use cases / injection context is available
    * | construction (via the `constructor`) of a class / -- instantiated by the -- DI system (`@Injectable` or `@Component`)
      * | such classes' initializer for fields 
    * | function / specified in `Provider.useFactory` or `@Injectable(useFactory)`
    * | `InjectionToken.factory`
    * | stack frame / runs | injection context

## Class constructors

* TODO:
Every time the DI system instantiates a class, it does so in an injection context. This is handled by the framework itself. The constructor of the class is executed in that runtime context, which also allows injection of a token using the [`inject`](api/core/inject) function.

<docs-code language="typescript" highlight="[[3],[6]]">
class MyComponent  {
  private service1: Service1;
  private service2: Service2 = inject(Service2); // In context

  constructor() {
    this.service1 = inject(Service1) // In context
  }
}
</docs-code>

## Stack frame in context

Some APIs are designed to be run in an injection context. This is the case, for example, with router guards. This allows the use of [`inject`](api/core/inject) within the guard function to access a service.

Here is an example for `CanActivateFn`

<docs-code language="typescript" highlight="[3]">
const canActivateTeam: CanActivateFn =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      return inject(PermissionsService).canActivate(inject(UserToken), route.params.id);
    };
</docs-code>

## Run within an injection context

When you want to run a given function in an injection context without already being in one, you can do so with `runInInjectionContext`.
This requires access to a given injector, like the `EnvironmentInjector`, for example:

<docs-code header="src/app/heroes/hero.service.ts" language="typescript"
           highlight="[9]">
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private environmentInjector = inject(EnvironmentInjector);

  someMethod() {
    runInInjectionContext(this.environmentInjector, () => {
      inject(SomeService); // Do what you need with the injected service
    });
  }
}
</docs-code>

Note that `inject` will return an instance only if the injector can resolve the required token.

## Asserts the context

Angular provides the `assertInInjectionContext` helper function to assert that the current context is an injection context.

## Using DI outside of a context

Calling [`inject`](api/core/inject) or calling `assertInInjectionContext` outside of an injection context will throw [error NG0203](/errors/NG0203).
