* goal
  * describe how to
    * configure dependencies -- via -- the `@Component(providers=)` & `@NgModule(providers=)`
    * use `InjectionToken` -- to -- provide & inject values | DI
      * use cases
        * use a value / != classes 

# Configuring dependency providers

* 👀values (`boolean`, `string`, `Date`) & objects -- can be used as -- dependencies 👀
  * Reason: 🧠thanks to Angular's APIs / are dependency configuration flexible 🧠

## Specifying a provider token

* 👀if you specify service class -- as the -- provider token -> injector instantiates that class -- via -- `new` operator 👀
* ways to configure
  * `provide` property
    * holds the token / == key -- for consuming the -- dependency value
  * provider definition object / tells the injector -- how to -- create the dependency value
    * `useClass`
      * inject the dependency, -- via a -- provided class 
    * `useExisting`
      * allows you to 
        * alias a token
        * -- reference -- ANY existing one
    * `useFactory`
      * allows you to 
        * define a function / constructs a dependency
    * `useValue`
      * == static value / -- should be used as a -- dependency

### Class providers -- `useClass` --

* lets you,
  * 💡create & return a NEW instance of the specified class 💡

* use case
  * 👀substitute an ALTERNATIVE implementation -- for a -- common or default class 👀
    * _Example:_ ALTERNATIVE implementation can
      * implement a DIFFERENT strategy,
      * extend the default class, or
      * emulate the behavior -- of the -- real class | test case

### Alias providers -- `useExisting` --

* lets you
  * map 1 token -- to -- another token
    * == 1@ token == alias -- for the -- service / associated with the 2@ token
    * -> 2 ways -- to access the -- SAME service object
      * == REUSE EXISTING token

### Factory providers -- `useFactory` --

* lets you
  * create a dependency object -- by calling a -- factory function

* use cases
  * based on information available | DI, you can create a dynamic value

* TODO:
In the following example, only authorized users should see secret heroes in the `HeroService`.
Authorization can change during the course of a single application session, as when a different user logs in .

To keep security-sensitive information in `UserService` and out of `HeroService`, give the `HeroService` constructor a boolean flag to control display of secret heroes:

<docs-code header="src/app/heroes/hero.service.ts" language="typescript"
           highlight="[[4],[7]]">
class HeroService {
  constructor(
    private logger: Logger,
    private isAuthorized: boolean) { }

  getHeroes() {
    const auth = this.isAuthorized ? 'authorized' : 'unauthorized';
    this.logger.log(`Getting heroes for ${auth} user.`);
    return HEROES.filter(hero => this.isAuthorized || !hero.isSecret);
  }
}
</docs-code>

To implement the `isAuthorized` flag, use a factory provider to create a new logger instance for `HeroService`.
This is necessary as we need to manually pass `Logger` when constructing the hero service:

<docs-code header="src/app/heroes/hero.service.provider.ts" language="typescript">
const heroServiceFactory = (logger: Logger, userService: UserService) =>
  new HeroService(logger, userService.user.isAuthorized);
</docs-code>

The factory function has access to `UserService`.
You inject both `Logger` and `UserService` into the factory provider so the injector can pass them along to the factory function:

<docs-code header="src/app/heroes/hero.service.provider.ts" language="typescript"
           highlight="[3,4]">
export const heroServiceProvider = {
  provide: HeroService,
  useFactory: heroServiceFactory,
  deps: [Logger, UserService]
};
</docs-code>

- The `useFactory` field specifies that the provider is a factory function whose implementation is `heroServiceFactory`.
- The `deps` property is an array of provider tokens.
The `Logger` and `UserService` classes serve as tokens for their own class providers.
The injector resolves these tokens and injects the corresponding services into the matching `heroServiceFactory` factory function parameters, based on the order specified.

Capturing the factory provider in the exported variable, `heroServiceProvider`, makes the factory provider reusable.

### Value providers -- `useValue` --

* lets you,
  * associate a static value -- with a -- DI token

* use cases
  * provide runtime configuration constants
    * _Example:_ website base addresses, feature flags
  * | unit test, to provide mock data

## Using an `InjectionToken` object

* `InjectionToken` object
  * == provider token -- for -- 👀non-class dependencies 👀
  * `InjectionToken<OptionalTypeParameter>('tokenDescription');`
    * `OptionalTypeParameter` & `tokenDescription` specify the token's purpose 
  * uses
    * inject the configuration object | constructor -- via -- `@Inject()` parameter decorator

### Interfaces & DI

* `AppConfig` interface
  * | TypeScript,
    * supports typing
    * == design-time artifact != runtime representation, or token / DI can use  
  * 👀| DI, plays NO role 👀
  * ❌interface can NOT be a token -> you can NOT inject it! ❌
    * Reason: 🧠 TypeScript -- transpiles to -- JavaScript -> interface disappears 🧠
