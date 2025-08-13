import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {interval} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {PassInjectionContextComponent} from './pass-injection-context/pass-injection-context.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PassInjectionContextComponent],
  templateUrl: './app.component.html',
  standalone: true
})
export class AppComponent {
  title = 'takeUntilDestroyed';
  counter = 0;
  constructor() {
    interval(1000)
      .pipe(takeUntilDestroyed())   // destroyRef is NOT passed, because it's | injection context
      .subscribe(value => {
        console.log("destroyRef is NOT passed - next ", value)    // ❌ALTHOUGH you kill the angular app, AppComponent root NOT destroyed❌ -> ⚠️keep on emitting⚠️
        this.counter = value
      });
  }
}
