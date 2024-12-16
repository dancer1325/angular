* goal
  * how to 
    * create a service
    * inject it | OTHER services & components

# Creating an injectable service

* Service
  * := broad category /
    * needed by an application
    * == value + function + feature
  * 👀(typically) class / purpose narrow & well-defined 👀
  * if you configure DIFFERENT providers of the same kind of service -> application is more adaptable 
  * ⚠️if the service is done injectable ⟶ their tasks -- can be available to -- ANY component ⚠️
  * -- can depend on -- OTHER services

* Component
  * := type of class / can use DI
  * Component != Service
    * recommendations
      * different files
    * Reason: 🧠 increase modularity & reusability 🧠
  * if component's view-related features — separated from — other kinds of processing ⟶ component lean & efficient
  * 👀's job == enable the user experience 👀
    * _Example1:_ 's properties & methods / has application logic <- are, via data binding, related with -> view 
  * 's certain tasks -- can be delegated to -- services
    * _Example:_ fetch data from the server
    * _Example2:_ validate user input
    * _Example3:_ log to the console

## Service examples

* _Example:_ service class / logs | browser console

  ```src/app/logger.service.ts
  export class Logger {
    log(msg: unknown) { console.log(msg); }
    error(msg: unknown) { console.error(msg); }
    warn(msg: unknown) { console.warn(msg); }
  }
  ```

* _Example:_ `HeroService` / depends on the `Logger` & `BackendService` services

  ```src/app/hero.service.ts
  export class HeroService {
    private heroes: Hero[] = [];

    constructor(
      private backend: BackendService,
      private logger: Logger) {}

    async getHeroes() {
      // Fetch
      this.heroes = await this.backend.getAll(Hero);
      // Log
      this.logger.log(`Fetched ${this.heroes.length} heroes.`);
      return this.heroes;
    }
  }
  ```

## Creating an injectable service

* `ng generate service serviceName`
  * create a NEW service -- via -- Angular CLI
  * _Example:_ generate a new `HeroService` class | `src/app/heroes`
    ```
    ng generate service heroes/hero
    ```
    which creates
    ```src/app/heroes/hero.service.ts
    import { Injectable } from '@angular/core';

    @Injectable({
      providedIn: 'root',
    })
    export class HeroService {}
    ```
  * `@Injectable()` decorator
    * allows
      * Angular can use this class | DI system
    * `providedIn: 'root'`
      * == service is provided | ALL the application

* add service logic
  * _Example:_ 
    ```
    import { Injectable } from '@angular/core';
    import { HEROES } from './mock-heroes';

    @Injectable({
    // declares that this service should be created
    // by the root application injector.
      providedIn: 'root',
    })
    export class HeroService {
      getHeroes() {
        return HEROES;
      }
    }
    ```

## Injecting services

* inject a service | component, as a dependency
  * 👀use the component's `constructor()`👀
  * Reason: 🧠as a dependency, because `HeroService` -- was annotated with -- `@Injectable` decorator 🧠

* _Example:_ inject `HeroService` | `HeroListComponent` 
  ```src/app/heroes/hero-list.component (ONLY constructor signature)
  constructor(heroService: HeroService)
  ```

## Injecting services | other services

* 's pattern == inject service | component's pattern
  * _Example:_ 

    ```src/app/heroes/hero.service.ts
    import { Injectable } from '@angular/core';
    import { HEROES } from './mock-heroes';
    import { Logger } from '../logger.service';

    @Injectable({
      providedIn: 'root',
    })
    export class HeroService {
      // `HeroService` -- depends on a -- `Logger` service  
      constructor(private logger: Logger) {} 

      getHeroes() {
        this.logger.log('Getting heroes.');
        return HEROES;
      }
    }
    ```
