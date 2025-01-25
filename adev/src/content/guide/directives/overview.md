* goal
  * directives overview
  * [attribute directives](#built-in-attribute-directives)
  * [structural directives](#built-in-structural-directives)

* Directives
  * 👀:= classes / add additional behavior | your Angular applications' elements  👀
    * see [code](/packages/core/src/metadata/directives.md)

* Angular's built-in directives
  * allows managing
    * forms
    * lists
    * styles
    * what users see
  * ⚠️use ONLY public APIs ⚠️

| Directive Types                                          | Details                                                                                |
|:---------------------------------------------------------|:---------------------------------------------------------------------------------------|
| [Components](../components)                              | used -- with a -- template <br/> MOST common directive type                            |
| [Attribute directives](#built-in-attribute-directives)   | change the appearance or behavior -- of an -- element, component, or another directive |
| [Structural directives](#built-in-structural-directives) | change the DOM layout -- by -- adding and removing DOM elements                        |

## Built-in attribute directives

* := directive / 👀modifies the behavior 👀 
  * -- via -- listening to
  * of HTML
    * element
    * attributes
    * properties
    * components

* 👀MOST common attribute directives are 👀
  
  | Common directives                                             | Details                                                 |
  | :------------------------------------------------------------ |:--------------------------------------------------------|
  | [`NgClass`](#adding-and-removing-classes-with-ngclass)        | 💡adds and removes a set of CSS classes 💡              |
  | [`NgStyle`](#setting-inline-styles-with-ngstyle)              | adds and removes a set of HTML styles                   |
  | [`NgModel`](#displaying-and-updating-properties-with-ngmodel) | adds two-way data binding -- to an -- HTML form element |

### `NgClass` -- to -- add and remove CSS classes

* recommendations
  * 👀if you want to add or remove 1! class -> use [class binding](../templates/class-binding) rather than `NgClass` 👀

* steps
  * add `NgClass` | Component's `imports`
  * `[ngClass]=`
    * `"expression"`
    * `"classProperty"` / modified -- via -- method

* ALLOWED values
  * HTML global attribute `class`
  * object / 
    * key == className
    * value == boolean / add or remove CSS class

* _Example:_ [built-in-directives/ngClass](../../examples/built-in-directives/ngClass)

### `NgStyle` -- to -- add or remove CSS inline styles 

* steps
  * add `NgStyle` | Component's `imports`
  * TODO:

Use `NgStyle` to set multiple inline styles simultaneously, based on the state of the component.

1. To use `NgStyle`, add a method to the component class.

   In the following example, `setCurrentStyles()` sets the property `currentStyles` with an object that defines three styles, based on the state of three other component properties.

   <docs-code header="src/app/app.component.ts" path="adev/src/content/examples/built-in-directives/src/app/app.component.ts" visibleRegion="setStyles"/>

1. To set the element's styles, add an `ngStyle` property binding to `currentStyles`.

<docs-code header="src/app/app.component.html" path="adev/src/content/examples/built-in-directives/src/app/app.component.html" visibleRegion="NgStyle-2"/>

For this use case, Angular applies the styles upon initialization and in case of changes.
To do this, the full example calls `setCurrentStyles()` initially with `ngOnInit()` and when the dependent properties change through a button click.
However, these steps are not necessary to implement `ngStyle` on its own.

### `NgModel` -- to -- display and update properties 

* uses
  * display a data property
  * update that property | user makes changes

* steps
  * add `FormsModule` | Component's `imports`

1. Import `FormsModule` and add it to the AppComponent's `imports` list.

<docs-code header="src/app/app.component.ts (FormsModule import)" path="adev/src/content/examples/built-in-directives/src/app/app.component.ts" visibleRegion="import-forms-module" />

1. Add an `[(ngModel)]` binding on an HTML `<form>` element and set it equal to the property, here `name`.

   <docs-code header="src/app/app.component.html (NgModel example)" path="adev/src/content/examples/built-in-directives/src/app/app.component.html" visibleRegion="NgModel-1"/>

   This `[(ngModel)]` syntax can only set a data-bound property.

To customize your configuration, write the expanded form, which separates the property and event binding.
Use [property binding](guide/templates/property-binding) to set the property and [event binding](guide/templates/event-listeners) to respond to changes.
The following example changes the `<input>` value to uppercase:

<docs-code header="src/app/app.component.html" path="adev/src/content/examples/built-in-directives/src/app/app.component.html" visibleRegion="uppercase"/>

Here are all variations in action, including the uppercase version:

<img alt="NgModel variations" src="assets/images/guide/built-in-directives/ng-model-anim.gif">

-- `NgModel` and value accessors --

The `NgModel` directive works for an element supported by a [ControlValueAccessor](api/forms/ControlValueAccessor).
Angular provides _value accessors_ for all of the basic HTML form elements.
For more information, see [Forms](guide/forms).

To apply `[(ngModel)]` to a non-form built-in element or a third-party custom component, you have to write a value accessor.
For more information, see the API documentation on [DefaultValueAccessor](api/forms/DefaultValueAccessor).

HELPFUL: When you write an Angular component, you don't need a value accessor or `NgModel` if you name the value and event properties according to Angular's [two-way binding syntax](guide/templates/two-way-binding#how-two-way-binding-works).

## Built-in structural directives

* Structural directives
  * := directive / 👀changes DOM layout 👀 -- via --
    * adding host elements / -- attached to -- DOM layout 
    * removing host elements / -- attached to -- DOM layout
  * ⚠️1 structural directive / HTML component ⚠️
    * if you want to use several -> wrap | ANOTHER HTML element
    * see [here](structural-directives.md#one-structural-directive-per-element)

* 👀MOST common built-in structural directives 👀
  
  | Common built-in structural directives              | Details                                               |
  | :------------------------------------------------- |:------------------------------------------------------|
  | [`NgIf`](#adding-or-removing-an-element-with-ngif) | conditionally creates subviews -- from the -- template |
  | [`NgFor`](#listing-items-with-ngfor)               | repeat a node / EACH list's item                      |
  | [`NgSwitch`](#switching-cases-with-ngswitch)       | == set of directives / switch AMONG ALTERNATIVE views |

* see [Structural Directives](structural-directives)

### `NgIf` -- to -- add or remove an element  

Add or remove an element by applying an `NgIf` directive to a host element.

When `NgIf` is `false`, Angular removes an element and its descendants from the DOM.
Angular then disposes of their components, which frees up memory and resources.

* steps 
  * add `NgIf` | Component's `imports`
  * bind `*ngIf` -- to a -- condition expression

<docs-code header="src/app/app.component.html" path="adev/src/content/examples/built-in-directives/src/app/app.component.html" visibleRegion="NgIf-1"/>

When the `isActive` expression returns a truthy value, `NgIf` adds the `ItemDetailComponent` to the DOM.
When the expression is falsy, `NgIf` removes the `ItemDetailComponent` from the DOM and disposes of the component and all of its subcomponents.

* see [NgIf API documentation](api/common/NgIf) 

-- Guarding against `null` --

By default, `NgIf` prevents display of an element bound to a null value.

To use `NgIf` to guard a `<div>`, add `*ngIf="yourProperty"` to the `<div>`.
In the following example, the `currentCustomer` name appears because there is a `currentCustomer`.

<docs-code header="src/app/app.component.html" path="adev/src/content/examples/built-in-directives/src/app/app.component.html" visibleRegion="NgIf-2"/>

However, if the property is `null`, Angular does not display the `<div>`.
In this example, Angular does not display the `nullCustomer` because it is `null`.

<docs-code header="src/app/app.component.html" path="adev/src/content/examples/built-in-directives/src/app/app.component.html" visibleRegion="NgIf-2b"/>

-- Hosting a directive without a DOM element --

The Angular `<ng-container>` is a grouping element that doesn't interfere with styles or layout because Angular doesn't put it in the DOM.

Use `<ng-container>` when there's no single element to host the directive.

Here's a conditional paragraph using `<ng-container>`.

<docs-code header="src/app/app.component.html (ngif-ngcontainer)" path="adev/src/content/examples/structural-directives/src/app/app.component.html" visibleRegion="ngif-ngcontainer"/>

<img alt="ngcontainer paragraph with proper style" src="assets/images/guide/structural-directives/good-paragraph.png">

1. Import the `ngModel` directive from `FormsModule`.

1. Add `FormsModule` to the imports section of the relevant Angular module.

1. To conditionally exclude an `<option>`, wrap the `<option>` in an `<ng-container>`.

   <docs-code header="src/app/app.component.html (select-ngcontainer)" path="adev/src/content/examples/structural-directives/src/app/app.component.html" visibleRegion="select-ngcontainer"/>

   <img alt="ngcontainer options work properly" src="assets/images/guide/structural-directives/select-ngcontainer-anim.gif">

### `NgFor` -- from a list of items, to -- repeat a node 

* uses
  * display a list of items
  * repeat an Angular component

* steps
  * add `NgFor` | Component's `imports`
  * see [Structural directives](structural-directives)

* `*ngFor`
  * 's `index`
    * start from 0
  * `trackBy`
    * == `*ngFor`'s property / track items
      * -> 👀Angular change & re-render ONLY those items / have changed != reload ALL items 👀
    * `*ngFor=" .... ; trackBy: methodName"`
      * methodName(index:number, item: ItemInterfaceOrAny): typeTrackedByNgFor {}

### `NgSwitch` -- to switch -- cases

Like the JavaScript `switch` statement, `NgSwitch` displays one element from among several possible elements, based on a switch condition.
Angular puts only the selected element into the DOM.

`NgSwitch` is a set of three directives:

| `NgSwitch` directives | Details                                                                                                                                                                |
| :-------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NgSwitch`            | An attribute directive that changes the behavior of its companion directives.                                                                                          |
| `NgSwitchCase`        | Structural directive that adds its element to the DOM when its bound value equals the switch value and removes its bound value when it doesn't equal the switch value. |
| `NgSwitchDefault`     | Structural directive that adds its element to the DOM when there is no selected `NgSwitchCase`.                                                                        |

To use the directives, add the `NgSwitch`, `NgSwitchCase` and `NgSwitchDefault` to the component's `imports` list.

<docs-code header="src/app/app.component.ts (NgSwitch imports)" path="adev/src/content/examples/built-in-directives/src/app/app.component.ts" visibleRegion="import-ng-switch"/>

* steps

1. On an element, such as a `<div>`, add `[ngSwitch]` bound to an expression that returns the switch value, such as `feature`.
   Though the `feature` value in this example is a string, the switch value can be of any type.

1. Bind to `*ngSwitchCase` and `*ngSwitchDefault` on the elements for the cases.

<docs-code header="src/app/app.component.html" path="adev/src/content/examples/built-in-directives/src/app/app.component.html" visibleRegion="NgSwitch"/>

1. In the parent component, define `currentItem`, to use it in the `[ngSwitch]` expression.

<docs-code header="src/app/app.component.ts" path="adev/src/content/examples/built-in-directives/src/app/app.component.ts" visibleRegion="item"/>

1. In each child component, add an `item` [input property](guide/components/inputs) which is bound to the `currentItem` of the parent component.
   The following two snippets show the parent component and one of the child components.
   The other child components are identical to `StoutItemComponent`.

   <docs-code header="In each child component, here StoutItemComponent" path="adev/src/content/examples/built-in-directives/src/app/item-switch.component.ts" visibleRegion="input"/>

   <img alt="Animation of NgSwitch" src="assets/images/guide/built-in-directives/ngswitch.gif">

Switch directives also work with built-in HTML elements and web components.
For example, you could replace the `<app-best-item>` switch case with a `<div>` as follows.

<docs-code header="src/app/app.component.html" path="adev/src/content/examples/built-in-directives/src/app/app.component.html" visibleRegion="NgSwitch-div"/>
