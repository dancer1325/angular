import {Component} from '@angular/core';
import {NgOptimizedImage, provideImgixLoader} from '@angular/common';

@Component({
  selector: 'app-user',
  template: `
    <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img ngSrc="/assets/logo.svg" alt="Angular logo" width="32" height="32" />
      </li>
      <li>
        Dynamic Image:
        <!-- [ngSrc]    with [], because it's dynamic -> property binding needed-->
        <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />

        <!-- fill   attribute, skips specifying height and width -->
        <img ngSrc="/assets/logo.svg" fill alt="Test fill attribute"/>

        <!-- priority   attribute, skips specifying height and width -->
        <img ngSrc="/assets/logo.svg" priority alt="Test priority attribute" height="600" width="800"/>

        <!-- image loader  -->
        <img ngSrc="image.png" height="600" width="800" />
      </li>
    </ul>
  `,
  imports: [NgOptimizedImage],
  providers: [
    provideImgixLoader('https://my.base.url/'), // for image loader
  ],
})
export class UserComponent {
  logoUrl = '/assets/logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
}
