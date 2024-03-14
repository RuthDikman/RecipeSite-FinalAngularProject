import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;

    if (hours > 0 && minutes > 0) {
      return `${hours} שעות${hours > 1 ? '' : ''} ו- ${minutes} דקות${minutes > 1 ? '' : ''}`;
    } else if (hours > 0) {
      return `${hours} שעות${hours > 1 ? '' : ''}`;
    } else {
      return `${minutes} דקות${minutes > 1 ? '' : ''}`;
    }
  }
}
