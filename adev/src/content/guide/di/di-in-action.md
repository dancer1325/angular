# DI in action

* goal
  * additional features of DI | Angular

## Custom providers with `@Inject`

* custom provider
  * allows you
    * provide a concrete implementation -- for -- implicit dependencies (built-in browser APIs)

* _Example:_ [localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage) browser API -- is provided, via `InjectionToken`, as a -- dependency | `BrowserStorageService`
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

* TODO:
Although developers strive to avoid it, some visual effects and third-party tools require direct DOM access.
As a result, you might need to access a component's DOM element.

Angular exposes the underlying element of a `@Component` or `@Directive` via injection using the `ElementRef` injection token:

<docs-code language="typescript" highlight="[7]">
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
</docs-code>

## Resolve circular dependencies with a forward reference

The order of class declaration matters in TypeScript.
You can't refer directly to a class until it's been defined.

This isn't usually a problem, especially if you adhere to the recommended *one class per file* rule.
But sometimes circular references are unavoidable.
For example, when class 'A' refers to class 'B' and 'B' refers to 'A', one of them has to be defined first.

The Angular `forwardRef()` function creates an *indirect* reference that Angular can resolve later.

You face a similar problem when a class makes *a reference to itself*.
For example, in its `providers` array.
The `providers` array is a property of the `@Component()` decorator function, which must appear before the class definition.
You can break such circular references by using `forwardRef`.

<docs-code header="app.component.ts" language="typescript" highlight="[4]">
providers: [
  {
    provide: PARENT_MENU_ITEM,
    useExisting: forwardRef(() => MenuItem),
  },
],
</docs-code>
