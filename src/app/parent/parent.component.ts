import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { DataObservableService } from '../servicesObservable/data-observable.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  messageToChild: string = '';
  messageFromChild: string = '';

  constructor( 
              public dataService: DataService,
              private ObservableService: DataObservableService
              ) { }

  ngOnInit(): void {

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
    this.messageToChild = this.dataService.messageServiceParent;
  }

  changeMessageObservable(){
    /* this.ObservableService.messageObservable$.emit('PARENT USING OBSERVABLE') */
    this.ObservableService.devolverMessageObservableToChild()
    .subscribe(valor =>{
      this.messageToChild = valor; 
    })

  }


}
