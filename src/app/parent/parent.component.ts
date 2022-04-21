import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  messageToChild: string = '';
  messageFromChild: string = '';

  constructor( public dataService: DataService ) { }

  ngOnInit(): void {
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



}
