import {Component} from '@angular/core';
import {NgOptimizedImage, provideImgixLoader} from '@angular/common';

@Component({
  selector: 'app-child',
  template: `
    <ul>
      <li>
        Image loader
        <br>
        <!-- image loader  -->
        <!-- TODO: How does it work?       -->
        <img ngSrc="image.png" height="600" width="800" />
      </li>
    </ul>
  `,
  imports: [NgOptimizedImage],
  providers: [
    provideImgixLoader('https://upload.wikimedia.org/wikipedia/commons/e/e5/Noether.jpg'), // for image loader
  ],
})
export class ChildComponent {}
