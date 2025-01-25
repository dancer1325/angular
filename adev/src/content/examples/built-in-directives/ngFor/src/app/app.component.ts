import {Component} from '@angular/core';
import {NgFor} from '@angular/common';
import {ItemDetailComponent} from './item-detail/item-detail.component';
import {ItemDetailWithInputsComponent} from './item-detail-with-inputs/item-detail-with-inputs.component';

@Component({
  selector: 'app-root',
  imports: [NgFor, ItemDetailComponent, ItemDetailWithInputsComponent],
  template: `
    <!-- 1. display a list of items-->
    <!-- 1.1  *ngFor   ==  shorthand syntax -->
    <div *ngFor="let item of items">{{ item.name }}</div>
    <!-- 1.2 PREVIOUS item is ⚠️local looping variable ⚠️-->
    <!--<p>{{item}}</p>-->    <!-- if you uncomment this line fails-->
    <!-- 1.3 get the index of iteration-->
    <div *ngFor="let item of items; let i=index">index: {{i}} - item: {{ item.name }}</div>
    <!-- 1.4 trackBy -->
    <!-- TODO: How to check re-render ONLY | item / have changed? -->
    <div *ngFor="let item of items; trackBy:trackByItemsById"> trackBy - item: {{ item.name }}</div>

    <!-- 2. repeat an Angular component -->
    <app-item-detail *ngFor="let item of items" />
    <!-- INVALID    shorthand syntax-->
    <!--<app-item-detail *ngFor="items" />-->     <!-- if you uncomment this line fails-->
    <!-- 2.1 passing EACH list item -- as input, to -- child component -->
    <app-item-detail-with-inputs *ngFor="let item of items" [item]="item" />
  `,
  standalone: true,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ngFor';
  items = [{name: 'Item 1'}, {name: 'Item 2'}, {name: 'Item 3'}];

  trackByItemsById(index: number, item: any): number {
    // tslint:disable-next-line:no-console
    console.log(`trackByItemsById ${index} & ${item}`, index, item);
    return item.id;
  }
}
