import {platformBrowser} from '@angular/platform-browser';
import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {AppComponent} from './app/app.component';
import {CustomMenuModule} from './app/custom-menu/custom-menu.module';

// comment it, to test bootstrap -- via -- NgModule
//bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

// bootstrap via NgModule
platformBrowser()
  .bootstrapModule(CustomMenuModule)
  .catch((err) => console.error(err));
