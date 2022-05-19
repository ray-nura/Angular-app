import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css'],
})
export class StructuralComponent implements OnInit {
  constructor() {}

  number: number;
  ngOnInit(): void {}

  people: Person[] = [];

  loadPeople() {
    this.people = [
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
  }
}

export interface Person {
  name: string;
  country: string;
  state: string;
}
