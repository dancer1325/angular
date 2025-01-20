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
        Dynamic Image1:
        <!-- [ngSrc]    with [], because it's dynamic -> property binding needed-->
        <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
      </li>
      <li>
        Dynamic Image2:
        <!-- fill      attribute, skips specifying height and width     -- check how it fills ALL image -->
        <img ngSrc="/assets/logo.svg" fill alt="Test fill attribute"/>
      </li>
      <li>
        Dynamic Image3:
        <!-- priority   attribute, skips specifying height and width -->
        <!-- TODO: how does priority work? -->
        <img ngSrc="/assets/logo.svg" priority alt="Test priority attribute" height="600" width="800"/>
      </li>
    </ul>
  `,
  imports: [NgOptimizedImage],
})
export class UserComponent {
  logoUrl = '/assets/logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
}
