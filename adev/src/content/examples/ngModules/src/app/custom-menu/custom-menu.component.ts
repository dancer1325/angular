import {Component, inject} from '@angular/core';
import {OverlayManagerService} from '../overlay-manager.service';

@Component({
  selector: 'app-custom-menu',
  templateUrl: './custom-menu.component.html',
  styleUrl: './custom-menu.component.css',
  //standalone: true      // ⚠️if you declare as standalone -> can NOT be included | declarations ⚠️
  standalone: false,
})
export class CustomMenuComponent {
  //  PROOF            NgModule's `providers`' entry can be injected | NgModule's `declarations`' entry
  overlayManagerService: OverlayManagerService = inject(OverlayManagerService);

  constructor() {
    this.overlayManagerService.showOverlay();
  }
}
