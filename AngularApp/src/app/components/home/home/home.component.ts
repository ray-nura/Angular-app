import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isDisabled = true;
  btnText = 'Toggle Email Field';
  constructor() { }

  ngOnInit(): void {
  }
  
  enableEmailField(){
    this.isDisabled = !this.isDisabled;
  }

}
