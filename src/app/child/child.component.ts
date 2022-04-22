import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../services/data.service';
import { DataObservableService } from '../servicesObservable/data-observable.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() message: string = '';
  @Output() messageToParen = new EventEmitter<string>();

  constructor( 
                private dataService: DataService,
                private ObservableService: DataObservableService
              ) {}

  ngOnInit(): void {

   /*  this.ObservableService.messageObservable$
      .subscribe( texto => {
        this.message = texto;
      }) */
  }

  launchMessage(){
    this.messageToParen.emit('CHILD USING OUTPUT PROPERTY');  
  }

  launchMessageService(){
    this.messageToParen.emit(this.dataService.messageServiceChild); 
  }

  changeMessageObservable(){
    /* this.messageToParen.emit(this.ObservableService.messageObservable$.emit('CHILD USING OBSERVABLE')) */
    /* this.ObservableService.messageObservable$.emit('CHILD USING OBSERVABLE') */
    this.ObservableService.devolverMessageObservableToParent()
      .subscribe(valor =>{
        this.messageToParen.emit(valor); 
      })
  }

}
