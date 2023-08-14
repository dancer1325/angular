// TODO: Why is afterRender not found?
//import {Component, ViewChild, afterRender} from '@angular/core';
import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'aio-after-render-component',
  templateUrl: './after-render-component.component.html',
  styles: [
  ]
})
export class AfterRenderComponentComponent {
  //@ViewChild('content') contentRef: ElementRef;

  constructor() {
    // afterRender(() => {
    //   const elem = this.contentRef.nativeElement;
    //   console.log(`content position: (${elem.offsetLeft}, ${elem.offsetTop})`);
    // });
  }
}
