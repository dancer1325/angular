import {Component} from '@angular/core';
import {ReversePipe} from './reverse.pipe';
import {StarPipePipe} from './star-pipe.pipe';

@Component({
  selector: 'app-root',
  template: `
    Reverse Machine: {{ word | reverse }}
    <br>
    Start Machine: {{ word | starPipe }}
  `,
  imports: [ReversePipe, StarPipePipe],
  standalone: true,
})
export class AppComponent {
  word = 'You are a champion';
}
