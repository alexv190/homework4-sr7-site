import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public transformToOnlyDate(date:Date):number {
    return date.setHours(0, 0, 0, 0);
  }
}
