* DI
  * goal
    * reuse code
      * _Example:_ share logic between components 
    * control behaviors | ACROSS your application & tests
  * allows
    * create a “service” / 
      * inject code | components
      * 1! source of truth (the service)

## What are services?

* Services
  * == reusable pieces of code / can be injected
  * == **TypeScript decorator** + **TypeScript class**
    * **TypeScript decorator**
      * declares the class -- , via `@Injectable`, as an - Angular service
      * `providedIn`
        * 👀define what part of the application -- can access the -- service 👀
        * == `'root'`, typically 
          * == service -- can be accessed -- ANYWHERE | application
    * **TypeScript class**
      * defines the desired code / will be accessible | service is injected

  * _Example:_ `Calculator` service

    ```angular-ts
    import {Injectable} from '@angular/core';
    
    @Injectable({providedIn: 'root'})
    export class Calculator {
      add(x: number, y: number) {
        return x + y;
      }
    }
    ```

## How to use a service

* steps to use a service | component
  1. Import the service
  2. 👀Declare a class field | service is injected 👀

* _Example:_ use previous `Calculator` service | `Receipt` component

  ```angular-ts
  import { Component, inject } from '@angular/core';
  import { Calculator } from './calculator';
  
  @Component({
    selector: 'app-receipt',
    template: `<h1>The total is {{ totalCost }}</h1>`,
  })
  
  export class Receipt {
    private calculator = inject(Calculator);  // class field | service is injected
    totalCost = this.calculator.add(50, 25);
  }
  ```

## Next Step
* see [DI](../../guide/di)
