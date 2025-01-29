# NgModules

* goal
  * understand `@NgModule`

* uses
  * | Angular v16-
    * widely used -- to -- 
      * configure the injector & the compiler
      * help organize related things together
  * | Angular v16+,
    * recommendations
      * 💡use [standalone components](guide/components/anatomy-of-components#-imports-in-the-component-decorator) -- instead of -- `NgModule` 💡

* _Example:_ [here](/adev/src/content/examples/ngModules)

* NgModule
  * := class / marked by the `@NgModule`
  * 👀tells Angular, how to 👀
    * compile component templates
    * configure dependency injection
  * MAIN responsibilities
    * declare NgModule's
      * components,
      * directives,
      * pipes 
    * add providers to the injector | components, directives, and pipes / imported by the NgModule

* steps
  * 👀`ng generate module moduleName` 👀
    * create a NgModule
    * _Example:_ `ng generate module customMenu`

  ```typescript
  import {NgModule} from '@angular/core';
  
  @NgModule({
    // Metadata goes here
  })
  export class CustomMenuModule { }
  ```

## ALLOWED metadata
### `declarations`

* `declarations`
  * == `@NgModule` metadata's property /
    * 👀declares the NgModule's 👀 
      * components,
      * directives,
      * pipes 
  * ways to pass the values
    * 1 by 1
    * array

* _Example:_ 
  ```typescript
  const SOME_COMPONENTS_IN_ARRAY = [CustomMenuComponent, CustomMenuItemComponent];
  
  @NgModule({
    /* ... */
    // This NgModule declares all of CustomMenu, CustomMenuItem,
    // CustomSlider, and CustomCheckbox.
    declarations: [SOME_COMPONENTS_IN_ARRAY, CustomSliderComponent, CustomCheckboxComponent],
  })
  export class CustomMenuModule { }
  ```

* ⚠️if SOME components, directives, or pipes declared | >1 NgModule -> throws an error ⚠️
* requirements | NgModule's components, directives, or pipes
  * ⚠️mark it as `standalone: false` ⚠️
    * if you mark as `standalone: true` -> compile & run, BUT highlight as an ERROR
    * _Example:_ 
  ```typescript
  @Component({
    // Mark this component as `standalone: false` so that it can be declared in an NgModule.
    standalone: false,
    /* ... */
  })
  export class CustomMenu { /* ... */ }
  ```

### `imports`

* TODO:
Components declared in an NgModule may depend on other components, directives, and pipes. Add these dependencies to the `imports` property of the `@NgModule` metadata.

```typescript
@NgModule({
  /* ... */
  // CustomMenu and CustomMenuItem depend on the PopupTrigger and SelectorIndicator components.
  imports: [PopupTrigger, SelectionIndicator],
  declarations: [CustomMenu, CustomMenuItem],
})
export class CustomMenuModule { }
```

The `imports` array accepts other NgModules, as well as standalone components, directives, and pipes.

### `exports`

An NgModule can _export_ its declared components, directives, and pipes such that they're available to other components and NgModules.

 ```typescript
@NgModule({
  imports: [PopupTrigger, SelectionIndicator],
  declarations: [CustomMenu, CustomMenuItem],

  // Make CustomMenu and CustomMenuItem available to
  // components and NgModules that import CustomMenuModule.
  exports: [CustomMenu, CustomMenuItem],
})
export class CustomMenuModule { }
```

The `exports` property is not limited to declarations, however. An NgModule can also export any other components, directives, pipes, and NgModules that it imports.

 ```typescript
@NgModule({
  imports: [PopupTrigger, SelectionIndicator],
  declarations: [CustomMenu, CustomMenuItem],

  // Also make PopupTrigger available to any component or NgModule that imports CustomMenuModule.
  exports: [CustomMenu, CustomMenuItem, PopupTrigger],
})
export class CustomMenuModule { }
```

## `NgModule` providers

* see [Dependency Injection guide](../di)
* providers
  * -- used by -- injected dependencies / are
    * standalone, inherited & imported by NgModule,
      * component, 
      * directive,
      * pipe

* _Example:_

  ```typescript
  @NgModule({
    imports: [PopupTrigger, SelectionIndicator],
    declarations: [CustomMenu, CustomMenuItem],
  
    // Provide the OverlayManager service
    providers: [OverlayManager],
    /* ... */
  })
  export class CustomMenuModule { }
  
  @NgModule({
    imports: [CustomMenuModule],
    declarations: [UserProfile],
    providers: [UserDataClient],
  })
  export class UserProfileModule { }
  ```

### The `forRoot` and `forChild` pattern

Some NgModules define a static `forRoot` method that accepts some configuration and returns an array of providers. The name "`forRoot`" is a convention that indicates that these providers are intended to be added exclusively to the _root_ of your application during bootstrap.

Any providers included in this way are eagerly loaded, increasing the JavaScript bundle size of your initial page load.

```typescript
boorstrapApplication(MyApplicationRoot, {
  providers: [
    CustomMenuModule.forRoot(/* some config */),
  ],
});
```

Similarly, some NgModules may define a static `forChild` that indicates the providers are intended to be added to components within your application hierarchy.

```typescript
@Component({
  /* ... */
  providers: [
    CustomMenuModule.forChild(/* some config */),
  ],
})
export class UserProfile { /* ... */ }
```

## Bootstrapping an application

* recommendations
  * | Angular v16+,
    * 👀use BETTER [bootstrapApplication](api/platform-browser/bootstrapApplication) -- instead of -- `bootstrapModule` 👀

* `bootstrap`
  * == `@NgModule` metadata's property /
    * optional
    * == `[ofComponents]`
      * ALL these components -> automatically included | `declarations`

* | bootstrap an Angular application -- via -- `NgModule`
  * ways 
    * [`platformBrowser`](api/platform-browser/platformBrowser) `.bootstrapModule(ngModuleName)` 
    * [`platformServer`](api/platform-server/platformServer) `.bootstrapModule(ngModuleName)`
  * 👀collected `providers` + ALL its `imports`' `providers` -- are eagerly --
    * loaded
    * available to inject | ENTIRE application 👀

* `bootstrapModule(ngModuleName)`
  * see [`bootstrapModule`](https://angular.dev/api/core/PlatformRef#bootstrapModule)
  * how does it work?
    * locates any elements | page / CSS selector -- matches the -- listed component(s)
    * renders those components | page

* _Example:_ 
  ```typescript
  import {platformBrowser} from '@angular/platform-browser';
  
  @NgModule({
    bootstrap: [MyApplication],
  })
  export class MyApplciationModule { }
  
  platformBrowser().bootstrapModule(MyApplicationModule);
  ```
