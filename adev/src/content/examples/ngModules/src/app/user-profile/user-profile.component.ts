import {Component, inject} from '@angular/core';
import {OverlayManagerService} from '../overlay-manager.service';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  //  PROOF            NgModule's `providers`' entry can be inherited injected | NgModule's `declarations`' entry
  overlayManagerService: OverlayManagerService = inject(OverlayManagerService);

  constructor() {
    this.overlayManagerService.showOverlay();
  }
}
