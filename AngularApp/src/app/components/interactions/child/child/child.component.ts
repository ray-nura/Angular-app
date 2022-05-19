import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
 

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  childMessage: string = '';

  @Output()
  childOutput: EventEmitter<string> = new EventEmitter();

  messageToParent: string = ''; 

  emitToParent(){
    this.childOutput.emit(this.messageToParent);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
