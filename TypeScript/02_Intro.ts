console.log("Welcome to TypeScript");

function greetPeople(person: string, date: Date){
    console.log(`Hello ${person}, today is ${date}`);
}

// greet('Micheal', Date());
// Argument of type 'string' is not assignable to parameter of type 'Date'.ts(2345)

greetPeople('Micheal', new Date());


// Step:01 tsc .\02_Intro.ts
// Step:02 node .\02_Intro.js

//Shortcut to run both -> tsc 02_Intro.ts | node 02_Intro.js


//TS -> 1. transpiled in to Javascript.
//TS -> 2. Run the JavaScript file. 