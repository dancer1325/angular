import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  standalone: true,
  name: 'starPipe',
})
export class StarPipePipe implements PipeTransform {
  transform(value: string): string {
    return `⭐️ ${value} ⭐️`;
  }
}
