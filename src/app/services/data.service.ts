import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  messageServiceParent: string = 'PARENT USING SERVICE';
  messageServiceChild: string = 'CHILD USING SERVICE';

  constructor() { }
}
