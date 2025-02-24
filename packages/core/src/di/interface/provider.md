* TODO:
* `ClassProvider`
  * configures the `Injector` / returns an `useClass`' instance -- for a -- token
  * `provide`
    * == injection token
      * _Example:_ `Type`'s instance or `InjectionToken`'s instance
* `ClassSansProvider`
  * configure the `Injector` / return -- by invoking `useClass`, the -- value
  * uses
    * base for `ClassProvider`
  * `useClass`
    * class -- to -- instantiate
* `ConstructorProvider`
  * TODO:
* `StaticProvider`
  * configure the `Injector` -- as -- static 
    * == WITHOUT reflection
* `TypeProvider`
  * if `Type` is used as token -> `Injector` -- is configured / return an `Type`'s instance 
  * if you want to create an instance -> invoke `new` & supply additional arguments
* `ValueProvider`
  * configure the `Injector` / returns a value -- for -- token
  * `provide`
    * == injection token
      * _Example:_ `Type`'s instance or `InjectionToken`'s instance
  * `multi`
    * TODO:
* `ValueSansProvider`
  * configure the `Injector`
  * uses
    * base for `ValueProvider`
  * `useValue: any`
    * value -- to -- inject
* `Provider`
  * configure the `Injector` / returns a value -- for -- token 
* TODO: