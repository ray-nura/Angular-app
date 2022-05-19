import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  inputMessage = 'This content is from parent!';

  messgaReceivedFromChild ='';

  getChildData(data: any){
    this.messgaReceivedFromChild = data;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
