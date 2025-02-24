import {Component, Inject} from '@angular/core';
import {LoggerService} from './logger.service';
import {AnotherComponent} from './another/another.component';
import {APP_CONFIG, AppConfig} from './app.config';

const MY_APP_CONFIG_VARIABLE: AppConfig = {
  title: 'Hello',
};

@Component({
  selector: 'app-root',
  template: '<h1>DI providers</h1>' + '<app-another></app-another>',
  styleUrl: './app.component.css',
  providers: [
    LoggerService,
    {provide: APP_CONFIG, useValue: MY_APP_CONFIG_VARIABLE},

    // // interface -- can NOT be used as -- provider token
    //{provide: AppConfig, useValue: MY_APP_CONFIG_VARIABLE}
  ],
  standalone: true,
  // service class -- specified as -- provider token
  imports: [AnotherComponent],
})
export class AppComponent {
  title = 'final';
  log: string;

  // inject the configuration object | constructor -- via -- `@Inject()`
  constructor(logger: LoggerService, @Inject(APP_CONFIG) config: AppConfig) {
    // interface -- can NOT be injected as -- parameter type
    // constructor(logger: LoggerService, config: AppConfig) {

    // LoggerService        -- instantiated via `new`, by the -- injector
    logger.log('Hello from logger provided with Logger class');
    this.log = logger.logs[0];
    this.title = config.title;
  }
}
