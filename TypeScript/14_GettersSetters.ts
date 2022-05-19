class Vehicle {
  _model: string;
  _make: string;
  _year: number;

  constructor(model = "Innova", make = "Toyota", year = 2017) {
    this._model = model;
    this._make = make;
    this._year = year;
  }

  get model() {
    return this._model;
  }

  set model(str) {
    console.log("Setting via setter!");
    if (str !== undefined) {
      this._model = str;
    } else {
      console.error("Incorrect model");
    }
  }
}

let defa = new Vehicle();
console.log("Test Default values : ", defa);

let kia = new Vehicle("Sonet", "Kia", 2021);
console.log("Object values : ", kia);

console.log("kia.model ", kia.model);
kia.model = "Seltos";
console.log("kia.model ", kia.model);
