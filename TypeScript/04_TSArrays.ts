function testArrays() {
  const names = ["Alice", "Bob", "Eve"];

  names.forEach((value, index, arr) => {
    console.log("Index :", index, " Value :", value, " arr :", arr);
    // value.toUppercase(); //Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
    value.toUpperCase();
  });
}

// testArrays();

function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
// printCoord({ x: 3, y: '7' }); //Type 'string' is not assignable to type 'number
// printCoord({ x: 3, y: 7 });

function printName(obj: { first: string; last?: string }) {
  console.log("Object :", obj);

  // Error - might crash if 'obj.last' wasn't provided!
  // console.log(obj.last.toUpperCase());

  if (obj.last !== undefined) {
    //Okay
    console.log(obj.last.toUpperCase());
  }

  // A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());
}
// printName({ first: "Bob" });
// printName({ first: "Alice", last: "Alisson" });

function printId(id: number | string) {
//   console.log("Youd Id is : " + id);
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log("My Id is ", id);
  }
}

printId(101);
printId("Raghav");
// printId({myId: 2343}); //Argument of type '{ myId: number; }' is not assignable to parameter of type 'string | number'


function getFirstThree(x: number[] | string){
    return x.slice(0, 3);
}

console.log("getFirstThree([6, 1, 2, 9, 2]) :- ",getFirstThree([6, 1, 2, 9, 2]));
console.log("getFirstThree('rickypointing') :- ",getFirstThree('rickypointing'));