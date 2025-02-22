* `InjectionToken<T>`
  * 👀creates a token / can be used | DI Provider 👀
  * uses
    * 👀 type / you are injecting is NOT reified (== NOT have a runtime representation) 👀
      * _Example:_ injecting an interface, callable type, array or parameterized type
  * `T`
    * == type of object / returned by `Injector`
  * ⚠️`InjectionToken`'s instance | provider == `InjectionToken`'s instance | injection call ⚠️
    * Reason: 🧠 OTHERWISE, DIFFERENT tokens -- by -- Angular's DI system, -> `NullInjectorError`🧠
  * _Examples:_
    * _Example1:_ [here](/adev/src/content/examples/injection-token/final)
    * _Example2:_ "core/di/ts/injector_spec.ts"'s docregion 
      * InjectionToken
      * ShakableInjectionToken
    * _Example3:_
  * `constructor(
      protected _desc: string,
      options?: {
        providedIn?: Type<any> | 'root' | 'platform' | 'any' | null;
        factory: () => T;
      },
    ) {}`
    * `_desc`
      * == token description
      * uses
        * debugging purposes
    * `options.factory`
      * := function / 
        * returns a default value of the parameterized type `T`
        * takes 0 arguments & needs to inject dependencies -> use [`inject`](api/core/inject) function
    * `options.providedIn`
      * =
        * `NgModule` or `'any'`
          * deprecated
        * `'root'`
          * default value
      * requirements
        * 👀specify `options.factory`👀
      * overrides the `options.factory` behavior
