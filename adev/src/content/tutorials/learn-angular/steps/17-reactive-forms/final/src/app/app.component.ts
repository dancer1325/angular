import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
      <!-- formControlName's value -- is associated with the -- class's FormControl
      <input type="text" formControlName="names" /> -->
      <input type="text" formControlName="name" />
      <input type="email" formControlName="email" />
      <button type="submit">Submit</button>
    </form>

    <h2>Profile Form</h2>
    <p>Name: {{ profileForm.value.name }}</p>
    <p>Email: {{ profileForm.value.email }}</p>
  `,
  imports: [ReactiveFormsModule],
  standalone: true,
})
export class AppComponent {
  profileForm = new FormGroup({
    //  FormGroup     group form controls
    name: new FormControl(''), // FormControl    -- represent -- form controls (_Example:_ inputs)
    email: new FormControl(''),
  });

  handleSubmit() {
    // access FormGroup's values -- via associated -- class' property
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }
}
