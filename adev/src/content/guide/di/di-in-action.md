# DI in action

* goal
  * additional features of DI | Angular

## Custom providers -- with -- `@Inject`

* custom provider
  * allows you
    * provide a concrete implementation -- for -- implicit dependencies (built-in browser APIs)

* _Example:_ [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage) browser API -- is provided, via `InjectionToken`, as a -- dependency | `BrowserStorageService`
  * TODO: add | SOME Angular application
    ```src/app/storage.service.ts
    import { Inject, Injectable, InjectionToken } from '@angular/core';

    export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
      providedIn: 'root',
      factory: () => localStorage. // `localStorage` property / -- attached to the -- browser's window object
    });

    @Injectable({
      providedIn: 'root'
    })
    export class BrowserStorageService {
      // specify a custom provider of the dependency -- | testing, it can be overridden -- with a -- mock API of `localStorage` -- 
      constructor(@Inject(BROWSER_STORAGE) public storage: Storage) {}
  
      get(key: string) {
        return this.storage.getItem(key);
      }
  
      set(key: string, value: string) {
        this.storage.setItem(key, value);
      }
    }
    ```

## Inject the component's DOM element

* DOM access
  * uses by
    * SOME visual effects
    * third-party tools 
  * == access a component's DOM element

* (`@Component` or `@Directive`)-related DOM element
  * 👀exposed by Angular -- via -- `ElementRef` injection token 👀
    * _Example:_ TODO: add | SOME Angular application
        ```typescript
        import { Directive, ElementRef } from '@angular/core';

        @Directive({
        selector: '[appHighlight]'
        })
        export class HighlightDirective {
        constructor(private element: ElementRef) {}

        update() {
            this.element.nativeElement.style.color = 'red';
        }
        }
        ```

## Resolve circular dependencies -- with a -- forward reference

* | TypeScript, 
  * 👀class declaration order matters 👀
    * ⚠️UNTIL a class has been defined -> you can NOT refer DIRECTLY⚠️
      * -> recommendations
        * 1 class / file

* circular references
  * SOLUTION: define classes in order
  * _Examples:_
    * _Example1:_
      * class 'A' -- refers to -- class 'B'
      * class 'B' -- refers to -- class 'A'
    * _Example2:_ class -- makes a reference to -- itself
      * `@Component(providers: ...)`

* Angular `forwardRef()`
  * creates an *indirect* reference / Angular can resolve later
  * _Example:_ TODO: add | SOME Angular application
      ```typescript 
    providers: [
        {
        provide: PARENT_MENU_ITEM,
        useExisting: forwardRef(() => MenuItem),
        },
    ],
    ```
