* `export const APP_INITIALIZER = new InjectionToken<>(ngDevMode ? 'Application Initializer' : '');`
  * == DI token / 
    * allows
      * 👀providing >=1 initialization functions /👀
        * injected | application startup
        * executed | app initialization 
        * run | injection context 
        * if these functions returns a Promise or Observable -> initialization is completed | Promise is resolved or Observable is completed
  * use cases
    * factory function / loads language data or external configuration
      * === provide that function | `APP_INITIALIZER` token
  * Angular v19.0.+,
    * deprecated
    * use `provideAppInitializer`
  * _Example:_ TODO: Where to add?
* TODO:
  .