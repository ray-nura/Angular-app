import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-usage',
  templateUrl: './directive-usage.component.html',
  styleUrls: ['./directive-usage.component.css'],
})
export class DirectiveUsageComponent implements OnInit {
  styleVar = {
    'background-color': 'green',
    color: 'white',
    border: '2px solid black',
    padding: '20px',
  };

  people = [
    {
      name: 'Raghava',
      country: 'India',
      state: 'Karnataka',
    },
    {
      name: 'Ricky',
      country: 'Australia',
      state: 'Sydney',
    },
    {
      name: 'Keshava',
      country: 'India',
      state: 'Karnataka',
    },
    {
      name: 'Adams',
      country: 'UK',
      state: 'Karnataka',
    },
    {
      name: 'Adams',
      country: 'Australia',
      state: 'Karnataka',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  getColor(country) {
    switch (country) {
      case 'India':
        return 'green';
      case 'Australia':
        return 'blue';
      case 'UK':
        return 'red';
    }
    return 'black';
  }
}
