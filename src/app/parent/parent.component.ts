import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { DataObservableService } from '../servicesObservable/data-observable.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  messageToChild: string = '';
  messageFromChild: string = '';
  messageToChildSubject: Subject<any> = new Subject<any>();

  constructor( 
              public dataService: DataService,
              public observableService: DataObservableService
              ) { }

  ngOnInit(): void {

    this.dataService.childMessageEvent
      .subscribe(( texto ) => {
        this.messageFromChild = texto;
    })

    /* this.ObservableService.messageObservable$
      .subscribe( texto => {
        this.messageToChild = texto;
      }) */
  }

  changeMessage(){
    this.messageToChild = 'PARENT USING INPUT PROPERTY';
  }

  onReciveMessage(event: string){
    this.messageFromChild = event;
  }

  launchMessageService(){
    //this.messageToChild = this.dataService.messageServiceParent;
    this.dataService.emitParentMessage('PARENT USING SERVICE')
  }

  changeMessageObservable(){
    this.messageToChildSubject.next('PARENT USING OBSERVABLE');
  }

  changeMessageObservableBS(){
    this.observableService.devolverMessageObservableToChild()
    .subscribe(valor =>{
      this.messageToChild = valor; 
    })
  }


}
