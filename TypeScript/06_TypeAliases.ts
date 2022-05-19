type PointType = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoordinates(pt: PointType) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

// printCoordinates({ x: 100, y: 100 });

type ID = number | string;

type UserInputSanitizedString = string;

function sanitize(str: string): string {
  return "Welcoe to TypeScript!";
}
function getInput(): string {
  return "GET: Welcome to TypeScript!";
}
function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}

let userInput = sanitizeInput(getInput());

userInput = "new Input";
