import { Pipe, PipeTransform } from '@angular/core';
import { capitalizeTransformer } from '../functions/capitalizeTransformer';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    return capitalizeTransformer(value);
  }
}
