import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css'],
})
export class NumberComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  message: string = '';
  count: number = 0;
  increaseByOne() {
    this.count = this.count + 1;
    this.message = 'Counter: ' + this.count;
  }
  decreaseByOne() {
    this.count = this.count - 1;
    this.message = 'Counter: ' + this.count;
  }
}
