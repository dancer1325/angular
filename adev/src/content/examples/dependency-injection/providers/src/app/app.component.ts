import {Component} from '@angular/core';
import {LoggerService} from './logger.service';
import {AnotherComponent} from './another/another.component';

@Component({
  selector: 'app-root',
  template: '<h1>DI providers</h1>' + '<app-another></app-another>',
  styleUrl: './app.component.css',
  providers: [LoggerService],
  standalone: true,
  // service class -- specified as -- provider token
  imports: [AnotherComponent],
})
export class AppComponent {
  title = 'final';

  log: string;
  constructor(logger: LoggerService) {
    // LoggerService        -- instantiated via `new`, by the -- injector
    logger.log('Hello from logger provided with Logger class');
    this.log = logger.logs[0];
  }
}
