import { Injectable } from '@angular/core';
import {SelectItem} from 'primeng/primeng';

@Injectable()
export class ServiceUtilsService {

  constructor() { }

  /** Function to return a years SelectItem list from 2010 to system year + 10 years
   * @return yearSelectItems
   * */
  getYearSelectItems(): SelectItem[] {
    const yearSelectItems: SelectItem[] = [];
    for ( let i = 2010 ; i <= new Date().getFullYear() + 10 ; i++ ) {
      yearSelectItems.push({label: i.toString(), value: i});
    }
    return yearSelectItems
  }


}
