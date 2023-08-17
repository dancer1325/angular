/* eslint-disable @angular-eslint/directive-selector */
// #docregion
import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[adHost]',
})
export class AdDirective {
  // Get access to the view container
  constructor(public viewContainerRef: ViewContainerRef) { }
}

