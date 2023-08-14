import { Component, inject, DestroyRef } from '@angular/core';

@Component({
  selector: 'aio-counter-destroy-ref',
  templateUrl: './counter-destroy-ref.component.html',
  styles: [
  ]
})
export class CounterDestroyRefComponent {
  count = 0;
  constructor() {
    // Start a timer to increment the counter every second.
    const id = setInterval(() => this.count++, 1000);

    // Stop the timer when the component is destroyed.
    const destroyRef = inject(DestroyRef);
    // destroyRef.onDestroy(() => this.callBackDestroyRef(id, this.count));
    destroyRef.onDestroy(() => this.callBackDestroyRefWithoutClearingInterval(this.count));
  }

  // TODO: Fix "Cannot find namespace NodeJS" declaring the argument NodeJS.Timeout
  // callBackDestroyRef(id: NodeJS.Timeout, count: number) {
  //   console.log("CounterDestroyRefComponent onDestroy callback with id " + count);
  //   clearInterval(id);
  // }

  callBackDestroyRefWithoutClearingInterval(count: number) {
    console.log("CounterDestroyRefComponent onDestroy callback with count " + count);
  }

}
