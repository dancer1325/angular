import {Injectable} from '@angular/core';
import {LoggerService} from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class EvenBetterLoggerService extends LoggerService {
  constructor() {
    super();
  }

  override log() {
    super.log(`EvenBetterLoggerService`);
  }
}
