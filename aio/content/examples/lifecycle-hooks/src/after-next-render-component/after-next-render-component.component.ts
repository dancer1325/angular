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

  resizeObserver: ResizeObserver|null = null;
  @ViewChild('content') contentRef: ElementRef;

  constructor() {
    // afterNextRender(() => {
    //   this.chart = new AfterNextRenderObjectType(this.chartRef.nativeElement);
    // });

    // Use built-in browser APIs (ResizeObserver or IntersectionObserver)
    // afterNextRender(() => {
    //   this.resizeObserver = new ResizeObserver(() => {
    //     console.log('Content was resized');
    //   });
    //
    //   this.resizeObserver.observe(this.contentRef.nativeElement);
    // });
  }

  // ngOnDestroy() {
  //   this.resizeObserver?.disconnect();
  //   this.resizeObserver = null;
  // }

}
