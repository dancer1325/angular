import {Component} from '@angular/core';
import {LoggerService} from '../logger.service';
import {EvenBetterLoggerService} from '../even-better-logger.service';
import {NewLoggerService} from '../new-logger.service';
import {OldLoggerService} from '../old-logger.service';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrl: './another.component.css',
  standalone: true,
  providers: [
    // configure DI -- via -- `ClassProvider`
    {provide: LoggerService, useClass: EvenBetterLoggerService}, // EvenBetterLoggerService  is instantiated

    // configure DI -- via -- `useExisting`
    NewLoggerService,
    {provide: OldLoggerService, useExisting: NewLoggerService},
  ],
})
export class AnotherComponent {
  log: string;
  constructor(
    logger: EvenBetterLoggerService,
    newLogger: NewLoggerService,
    oldLogger: OldLoggerService,
  ) {
    // EvenBetterLoggerService        -- instantiated via `new`, by the -- injector
    logger.log();
    this.log = logger.logs[0];

    newLogger.log();
    oldLogger.log(); // ALTHOUGH, it's typed by `OldLoggerService`, injected -- as -- NewLoggerService -> == newLogger.log();
  }
}
