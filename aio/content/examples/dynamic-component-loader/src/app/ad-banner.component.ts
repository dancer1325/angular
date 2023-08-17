// #docregion
import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { AdDirective } from './ad.directive';
import { AdItem } from './ad-item';
import { AdComponent } from './ad.component';

@Component({
  selector: 'app-ad-banner',
  // #docregion ad-host
  template: `
    <!-- class      able to find it, because it's declared globally under /assets   -->
    <div class="ad-banner-example">
      <h3>Advertisements</h3>
      <!-- adHost   is the directive added to ngTemplate which hosts the dynamic components -->
      <!-- ng-template      is not rendered by default, and don't add any additional HTML element -->
      <ng-template adHost></ng-template>
    </div>
  `
  // #enddocregion ad-host
})
// #docregion class
export class AdBannerComponent implements OnInit, OnDestroy {
  // Objects to load
  @Input() ads: AdItem[] = [];

  currentAdIndex = -1;

  // Query for a VIEW child of type `AdDirective`
  // static       resolve query results previous to run change detection
  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;

  // Pattern: declaring function overloads
  // Declare the function's signature and afterwards adding the implementation
  private clearTimer: VoidFunction | undefined;

  // Function's implementation is added here, during getAds()
  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

  // clearTimer   has got its implementation, because it has been added during the ngOnInit
  ngOnDestroy() {
    this.clearTimer?.();
  }

  loadComponent() {
    // Logic to choose which Item
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    // Use AdDirective
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    //  createComponent<AdComponent>()     component is added to the template
    // AdComponent      because all components implement it
    const componentRef = viewContainerRef.createComponent<AdComponent>(adItem.component);
    // assign the properties
    componentRef.instance.data = adItem.data;
  }

  // Cyclic method to load new components
  getAds() {
    const interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
    this.clearTimer = () => clearInterval(interval);
  }
}
// #enddocregion class
