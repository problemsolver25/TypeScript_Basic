let greetings: string = "Hello, TypeScript!";
// Auto-completion (string methods) and type checking
console.log(greetings.toLowerCase());

// 1) Basic Types:
// number: both integer and float
let age: number = 25;
let price: number = 99.99;

// string
let name: string = "Alice";
let greeting: string = `Hello, ${name}!`;

// boolean
let isActive: boolean = true;
let isLoggedIn: boolean = false;

// 2) Special Types:
// null 
let nothing: null = null;
// undefined
let notAssigned: undefined = undefined;
// void
function logMessage(msg: string): void {
  console.log(msg);
}

// 3) Object Types:
// object
let person: object = { name: "Alice", age: 25 };
// array: 
let numbers: number[] = [1, 2, 3];
// or using generic array type
let names: Array<string> = ["Alice", "Bob"];
// tupples: fixed length and types, useful when elements have different types but fixed positions
let user: [number, string] = [1, "Alice"];

// 4) Type Inference
// TypeScript infers types based on assigned values
let count = 10; // inferred as number
let username = "Bob"; // inferred as string
let isOnline = true; // inferred as boolean

// union
let mixed: number | string = 42; // can be number or string
mixed = "Now I'm a string";

// union
let id: string | number;
id = "abc123";
id = 456; // both allowed

// Others
// any
let value1: any;
value1 = 10;       // ✅ number
value1 = "hello";  // ✅ string
value1 = true;     // ✅ boolean

// unknown
let value2: unknown;
value2 = 10;      
value2 = "hello";  

// ❌ Error: Object is of type 'unknown'
// let result = value2 + 1;  

// ✅ Type-safe check
if (typeof value2 === "number") {
  let result = value2 + 1;
  console.log(result);
}

// never
// Function that always throws an error
function fail(message: string): never {
  throw new Error(message);
}

// Infinite loop
function infiniteLoop(): never {
  while (true) {}
}

// Exhaustiveness checking in switch statements
// TypeScript type alias, | is OR operator
type Color = "red" | "green" | "blue";

function checkColor(color: Color) {
  switch (color) {
    case "red": break;
    case "green": break;
    case "blue": break;
    default:
      const _exhaustiveCheck: never = color; // TypeScript ensures we covered all cases
  }
}


export {}