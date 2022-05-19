import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.css'],
})
export class BuiltInPipesComponent implements OnInit {
  exampleContent = 'Welcome to Simplilearn!';
  today = new Date();

  person = {
    name: 'Rox',
    age: '25',
    address: { a1: 'Mumbai', a2: 'Karnataka' },
  };

  months = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'Jun',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  constructor() {}

  ngOnInit(): void {}
}
