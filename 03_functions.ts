// 1️⃣ Basic Function Syntax
function add(a: number, b: number): number {
  return a + b;
}
console.log("add:", add(5, 3));

// Void function: No return value
function logMessage(msg: string): void {
  console.log("logMessage: ", msg);
}
logMessage("Hello, TypeScript!");

// 2️⃣ Arrow Function Syntax
let getUpperCase = (str: string): string => {
  return str.toUpperCase();
};
console.log("getUpperCase: ", getUpperCase("hello")); // "HELLO"

// Shorter syntax for single expression functions
// by default, it returns the expression result
let getLowerCase = (str: string): string => str.toLowerCase();
console.log("getLowerCase:", getLowerCase("WORLD")); // "world"

// 3️⃣ Optional Parameters
// Use ? to mark parameters as optional.
let greet = (name?: string): string => {
  return name ? `Hello, ${name}!` : "Hello!";
}
console.log(greet("Alice")); // Hello, Alice!
console.log("greet: ", greet());        // Hello!

// 4️⃣ Default Parameters: Assign default values to parameters.
let greeting = (name: string = "Guest"): string => {
  return `Hello, ${name}!`;
}
console.log("greeting: ", greeting()); // Hello, Guest!

// 5️⃣ Rest Parameters: Use ... to accept multiple arguments as an array.
let sum = (...numbers: number[]): number => {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log("sum: ", sum(1, 2, 3, 4)); // 10

// 6️⃣ Function Types: Define types for function parameters and return type.
// Use Case: Assigning or passing functions safely
// Syntax: (parameters) => returnType;
let multiply: (a: number, b: number) => number;
multiply = (x, y) => x * y;

console.log(multiply(5, 2)); // 10
// multiply = (x: string, y: string): string => x + y; // Error: Type mismatch

// 7️⃣ Function Overloading: Define multiple signatures for a function.
// Use Case: When a function can accept different parameter types or return types
// In TypeScript, function overloads require a single function implementation, not a let or const assignment.
function combine(a: string, b: string): string;
function combine(a: number, b: number): number;

function combine(a: any, b: any): any {
  return a + b;
}

console.log(combine(1, 2));       // 3
console.log(combine("Hello, ", "World")); // Hello, World

// 8️⃣ Optional & Union Types in Functions: mix optional, default, and union types for flexible yet type-safe functions
function printId(id: string | number): void {
  console.log(`ID: ${id}`);
}

printId(123);
printId("abc123");
// printId(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.