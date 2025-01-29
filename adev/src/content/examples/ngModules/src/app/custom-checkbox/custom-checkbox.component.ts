import {Component, inject} from '@angular/core';
import {OverlayManagerService} from '../overlay-manager.service';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrl: './custom-checkbox.component.css',
  standalone: false,
})
export class CustomCheckboxComponent {
  //  PROOF            NgModule's `providers`' entry can be injected | NgModule's `declarations`' entry
  overlayManagerService: OverlayManagerService = inject(OverlayManagerService);

  constructor() {
    this.overlayManagerService.showOverlay();
  }
}
