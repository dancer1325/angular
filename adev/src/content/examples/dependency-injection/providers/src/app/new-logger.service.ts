import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewLoggerService {
  log() {
    // tslint:disable-next-line:no-console
    console.log(`NewLoggerService`);
  }
}
