import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="profileForm">
      <input type="text" formControlName="name" name="name" />
      <input type="email" formControlName="email" name="email" />

      <!-- FormGroup.valid      FormGroup's built-in class property -->
      <button type="submit" [disabled]="!profileForm.valid">Submit</button>
    </form>
  `,
  imports: [ReactiveFormsModule],
  standalone: true,
})
export class AppComponent {
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required), // pass your wished Validators | FormControls
    email: new FormControl('', [Validators.required, Validators.email]),
  });
}
