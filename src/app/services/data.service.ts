import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  /* messageServiceParent: string = 'PARENT USING SERVICE'; */
  /* messageServiceChild: string = 'CHILD USING SERVICE'; */

  public parentMessageEvent: EventEmitter<any> = new EventEmitter();
  public childMessageEvent: EventEmitter<any> = new EventEmitter();
   

  constructor() { }

  emitParentMessage(message: string){
    this.parentMessageEvent.emit(message);
  }

  emitChildMessage(message: string){
    this.childMessageEvent.emit(message);
  }
}
