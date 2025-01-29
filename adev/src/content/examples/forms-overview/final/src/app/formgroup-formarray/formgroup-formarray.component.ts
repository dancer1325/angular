import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-formgroup-formarray',
  template: `
    <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
      <!-- Basic FormGroup controls -->
      <div formGroupName="personalInfo">
        <input formControlName="firstName" placeholder="First Name">
        <input formControlName="lastName" placeholder="Last Name">
      </div>

      <!-- FormArray for multiple addresses -->
      <!-- TODO: Fix addresses    -->
<!--      <div formArrayName="addresses">
        <div *ngFor="let address of addresses.controls; let i=index"
             [formGroupName]="i">
          <input formControlName="street" placeholder="Street">
          <input formControlName="city" placeholder="City">
          <button type="button" (click)="removeAddress(i)">Remove</button>
        </div>
      </div>-->
    </form>
  `,
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  styleUrl: './formgroup-formarray.component.css',
})
export class FormgroupFormarrayComponent {
  userForm: FormGroup;

  // TODO: Comprehend FormBuilder
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      personalInfo: this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
      }),
      addresses: this.fb.array([]),
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      // tslint:disable-next-line:no-console
      console.log(this.userForm.value);
    }
  }
}
