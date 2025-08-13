import {Component, DestroyRef, inject} from '@angular/core';
import {fromEvent} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-pass-injection-context',
  templateUrl: './pass-injection-context.component.html',
  standalone: true
})
export class PassInjectionContextComponent {
  private destroyRef = inject(DestroyRef);

  // trigger onClick & AFTERWARDS, an Observable | document's mousemove
  onClick() {
    fromEvent(document, 'mousemove')
      .pipe(takeUntilDestroyed(this.destroyRef))          // pass EXPLICITLY the DestroyRef
      .subscribe(event => console.log('destroyRef is passed - next ', event));
  }
}
