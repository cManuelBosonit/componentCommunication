import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataObservableService {

 /*  messageObservable$ = new EventEmitter<string>(); */

  messageToChildSubject: Subject<any> = new Subject<any>();

  messagePassToParent: BehaviorSubject<string> = new BehaviorSubject('CHILD USING OBSERVABLE (BehaviorSubject)');
  messagePassToChild: BehaviorSubject<string> = new BehaviorSubject('PARENT USING OBSERVABLE (BehaviorSubject)');

  constructor() { }


  devolverMessageObservableToParent(){
    return this.messagePassToParent.asObservable();
  }

  devolverMessageObservableToChild(){
    return this.messagePassToChild.asObservable();
  }
  
}
