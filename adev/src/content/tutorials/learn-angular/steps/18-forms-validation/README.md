# Validating forms

* goal
  * how to validate reactive forms 

* use case
  * validate the inputs 
    * Reason: 🧠 ensure the correct data is submitted 🧠

* steps
  * import `@angular/forms.Validators`
  * pass your wished `Validators` | `FormControl`
    * if you make mandatory a form control -> pass `Validators.required`
    * if you check email pattern -> pass `Validators.email`

* `FormGroup.valid`
  * == `FormGroup`'s class property

* see [Angular forms documentation](../../../../guide/forms/form-validation)
