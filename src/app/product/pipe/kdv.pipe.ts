import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kdv'
})
export class KdvPipe implements PipeTransform {

  transform(value: number,  args?: number, ): number {
    let vatPercentage = 18;
    if (args) {
      vatPercentage = args;
    }
    return value + (value / 100 * vatPercentage);
  }

}
