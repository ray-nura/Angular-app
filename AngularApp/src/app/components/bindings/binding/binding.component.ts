import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  content: string = 'Welcome to Angular';
  imageSource = 'https://picsum.photos/id/237/200/300';  
  handleClass = ['borderAndColor', 'padAndMar'];
  customStyle = 'color: blue';

  constructor() { }

  changeContent(){
    this.content = 'Learning Event Binding';
    this.customStyle = 'color: red;font-size:30px';
    this.imageSource = 'https://picsum.photos/id/1003/1181/1772';
    this.handleClass = ['changedDiv'];
  }

  ngOnInit(): void {
  }

}
