// TODO: Why afterNextRender is not found?
// import {Component, ElementRef, ViewChild, afterNextRender} from '@angular/core';
import {Component, ElementRef, ViewChild} from '@angular/core';

import {AfterNextRenderObjectType} from "./after-next-render-component.model";

@Component({
  selector: 'aio-after-next-render-component',
  templateUrl: './after-next-render-component.component.html',
  styles: [
  ]
})
export class AfterNextRenderComponentComponent {
  //@ViewChild('chart') chartRef: ElementRef;
  //chart: AfterNextRenderObjectType|null;

  constructor() {
    // afterNextRender(() => {
    //   this.chart = new AfterNextRenderObjectType(this.chartRef.nativeElement);
    // });
  }

}
