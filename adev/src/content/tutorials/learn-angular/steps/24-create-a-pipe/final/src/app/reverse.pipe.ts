import {Pipe, PipeTransform} from '@angular/core';

// REQUIRED decorator
@Pipe({
  name: 'reverse', // used -- to make the -- transformation
  standalone: true,
})
export class ReversePipe implements PipeTransform {
  // REQUIRED method of ANY Pipe
  transform(value: string): string {
    let reverse = '';

    for (let i = value.length - 1; i >= 0; i--) {
      reverse += value[i];
    }

    return reverse;
  }
}
