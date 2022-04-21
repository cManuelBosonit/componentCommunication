import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() message: string = '';
  @Output() messageToParen = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
  }

  launchMessage(){
    this.messageToParen.emit('CHILD USING OUTPUT PROPERTY')
  }

}
