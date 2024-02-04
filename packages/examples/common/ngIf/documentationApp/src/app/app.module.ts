import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CommonModule} from "@angular/common";
import { CssSelectorComponent } from './css-selector/css-selector.component';
import { ExpressionComponent } from './expression/expression.component';
import { PropertiesComponent } from './properties/properties.component';

@NgModule({
  declarations: [
    AppComponent,
    CssSelectorComponent,
    ExpressionComponent,
    PropertiesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule  //  It's NOT necessary to import, because BrowserModule imports it internally!!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
