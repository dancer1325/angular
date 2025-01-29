import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomMenuComponent} from './custom-menu.component';
import {CustomMenuItemComponent} from '../custom-menu-item/custom-menu-item.component';
import {CustomSliderComponent} from '../custom-slider/custom-slider.component';
import {CustomCheckboxComponent} from '../custom-checkbox/custom-checkbox.component';
import {OverlayManagerService} from '../overlay-manager.service';
import {BrowserModule} from '@angular/platform-browser';

const SOME_COMPONENTS_IN_ARRAY = [CustomMenuComponent, CustomMenuItemComponent];

@NgModule({
  // declare NgModule's components, A) included | ARRAY, B) individually
  declarations: [SOME_COMPONENTS_IN_ARRAY, CustomSliderComponent, CustomCheckboxComponent],
  imports: [CommonModule, BrowserModule], //  BrowserModule       required | use as NgModule -- to -- bootstrap
  bootstrap: [CustomMenuComponent],
  providers: [OverlayManagerService],
})
export class CustomMenuModule {}
