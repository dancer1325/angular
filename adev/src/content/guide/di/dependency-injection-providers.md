* goal
  * describe how to
    * configure dependencies -- via -- the `@Component(providers=)` & `@NgModule(providers=)`
    * use InjectionToken -- to -- provide & inject values in DI
      * use cases
        * use a value / != classes 

# Configuring dependency providers

* 👀values (`boolean`, `string`, `Date`) & objects -- can be used as -- dependencies 👀
  * Reason: 🧠thanks to Angular's APIs / are dependency configuration flexible 🧠

## Specifying a provider token

* TODO:
If you specify the service class as the provider token, the default behavior is for the injector to instantiate that class using the `new` operator.

In the following example, the app component provides a `Logger` instance:

<docs-code header="src/app/app.component.ts" language="typescript">
providers: [Logger],
</docs-code>

You can, however, configure DI to associate the `Logger` provider token with a different class or any other value.
So when the `Logger` is injected, the configured value is used instead.

In fact, the class provider syntax is a shorthand expression that expands into a provider configuration, defined by the `Provider` interface.
Angular expands the `providers` value in this case into a full provider object as follows:

<docs-code header="src/app/app.component.ts" language="typescript">
[{ provide: Logger, useClass: Logger }]
</docs-code>

The expanded provider configuration is an object literal with two properties:

- The `provide` property holds the token that serves as the key for consuming the dependency value.
- The second property is a provider definition object, which tells the injector **how** to create the dependency value. The provider-definition can be one of the following:
  - `useClass` - this option tells Angular DI to instantiate a provided class when a dependency is injected
  - `useExisting` - allows you to alias a token and reference any existing one.
  - `useFactory` - allows you to define a function that constructs a dependency.
  - `useValue` - provides a static value that should be used as a dependency.

The sections below describe how to use the different provider definitions.

### Class providers: useClass

The `useClass` provider key lets you create and return a new instance of the specified class.

You can use this type of provider to substitute an alternative implementation for a common or default class.
The alternative implementation can, for example, implement a different strategy, extend the default class, or emulate the behavior of the real class in a test case.

In the following example, `BetterLogger` would be instantiated when the `Logger` dependency is requested in a component or any other class:

<docs-code header="src/app/app.component.ts" language="typescript">
[{ provide: Logger, useClass: BetterLogger }]
</docs-code>

If the alternative class providers have their own dependencies, specify both providers in the providers metadata property of the parent module or component:

<docs-code header="src/app/app.component.ts" language="typescript">
[
  UserService, // dependency needed in `EvenBetterLogger`.
  { provide: Logger, useClass: EvenBetterLogger },
]
</docs-code>

In this example, `EvenBetterLogger` displays the user name in the log message. This logger gets the user from an injected `UserService` instance:

<docs-code header="src/app/even-better-logger.component.ts" language="typescript"
           highlight="[[3],[6]]">
@Injectable()
export class EvenBetterLogger extends Logger {
  constructor(private userService: UserService) {}

  override log(message: string) {
    const name = this.userService.user.name;
    super.log(`Message to ${name}: ${message}`);
  }
}
</docs-code>

Angular DI knows how to construct the `UserService` dependency, since it has been configured above and is available in the injector.

### Alias providers: useExisting

The `useExisting` provider key lets you map one token to another.
In effect, the first token is an alias for the service associated with the second token, creating two ways to access the same service object.

In the following example, the injector injects the singleton instance of `NewLogger` when the component asks for either the new or the old logger:
In this way, `OldLogger` is an alias for `NewLogger`.

<docs-code header="src/app/app.component.ts" language="typescript" highlight="[4]">
[
  NewLogger,
  // Alias OldLogger w/ reference to NewLogger
  { provide: OldLogger, useExisting: NewLogger},
]
</docs-code>

Note: Ensure you do not alias `OldLogger` to `NewLogger` with `useClass`, as this creates two different `NewLogger` instances.

### Factory providers: useFactory

The `useFactory` provider key lets you create a dependency object by calling a factory function.
With this approach, you can create a dynamic value based on information available in the DI and elsewhere in the app.

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

### Value providers: useValue

The `useValue` key lets you associate a static value with a DI token.

Use this technique to provide runtime configuration constants such as website base addresses and feature flags.
You can also use a value provider in a unit test to provide mock data in place of a production data service.

The next section provides more information about the `useValue` key.

## Using an `InjectionToken` object

* `InjectionToken` object
  * 👀== provider token -- for -- non-class dependencies 👀
  * `InjectionToken<OptionalTypeParameter>('tokenDescription');`
    * `OptionalTypeParameter` & `tokenDescription` specify the token's purpose 
  * _Example:_
    ```src/app/app.config.ts
    import { InjectionToken } from '@angular/core';
    
    export interface AppConfig {
      title: string;
    }
    
    // defines a token, `APP_CONFIG`. of type `InjectionToken`
    export const APP_CONFIG = new InjectionToken<AppConfig>('app.config description');
    ```
    register the dependency provider | component / use the `InjectionToken` object of `APP_CONFIG`
    ```src/app/app.component.ts
    const MY_APP_CONFIG_VARIABLE: AppConfig = {
    title: 'Hello',
    };

    providers: [{ provide: APP_CONFIG, useValue: MY_APP_CONFIG_VARIABLE }]
    ```
    inject the configuration object | constructor -- via -- `@Inject()` parameter decorator
    ```src/app/app.component.ts
    export class AppComponent {
      constructor(@Inject(APP_CONFIG) config: AppConfig) {
      this.title = config.title;
      }
    }
    ```

### Interfaces and DI

* `AppConfig` interface
  * | TypeScript,
    * supports typing
    * == design-time artifact != runtime representation, or token / DI can use  
  * 👀plays NO role in DI 👀
  * ❌interface can NOT be a token -> you can NOT inject it! ❌
    * Reason: 🧠 TypeScript -- transpiles to -- JavaScript -> interface disappears 🧠
    * _Example:_ 
      ```src/app/app.component.ts
      // interface -- can NOT be used as -- provider token
      [{ provide: AppConfig, useValue: MY_APP_CONFIG_VARIABLE })]
      ```
      ```src/app/app.component.ts
      export class AppComponent {
      // Can NOT inject using the interface as the parameter type
        constructor(private config: AppConfig) {}
      }
      ```
