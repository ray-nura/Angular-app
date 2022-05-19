class Rectangle {
  x: number;
  y: number;
}

const rect = new Rectangle();
rect.x = 10;
rect.y = 20;

console.log("Rectangle obj : ", rect);

// rect.x = "23"; //Type 'string' is not assignable to type 'number'.ts(2322)

class TestGreet {
  name: string;
}

class Greeter {
  message: string;
  constructor(message) {
    this.message = message;
  }
}


let obj = new Greeter('Welcome to the class');
console.log(obj)