import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataObservableService {

  /* messageObservable$ = new EventEmitter<string>(); */

  messagePassToParent: BehaviorSubject<string> = new BehaviorSubject('CHILD USING OBSERVABLE');
  messagePassToChild: BehaviorSubject<string> = new BehaviorSubject('PARENT USING OBSERVABLE');

  constructor() { }


  devolverMessageObservableToParent(){
    return this.messagePassToParent.asObservable();
  }

  devolverMessageObservableToChild(){
    return this.messagePassToChild.asObservable();
  }
  
}
