import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../services/data.service';
import { DataObservableService } from '../servicesObservable/data-observable.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() messageObservable$!: Observable<any>;
  @Input() message: string = '';
  @Output() messageToParen = new EventEmitter<string>();


  constructor( 
                private dataService: DataService,
                private ObservableService: DataObservableService
              ) {}

  ngOnInit(): void {

    this.dataService.parentMessageEvent
      .subscribe(( texto ) => {
        this.message = texto;
    })

    this.messageObservable$
      .subscribe( texto => {
        this.message = texto;
    })
    /* this.ObservableService.messageObservable$
      .subscribe( texto => {
        this.messageToParen.emit(texto);
    })  */
  }

  launchMessage(){
    this.messageToParen.emit('CHILD USING OUTPUT PROPERTY');  
  }

  launchMessageService(){
    this.dataService.emitChildMessage('CHILD USING SERVICE')
    /* this.messageToParen.emit(this.dataService.messageServiceChild);  */
  }

  changeMessageObservable(){
     this.messageToParen.emit('CHILD USING OBSERVABLE'); 
    //this.messageToParent.next('CHILD USING OBSERVABLE WITH SUBJECT');
  }

  changeMessageObservableBS(){
    this.ObservableService.devolverMessageObservableToParent()
      .subscribe(valor =>{
        this.messageToParen.emit(valor); 
      })
  }

}
