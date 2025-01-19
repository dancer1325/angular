# Control flow

* Angular templates
  * support control flow blocks / let you conditionally, about elements,
    * show,
    * hide,
    * repeat
  * | PREVIOUS Angular v,
    * use the directives
      * `*ngIf`,
      * `*ngFor`,
      * `*ngSwitch`

## Conditionally display content -- via -- `@if`, `@else-if` and `@else`

* `@if` block, `@else if` blocks, `@else` block
  * 's behavior == control flow's behavior

    ```angular-html
    @if (a > b) {
      {{a}} is greater than {{b}}
    } @else if (b > a) {
      {{a}} is less than {{b}}
    } @else {
      {{a}} is equal to {{b}}
    }
    ```

### Referencing the conditional expression's result

* `@if` conditional -- supports saving the -- result of the conditional expression | variable  
  * uses
    * reuse | block
      * Reason: 🧠 easier to read and maintain 🧠

    ```angular-html
    @if (user.profile.settings.startDate; as startDate) {
      {{ startDate }}
    }
    ```

## Repeat content -- via -- `@for` block

* `@for` block
  * allows
    * loops -- through a -- collection /
      * collection -- MUST BE -- ANY JavaScript [iterable](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Iteration_protocols)
    * renders REPEATEDLY the content of a block 
  * _Example:_  

    ```angular-html
    @for (item of items; track item.id) {
      {{ item.name }}
    }
    ```

### Why is `track` | `@for` blocks important?

* `track`
  * == expression 
    * recommendations
      * 👀choose property / UNIQUELY identifies EACH item | `track` expression 👀
        * if your data model includes a uniquely identifying property -> use it, else -> consider adding one 
      * | static collections / NEVER change,
        * use `$index` == item's index
      * | LAST option,
        * use `identity` == item's reference identity (`===`)
        * cons
          * ⚠️slower rendering updates ⚠️
            * Reason: 🧠 Angular has NO way to map, data item <--> DOM nodes 🧠 
  * allows 
    * 💡Angular can maintain a relationship between your data -- & -- page's DOM nodes 💡
      * -> 👀if data changes, Angular optimizes -- executing the MINIMUM NECESSARY DOM operations -- performance 👀

### Contextual variables | `@for` blocks

* | `@for` blocks,
  * variables / ALWAYS AVAILABLE
    
    | Variable | Meaning                                       |
    | -------- | --------------------------------------------- |
    | `$count` | Number of items in a collection iterated over |
    | `$index` | Index of the current row                      |
    | `$first` | Whether the current row is the first row      |
    | `$last`  | Whether the current row is the last row       |
    | `$even`  | Whether the current row index is even         |
    | `$odd`   | Whether the current row index is odd          |

  * you can alias -- via a `let` segment -- these variables
    * uses
      * nesting `@for` blocks 
        * Reason: 🧠read inner `@for` block's variables | outer `@for` block 🧠 

          ```angular-html
          @for (item of items; track item.id; let idx = $index, e = $even) {
            <p>Item #{{ idx }}: {{ item.name }}</p>
          }
          ```

### `@empty` block

* OPTIONAL
  * | IMMEDIATELY AFTER `@for` block content 
* allows
  * 👀providing a fallback for `@for` blocks 👀
    * == if the iterated collection of `@for` is empty -> `@empty` block displayed

```angular-html
@for (item of items; track item.name) {
  <li> {{ item.name }}</li>
} @empty {
  <li aria-hidden="true"> There are no items. </li>
}
```

## Conditionally display content with the `@switch` block

* TODO:
While the `@if` block is great for most scenarios, the `@switch` block provides an alternate syntax to conditionally render data.
Its syntax closely resembles JavaScript's `switch` statement.

```angular-html
@switch (userPermissions) {
  @case ('admin') {
    <app-admin-dashboard />
  }
  @case ('reviewer') {
    <app-reviewer-dashboard />
  }
  @case ('editor') {
    <app-editor-dashboard />
  }
  @default {
    <app-viewer-dashboard />
  }
}
```

The value of the conditional expression is compared to the case expression using the triple-equals (`===`) operator.

**`@switch` does not have a fallthrough**, so you do not need an equivalent to a `break` or `return` statement in the block.

You can optionally include a `@default` block. 
The content of the `@default` block displays if none of the preceding case expressions match the switch value.

If no `@case` matches the expression and there is no `@default` block, nothing is shown.
