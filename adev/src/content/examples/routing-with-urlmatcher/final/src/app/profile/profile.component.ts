import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  standalone: true,
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  @Input() username!: string;
}
