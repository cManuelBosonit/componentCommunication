import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() message: string = '';
  @Output() messageToParen = new EventEmitter<string>();

  constructor( private dataService: DataService ) {}

  ngOnInit(): void {
  }

  launchMessage(){
    this.messageToParen.emit('CHILD USING OUTPUT PROPERTY');  
  }

  launchMessageService(){
    this.messageToParen.emit(this.dataService.messageServiceChild); 
  }

}
