# Common Routing Tasks

* goal
  * how to implement typical Angular routing's tasks

* 👀fundamental building blocks to create a route 👀
  * `ApplicationConfig`
  * `provideRouter()`
  * `Routes`
    * == `Route[]`
      * Route == { path: "URLpathForTheRoute", component: AngularComponentForThePath }
      * order is IMPORTANT 
        * ⚠️MORE specific routes should be placed FIRST -- above -- LESS specific ⚠️
          * Reason: 🧠`Router` uses a first-match wins strategy 🧠 
          * -> place [wildcard route](#setting-up-wildcard-routes) | LAST one

* `<router-outlet>`
  * -- render the -- routed views

* `routerLink="/routeRegisteredToSomeComponent"`
  * == HTML attribute /
    * 👀HTML element -- can be connected to a -- defined route 👀

* _Example:_ [common router tasks](/adev/src/content/examples/router/common-router-tasks)
  * create SEVERAL Angular components
    ```
    ng generate component first
    ng generate component second
    ```
  * | `index.html`, 
    * ⚠️`<base href="someValue">` -- must match with -- application root's URL ⚠️
      ```
      ...
      <head>
        <base href="/">
      </head>
      ...
      ```
  * | `app.routes.ts`,
    * add `Route` / EACH PREVIOUS created Angular component 
  * | AppComponent,
    * add links -- to the -- components

## How to get route information?

* use case
  * | user navigates,
    * pass information from one component -- to -- another component

* ways -- via -- using a route
  * [withComponentInputBinding](api/router/withComponentInputBinding) + `provideRouter` or
    * see [routing with url matcher](routing-with-urlmatcher.md)
  * `RouterModule.forRoot`'s `bindToComponentInputs` option
    * TODO: Which example to test it?

* types of route data key, value pairs / -- can be bound to -- component inputs
  * static
  * resolved route data
  * path parameters,
  * matrix parameters,
  * query parameters

* if you want to use the parent components route info -> set `withRouterConfig({paramsInheritanceStrategy: 'always'})`

* steps
  * | `app.config.ts`,
    * pass `withComponentInputBinding` | `provideRouter` method 
  * | Angular component
    * add an input property / 👀matches the parameter name 👀

## Setting up wildcard routes -- `**` --

* use case
  * users -- try to navigate to a -- part of your application / does NOT exist

* ALTERNATIVES to pages to redirect
  * specific 404 page
  * main component

* steps
  * `ng generate component PageNotFound`
    * == 404 page
  * | `app.routes.ts`
    * add a wildcard route -- to a -- generic error component / place the LAST one | list
      * Reason to place last: 🧠route order is important 🧠

## Setting up redirects

* see [router-tutorial](router-tutorial.md#adding-a-redirect)
* `redirectTo`
  * ALLOWED values
    * static redirect
    * function / returns a string or `UrlTree`

* _Example:_ [router tutorial](/adev/src/content/examples/router-tutorial) 

## Nesting routes

* child routes
  * 👀routes / relative to a component != root component 👀
    * -> 
      * use 2 `<router-outlet>` | your app
      * 👀configuration 
        * | `children`
        * == ANOTHER route 👀

* steps
  * `ng generate component child-a` & `ng generate component child-b`
  * | `FirstComponent`,
    * add another `<router-outlet>`
    * import `RouterOutlet`, `RouterLink`
  * | `app.routes.ts`
    * add routes | `children`

## Setting the page title

* TODO:
Each page in your application should have a unique title so that they can be identified in the browser history.
The `Router` sets the document's title using the `title` property from the `Route` config.

```ts
const routes: Routes = [
  {
    path: 'first-component',
    title: 'First component',
    component: FirstComponent,  // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'child-a',  // child route path
        title: resolvedChildATitle,
        component: ChildAComponent,  // child route component that the router renders
      },
      {
        path: 'child-b',
        title: 'child b',
        component: ChildBComponent,  // another child route component that the router renders
      },
    ],
  },
];

const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('child a');
```

HELPFUL: The `title` property follows the same rules as static route `data` and dynamic values that implement `ResolveFn`.

You can also provide a custom title strategy by extending the `TitleStrategy`.

```ts
@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`My Application | ${title}`);
    }
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
  ]
};
```

## Using relative paths

Relative paths let you define paths that are relative to the current URL segment.
The following example shows a relative route to another component, `second-component`.
`FirstComponent` and `SecondComponent` are at the same level in the tree, however, the link to `SecondComponent` is situated within the `FirstComponent`, meaning that the router has to go up a level and then into the second directory to find the `SecondComponent`.
Rather than writing out the whole path to get to `SecondComponent`, use the `../` notation to go up a level.

```angular-html
<h2>First Component</h2>

<nav>
  <ul>
    <li><a routerLink="../second-component">Relative Route to second component</a></li>
  </ul>
</nav>
<router-outlet></router-outlet>
```

In addition to `../`, use `./` or no leading slash to specify the current level.

### Specifying a relative route

To specify a relative route, use the `NavigationExtras` `relativeTo` property.
In the component class, import `NavigationExtras` from the `@angular/router`.

Then use `relativeTo` in your navigation method.
After the link parameters array, which here contains `items`, add an object with the `relativeTo` property set to the `ActivatedRoute`, which is `this.route`.

```ts
goToItems() {
  this.router.navigate(['items'], { relativeTo: this.route });
}
```

The `navigate()` arguments configure the router to use the current route as a basis upon which to append `items`.

The `goToItems()` method interprets the destination URI as relative to the activated route and navigates to the `items` route.

## Accessing query parameters and fragments

Sometimes, a feature of your application requires accessing a part of a route, such as a query parameter or a fragment.
In this example, the route contains an `id` parameter we can use to target a specific hero page.

```ts
import {ApplicationConfig} from "@angular/core";
import {Routes} from '@angular/router';
import {HeroListComponent} from './hero-list.component';

export const routes: Routes = [
  {path: 'hero/:id', component: HeroDetailComponent}
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
```

First, import the following members in the component you want to navigate from.

```ts
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
```

Next inject the activated route service:

```ts
constructor(private route: ActivatedRoute) {}
```

Configure the class so that you have an observable, `heroes$`, a `selectedId` to hold the `id` number of the hero, and the heroes in the `ngOnInit()`, add the following code to get the `id` of the selected hero.
This code snippet assumes that you have a heroes list, a hero service, a function to get your heroes, and the HTML to render your list and details, just as in the Tour of Heroes example.

```ts
heroes$: Observable<Hero[]>;
selectedId: number;
heroes = HEROES;

ngOnInit() {
  this.heroes$ = this.route.paramMap.pipe(
    switchMap(params => {
      this.selectedId = Number(params.get('id'));
      return this.service.getHeroes();
    })
  );
}
```

Next, in the component that you want to navigate to, import the following members.

```ts
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
```

Inject `ActivatedRoute` and `Router` in the constructor of the component class so they are available to this component:

```ts
hero$: Observable<Hero>;

constructor(
  private route: ActivatedRoute,
  private router: Router  ) {}

ngOnInit() {
  const heroId = this.route.snapshot.paramMap.get('id');
  this.hero$ = this.service.getHero(heroId);
}

gotoItems(hero: Hero) {
  const heroId = hero ? hero.id : null;
  // Pass along the hero id if available
  // so that the HeroList component can select that item.
  this.router.navigate(['/heroes', { id: heroId }]);
}
```

## Lazy loading

You can configure your routes to lazy load modules, which means that Angular only loads modules as needed, rather than loading all modules when the application launches.
Additionally, preload parts of your application in the background to improve the user experience.

Any route can lazily load its routed, standalone component by using `loadComponent:`

<docs-code header="Lazy loading a standalone component" language="typescript">

const routes: Routes = [
  {
    path: 'lazy',
    loadComponent: () => import('./lazy.component').then(c => c.LazyComponent)
  }
];
</docs-code>
This works as long as the loaded component is standalone.


For more information on lazy loading and preloading see the dedicated guide [Lazy loading](guide/ngmodules/lazy-loading).

## Preventing unauthorized access

Use route guards to prevent users from navigating to parts of an application without authorization.
The following route guards are available in Angular:

<docs-pill-row>
  <docs-pill href="api/router/CanActivateFn" title="`canActivate`"/>
  <docs-pill href="api/router/CanActivateChildFn" title="`canActivateChild`"/>
  <docs-pill href="api/router/CanDeactivateFn" title="`canDeactivate`"/>
  <docs-pill href="api/router/CanMatchFn" title="`canMatch`"/>
  <docs-pill href="api/router/ResolveFn" title="`resolve`"/>
  <docs-pill href="api/router/CanLoadFn" title="`canLoad`"/>
</docs-pill-row>

To use route guards, consider using [component-less routes](api/router/Route#componentless-routes) as this facilitates guarding child routes.

Create a file for your guard:

```bash
ng generate guard your-guard
```

In your guard file, add the guard functions you want to use.
The following example uses `canActivateFn` to guard the route.

```ts
export const yourGuardFunction: CanActivateFn = (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) => {
      // your  logic goes here
  }
```

In your routing module, use the appropriate property in your `routes` configuration.
Here, `canActivate` tells the router to mediate navigation to this particular route.

```ts
{
  path: '/your-path',
  component: YourComponent,
  canActivate: [yourGuardFunction],
}
```

## Link parameters array

A link parameters array holds the following ingredients for router navigation:

- The path of the route to the destination component
- Required and optional route parameters that go into the route URL

Bind the `RouterLink` directive to such an array like this:

```angular-html
<a [routerLink]="['/heroes']">Heroes</a>
```

The following is a two-element array when specifying a route parameter:

```angular-html
<a [routerLink]="['/hero', hero.id]">
  <span class="badge">{{ hero.id }}</span>{{ hero.name }}
</a>
```

Provide optional route parameters in an object, as in `{ foo: 'foo' }`:

```angular-html
<a [routerLink]="['/crisis-center', { foo: 'foo' }]">Crisis Center</a>
```

These three examples cover the needs of an application with one level of routing.
However, with a child router, such as in the crisis center, you create new link array possibilities.

The following minimal `RouterLink` example builds upon a specified default child route for the crisis center.

```angular-html
<a [routerLink]="['/crisis-center']">Crisis Center</a>
```

Review the following:

- The first item in the array identifies the parent route \(`/crisis-center`\)
- There are no parameters for this parent route
- There is no default for the child route so you need to pick one
- You're navigating to the `CrisisListComponent`, whose route path is `/`, but you don't need to explicitly add the slash

Consider the following router link that navigates from the root of the application down to the Dragon Crisis:

```angular-html
<a [routerLink]="['/crisis-center', 1]">Dragon Crisis</a>
```

- The first item in the array identifies the parent route \(`/crisis-center`\)
- There are no parameters for this parent route
- The second item identifies the child route details about a particular crisis \(`/:id`\)
- The details child route requires an `id` route parameter
- You added the `id` of the Dragon Crisis as the second item in the array \(`1`\)
- The resulting path is `/crisis-center/1`

You could also redefine the `AppComponent` template with Crisis Center routes exclusively:

```angular-ts
@Component({
  template: `
    <h1 class="title">Angular Router</h1>
    <nav>
      <a [routerLink]="['/crisis-center']">Crisis Center</a>
      <a [routerLink]="['/crisis-center/1', { foo: 'foo' }]">Dragon Crisis</a>
      <a [routerLink]="['/crisis-center/2']">Shark Crisis</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
```

In summary, you can write applications with one, two or more levels of routing.
The link parameters array affords the flexibility to represent any routing depth and any legal sequence of route paths, \(required\) router parameters, and \(optional\) route parameter objects.

## `LocationStrategy` and browser URL styles

* | router -- navigates to a -- NEW component view,
  * router
    * updates the browser's location
    * adds the URL | browser's history
    * loads & renders the appropriate component

* browsers
  * Modern HTML5 browsers 
    * support [history.pushState](https://developer.mozilla.org/docs/Web/API/History_API/Working_with_the_History_API#adding_and_modifying_history_entries)
      * == technique / 👀changes a browser's location and history -- WITHOUT -- triggering a server page request 👀
      * 💡== "HTML5 pushState" style 💡
      * _Example:_ Crisis Center URL  -- localhost:3002/crisis-center --
  * old browsers
    * 💡== "hash URL" style 💡
    * if location URL 
      * 👀BEFORE #, changes -> send -- page requests to the -- server 👀
      * 👀AFTER #, changes -> NO send -- page requests to the -- server 👀
    * _Example:_ "hash URL" / routes to the Crisis Center  -- localhost:3002/src/#/crisis-center --

* Angular Router
  * 👀supports BOTH styles -- via -- `LocationStrategy` providers 👀
  
  | Providers              | Details                            |
  | :--------------------- |:-----------------------------------|
  | `PathLocationStrategy` | == default "HTML5 pushState" style |
  | `HashLocationStrategy` | == "hash URL" style                |

  * 👀`RouterModule.forRoot()` -> `LocationStrategy` == `PathLocationStrategy` == default strategy 👀
    * 👀if you want to switch to `HashLocationStrategy` -> override | bootstrapping process 👀

* _Example:_ [app.config.ts' 3. case](../../examples/router/common-router-tasks/src/app/app.config.ts)

* see [Dependency Injection](guide/di/dependency-injection-providers)

## Choosing a routing strategy

You must choose a routing strategy early in the development of your project because once the application is in production, visitors to your site use and depend on application URL references.

Almost all Angular projects should use the default HTML5 style.
It produces URLs that are easier for users to understand and it preserves the option to do server-side rendering.

Rendering critical pages on the server is a technique that can greatly improve perceived responsiveness when the application first loads.
An application that would otherwise take ten or more seconds to start could be rendered on the server and delivered to the user's device in less than a second.

This option is only available if application URLs look like normal web URLs without hash \(`#`\) characters in the middle.

## `<base href>`

The router uses the browser's [history.pushState](https://developer.mozilla.org/docs/Web/API/History_API/Working_with_the_History_API#adding_and_modifying_history_entries 'HTML5 browser history push-state') for navigation.
`pushState` lets you customize in-application URL paths; for example, `localhost:4200/crisis-center`.
The in-application URLs can be indistinguishable from server URLs.

Modern HTML5 browsers were the first to support `pushState` which is why many people refer to these URLs as "HTML5 style" URLs.

HELPFUL: HTML5 style navigation is the router default.
In the [LocationStrategy and browser URL styles](#locationstrategy-and-browser-url-styles) section, learn why HTML5 style is preferable, how to adjust its behavior, and how to switch to the older hash \(`#`\) style, if necessary.

You must add a [`<base href>` element](https://developer.mozilla.org/docs/Web/HTML/Element/base 'base href') to the application's `index.html` for `pushState` routing to work.
The browser uses the `<base href>` value to prefix relative URLs when referencing CSS files, scripts, and images.

Add the `<base>` element just after the `<head>` tag.
If the `app` folder is the application root, as it is for this application, set the `href` value in `index.html` as shown here.

<docs-code header="src/index.html (base-href)" path="adev/src/content/examples/router/src/index.html" visibleRegion="base-href"/>

### HTML5 URLs and the `<base href>`

The guidelines that follow will refer to different parts of a URL.
This diagram outlines what those parts refer to:

<docs-code hideCopy language="text">
foo://example.com:8042/over/there?name=ferret#nose
\_/   \______________/\_________/ \_________/ \__/
 |           |            |            |        |
scheme    authority      path        query   fragment
</docs-code>

While the router uses the [HTML5 pushState](https://developer.mozilla.org/docs/Web/API/History_API#Adding_and_modifying_history_entries 'Browser history push-state') style by default, you must configure that strategy with a `<base href>`.

The preferred way to configure the strategy is to add a [`<base href>` element](https://developer.mozilla.org/docs/Web/HTML/Element/base 'base href') tag in the `<head>` of the `index.html`.

```angular-html
<base href="/">
```

Without that tag, the browser might not be able to load resources \(images, CSS, scripts\) when "deep linking" into the application.

Some developers might not be able to add the `<base>` element, perhaps because they don't have access to `<head>` or the `index.html`.

Those developers can still use HTML5 URLs by taking the following two steps:

1. Provide the router with an appropriate `APP_BASE_HREF` value.
1. Use root URLs \(URLs with an `authority`\) for all web resources: CSS, images, scripts, and template HTML files.

   - The `<base href>` `path` should end with a "/", as browsers ignore characters in the `path` that follow the right-most "`/`"
   - If the `<base href>` includes a `query` part, the `query` is only used if the `path` of a link in the page is empty and has no `query`.
     This means that a `query` in the `<base href>` is only included when using `HashLocationStrategy`.

   - If a link in the page is a root URL \(has an `authority`\), the `<base href>` is not used.
     In this way, an `APP_BASE_HREF` with an authority will cause all links created by Angular to ignore the `<base href>` value.

   - A fragment in the `<base href>` is _never_ persisted

For more complete information on how `<base href>` is used to construct target URIs, see the [RFC](https://tools.ietf.org/html/rfc3986#section-5.2.2) section on transforming references.

### `HashLocationStrategy`

* steps
  * | Angular traditional / NgModule-based
    * | `app-routing.module.ts`
      ```
      ...
      @NgModule({
        imports: [
          RouterModule.forRoot(routes, {useHash: true})
      ...
      ...
      
  * | Angular modern/standalone
    * | `app.config.ts`
      ```
      ...
        providers: [
          provideRouter(appRoutes, withHashLocation())
        ]
      ...
      ```

* _Example:_ [app.config.ts' 3. case](../../examples/router/common-router-tasks/src/app/app.config.ts)
