let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";

const n: number = obj;


let myName: string = 'Adam Gil';
let myNameWithoutExplicitType = 'Adam Gil';

// myName = 10;
// myNameWithoutExplicitType = 10;


function greet(name: string){
    console.log("Hello, " + name.toUpperCase() + "!!");
}

// greet(40);
greet('Ricky');


function getMyNumber(): number{
    // return 'Raghav';
    return 20;
}
getMyNumber();

