import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  template: `
    <!-- [someAttribute]    attribute binding-->
    <div [contentEditable]="isEditable"></div>
  `,
})
export class AppComponent {
  isEditable = true;
}
