# Migrations

* goal
  * how to migrate your EXISTING angular project -- to the -- latest features incrementally

* see
  * TODO:
  * [Control Flow Syntax](control-flow.md)

  * <docs-card-container>
  <docs-card title="Standalone" link="Migrate now" href="reference/migrations/standalone">
    Standalone components provide a simplified way to build Angular applications. Standalone components specify their dependencies directly instead of getting them through NgModules.
  </docs-card>
  <docs-card title="inject() Function" link="Migrate now" href="reference/migrations/inject-function">
    Angular's `inject` function offers more accurate types and better compatibility with standard decorators, compared to constructor-based injection.
  </docs-card>
  <docs-card title="Lazy-loaded routes" link="Migrate now" href="reference/migrations/route-lazy-loading">
    Convert eagerly loaded component routes to lazy loaded ones. This allows the build process to split production bundles into smaller chunks, to load less JavaScript at initial page load.
  </docs-card>
  <docs-card title="New `input()` API" link="Migrate now" href="reference/migrations/signal-inputs">
    Convert existing `@Input` fields to the new signal input API that is now production ready.
  </docs-card>
  <docs-card title="New `output()` function" link="Migrate now" href="reference/migrations/outputs">
    Convert existing `@Output` custom events to the new output function that is now production ready.
  </docs-card>
  <docs-card title="Queries as signal" link="Migrate now" href="reference/migrations/signal-queries">
    Convert existing decorator query fields to the improved signal queries API. The API is now production ready.
  </docs-card>
</docs-card-container>
