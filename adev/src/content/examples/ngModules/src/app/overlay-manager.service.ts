import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OverlayManagerService {
  constructor() {}

  showOverlay() {
    // tslint:disable-next-line:no-console
    console.log('Overlay shown');
  }
}
