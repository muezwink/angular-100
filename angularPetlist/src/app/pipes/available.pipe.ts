import { Pipe, PipeTransform } from '@angular/core';
import {Item} from '../classes/item';

@Pipe({
  name: 'available'
})
export class AvailablePipe implements PipeTransform {

  transform(allitems: Item[]): any {
    return allitems.filter(item => item.available);
  }

}
