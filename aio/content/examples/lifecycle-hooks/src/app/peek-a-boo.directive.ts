import { Directive, OnInit } from '@angular/core';

import { LoggerService } from './logger.service';

// Global variable, because it's lifecycle doesn't depend on PeekABooDirective's life
let nextId = 1;

// #docregion ngOnInit
@Directive({selector: '[appPeekABoo]'})
export class PeekABooDirective implements OnInit {
  constructor(private logger: LoggerService) { }

  // implement OnInit's `ngOnInit` method
  ngOnInit() {
    this.logIt('OnInit');
  }

  logIt(msg: string) {
    this.logger.log(`#${nextId++} ${msg}`);
  }
}
// #enddocregion ngOnInit
