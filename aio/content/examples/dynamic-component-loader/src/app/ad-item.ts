// #docregion
import { Type } from '@angular/core';

export class AdItem {
  // All fields are defined by constructor's arguments
  // Type     an Angular component could be a Type
  constructor(public component: Type<any>, public data: any) {}
}
