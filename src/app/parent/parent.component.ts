import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  messageToChild: string = '';
  messageFromChild: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  changeMessage(){
    this.messageToChild = 'PARENT USING INPUT PROPERTY';
  }

  onReciveMessage(event: string){
    this.messageFromChild = event;
  }



}
