import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  countries: Country[] = [
    new Country('1', 'India'),
    new Country('2', 'USA'),
    new Country('3', 'England'),
    new Country('4', 'Australia')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(contactForm){
    console.log("contactForm :- ", contactForm.value);
  }
}


export class Country {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}