import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OldLoggerService {
  log() {
    // tslint:disable-next-line:no-console
    console.log(`OldLoggerService`);
  }
}
