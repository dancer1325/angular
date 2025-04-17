# Angular DevTools Overview

* == browser extension / 
  * enables for Angular applications, 
    * debug
    * profiling 
  * "Angular" tab

* [video](https://www.youtube.com/embed/bavWOHZM6zE)
  * requirements
    * Angular app / development mode
  * if you ping the extension | browser & it becomes red == you can debug 
  * allows
    * preview the
      * application's component tree
      * component's metadata / properties / ..
    * profiler events
      * == record change detection events
  * TODO:

* ways to install
  * | [Chrome Web Store](https://chrome.google.com/webstore/detail/angular-developer-tools/ienfalfjdbdpebioblfackkekamfmbnh) OR
  * | [Firefox Addons](https://addons.mozilla.org/firefox/addon/angular-devtools/)

![](/adev/src/assets/images/guide/devtools/devtools.png)

## Open your application

| DevTools' Tabs                        | Details                                                                                                                                                 |
|:--------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Components](#debug-your-application) | Lets you <br/> &nbsp;&nbsp; explore your application's components & directives <br/> &nbsp;&nbsp; preview or edit application's state                   |
| [Profiler](#profile-your-application) | Lets you <br/> &nbsp;&nbsp; profile your CURRENT application's execution events <br/> &nbsp;&nbsp; import an EXISTING profile -- from a -- previous run |
| [Profiler](#Injector-Tree)            | Lets you <br/> &nbsp;&nbsp; inspecting your injectors                                                                                                   |

* | top-right corner,
  * display 
    * Angular version / used by your application
    * extension's latest commit hash  
    ![](/adev/src/assets/images/guide/devtools/devtools-tabs.png)

### Troubleshoot
* | open Angular DevTools, Angular application not detected
  * error message /
    * == NOT able to -- communicate with an -- Angular app
  * (possible) Reason: 🧠web page / you are inspecting -- NOT contain an Angular application 🧠
* "We detected an application built with production configuration. Angular DevTools only supports development builds."
  * error message / Angular application was compiled -- with -- production optimizations
    * == removed various debug features
      * Reason: 🧠 minimize the amount of the JavaScript -- to improve -- performance🧠
      * _Example:_ features / communicate -- with -- DevTools
    * Solution: 💡compile your application -- with -- optimizations disabled💡
      * | build, `{"optimization": false}`
        * [`optimization` configuration option](reference/configs/workspace-config#optimization-configuration) 
      * _Example:_ by default, `ng serve`

## Debug your application

### How to explore the application structure?

* | components tabs
  * | left side, component tree
    ![](/adev/src/assets/images/guide/devtools/component-explorer.png)
  * if you click | individual component OR directive -> | right side, preview their properties & metadata
  * search box -- to look up -- the component tree
  ![](/adev/src/assets/images/guide/devtools/search.png)

### Navigate to the host node (== | Chrome's Elements tab OR Firefox's Inspector tab)

* | Components tab,
  * double-click | individual component

### Navigate to source ( == | Chrome's Sources tab OR Firefox's Debugger tab)

* | Components tab's right side
  * click the icon | top-right
  ![](/adev/src/assets/images/guide/devtools/navigate-source.png)

### Update property value

* | Components tab's right side
  * right-click | property value & edit
  ![](/adev/src/assets/images/guide/devtools/update-property.png)

### Access 👀RECENTLY selected👀 component or directive | Browser's console

* | browser's console
  * `$ng0` 
    * get a reference to the instance of the CURRENTLY SELECTED component or directive 
  * `$ng1`, `$ng2`, ...
    * previously selected instance
  ![](/adev/src/assets/images/guide/devtools/access-console.png)

### Select a directive or component

* == browsers' DevTools
* allows
  * inspecting the page -- to -- select a PARTICULAR component or directive
* steps
  * | top left corner
    * click the ***Inspect element*** icon
  * hove over the page

![](/adev/src/assets/images/guide/devtools/inspect-element.png)

## Profile your application

* uses
  * determine when & how change detection -- impacts -- your application's performance

* if you want to profile | CURRENT application -> | Profiler tab, click "Start recording" 
  ![](/adev/src/assets/images/guide/devtools/profiler.png)


* _Example of execution events:_
  * change detection
  * lifecycle hook execution

* [Import recording](tools/devtools#import-and-export-recordings)

### Understand your application's execution

* displays change detection cycles
  ![](/adev/src/assets/images/guide/devtools/default-profiler-view.png)
  * EACH bar
    * == change detection cycle | your app
    * the taller a bar is -> the longer, the application spent running change detection | this cycle
  * | select a bar, displays
    * bar chart / ALL components & directives captured | this cycle
    * How much time Angular spent running change detection | this cycle
    * estimated frame rate / experienced by the user
    * source / triggered change detection
  
    ![](/adev/src/assets/images/guide/devtools/profiler-selected-bar.png)

### Understand component execution

* TODO:
The bar chart displayed after clicking on a change detection cycle displays a detailed view about how much time your application spent running change detection in that particular component or directive.

This example shows the total time spent by the `NgForOf` directive and which method was called on it.

![](/adev/src/assets/images/guide/devtools/directive-details.png)
It includes a with exactly one row, listing `NgForOf` as a directives with an `ngDoCheck` method which took 1.76 ms. 
It also includes a list labeled 'Parent Hierarchy' containing the parent components of this directive.">

### Hierarchical views

<img src="assets/images/guide/devtools/flame-graph-view.png" alt="A screenshot of the 'Profiler' tab. A single bar has been selected by the user and a nearby dropdown menu now displays 'Flame graph', showing a flame graph underneath it. The flame graph starts with a row called 'Entire application' and another row called 'AppComponent'. Beneath those, the rows start to break up into multiple items, starting with `[RouterOutlet]` and `DemoAppComponent` on the third row. A few layers deep, one cell is highlighted red.">

You can also visualize the change detection execution in a flame graph-like view.

Each tile in the graph represents an element on the screen at a specific position in the render tree.
For example, consider a change detection cycle where a `LoggedOutUserComponent` is removed and in its place Angular rendered a `LoggedInUserComponent`. In this scenario both components will be displayed in the same tile.

The x-axis represents the full time it took to render this change detection cycle.
The y-axis represents the element hierarchy. Running change detection for an element requires render its directives and child components.
Together, this graph visualizes which components are taking the longest time to render and where that time is going.

Each tile is colored depending on how much time Angular spent there.
Angular DevTools determines the intensity of the color by the time spent relative to the tile where rendering took the most time.

When you click on a certain tile, you'll see details about it in the panel on the right.
Double-clicking the tile zooms it in so you can more easily view its nested children.

### Debug change detection and `OnPush` components

Normally, the graph visualizes the time it takes to *render* an application, for any given change detection frame. However some components such as `OnPush` components will only re-render if their input properties change. It can be useful to visualize the flame graph without these components for particular frames.

To visualize only the components in a change detection frame that went through the change detection process, select the **Change detection** checkbox at the top, above the flame graph.

This view highlights all the components that went through change detection and displays those that did not in gray, such as `OnPush` components that did not re-render.

<img src="assets/images/guide/devtools/debugging-onpush.png" alt="A screenshot of the 'Profiler' tab displaying a flame chart visualization of a change detection cycle. A checkbox labeled 'Show only change detection' is now checked. The flame graph looks very similar to before, however the color of components has changed from orange to blue. Several tiles labeled `[RouterOutlet]` are no longer highlighted with any color.">

### Import and export recordings

Click the **Save Profile** button at the top-right of a recorded profiling session to export it as a JSON file and save it to the disk.
Later, import the file in the initial view of the profiler by clicking the **Choose file** input.

<img src="assets/images/guide/devtools/save-profile.png" alt="A screenshot of the 'Profiler' tab displaying change detection cycles. On the right side a 'Save Profile' button is visible.">

## Injector Tree

* allows
  * inspecting your injectors
* requirements
  * Angular v17+

### View your application's injector hierarchy 

* 2 tress / represent [injector hierarchy](guide/di/hierarchical-dependency-injection)
  ![](/adev/src/assets/images/guide/devtools/di-injector-tree.png)

### Visualize resolution paths

* if you select a specific injector -> highlight path / Angular's dependency injection algorithm traverses from root -- to -- that injector
  * [resolution rules](guide/di/hierarchical-dependency-injection#resolution-rules)
  ![](/adev/src/assets/images/guide/devtools/di-injector-tree-selected.png)

### View injector providers

* | click an injector,
  * display the configured providers
  ![](/adev/src/assets/images/guide/devtools/di-injector-tree-providers.png)
