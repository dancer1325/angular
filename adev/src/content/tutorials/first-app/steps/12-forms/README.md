# Adding a form to your Angular app

* goal
  * how to add a form
    * -- via -- Angular's forms feature
    * / data captured -- is connected, via an event handler, to a -- component & print it | console

* form
  * allows
    * collecting user data | Angular app

* [Youtube](https://www.youtube.com/embed/kWbk-dOJaNQ?si=FYMXGdUiT-qh321h)

* `FormGroup` and `FormControl`
  * enable to build forms
  * `FormControl`
    * -- can provide a -- default value
    * shape the form data

* steps
  * | `HousingService`,
    * add a method / received the form's data
  * | `details.component.ts`,
    * add the form functions
      * `imports: [ReactiveFormsModule, ...],`
      * `applyForm = new FormGroup({..})`
    * add  `submitApplication() {}`
    * adjust template with another `<section>` / contains the `<form>`

* see
  * [Angular Forms](../../../../guide/forms)
  * [Event Handling](../../../../guide/templates/event-listeners)
  