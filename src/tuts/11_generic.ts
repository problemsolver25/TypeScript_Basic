const score: Array<number> = [];
const names: Array<string> = [];

// create an identity it can be boolen, number, string...etc any type
function identityOne(val: boolean | number): boolean | number {
    return val;
}

// eg: functionName(parameter: any): any {} here we can return any type, its not specific
// You lose type information (returns any).
// TypeScript can’t infer what type you get back.
function identityTwo(val: any): any {
    return val;
}

// Generics in TypeScript are like variables for types 
// — they let you write reusable, type-safe code that works with any type, 
// without losing information about the actual type used.

// Generic 
function identityThree<Type>(value: Type): Type {
  return value;
}
 
// <T> means “a generic type variable T”.
// T can be anything — number, string, object, etc.
// TypeScript will remember and preserve what type you used.
// the definition & type is preseve unlike using any
// specific type is returned. it locks the input value type and returns same value type. in any it's not guarantee.
// you can define your own type
// TypeScript infers T automatically.
function identity<T>(value: T): T {
  return value;
}
let output1 = identity<string>("Hello"); // string
console.log(output1); // string

let output2 = identity<number>(42); // number
console.log(output2); // number

// TypeScript infers automatically
let output3 = identity("TypeScript"); // T = string
console.log(output3); //

// -------------------------------------
//      Generic Interfaces: you can define any type
// -------------------------------------
interface Bottle {
    brand: string;
    type: number;
}
let output4 = identity<Bottle>({brand: "cocola", type: 1}); // T = Bottle
console.log(output4); //

// -------------------------------------
//      Generic Interfaces: Example 2
// -------------------------------------
interface ApiResponse<T> {
  status: number;
  data: T; // any
}

const userResponse1: ApiResponse<{ id: number; name: string }> = {
  status: 200,
  data: { id: 1, name: "Alice" },
};
console.log(userResponse1)

const userResponse2: ApiResponse<string> = {
  status: 500,
  data: "Internal Server Error",
};
console.log(userResponse2)

// Helps design type-safe APIs or SDKs
// ensure an API response always includes a status and a data field, regardless of what data is.
// T is generic type
// T extends object — the constraint
// data must be any object and not string or number ..etc
function fetchData<T extends object>(data: T): ApiResponse<T> {
  return { status: 200, data };
}

const userResponse = fetchData({ name: "Jane", age: 28 });
console.log(userResponse.data.name); // ✅ strongly typed

// ----------------------------------------------
//      Generic Interfaces: Type Alias Example
// ----------------------------------------------
type Pair<T, U> = {
  first: T;
  second: U;
};

const coordinate: Pair<number, number> = { first: 10, second: 20 };
console.log(coordinate);

const userInfo: Pair<string, number> = { first: "Alice", second: 25 };
console.log(userInfo);

// -------------------------
//      Generic Array
// -------------------------
function getSearchProducts<T>(products: T[]): T {
    return products[0];
}

// arrow function <T,> is generic type used in React 
const searchProduct = <T,>(products: T[]): T => {
    return products[1];
}

// ----------------------------------------------------------
//      Generic Constraints: restrict what types T can be.
// ----------------------------------------------------------
function printLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}

printLength("Hello");   // ✅ string has length
printLength([1, 2, 3]); // ✅ array has length
// printLength(123);    // ❌ number doesn't have length

// -----------------------------------
//      Generic Constraints: Example
// -----------------------------------
function getProperty<T extends object, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = { name: "Alice", age: 25 };
console.log(getProperty(user, "name")); // ✅ OK
// console.log(getProperty(user, "email")); ❌ Error: "email" is not a key of user

// -----------------------------------
//      Generic Constraints: Example
// -----------------------------------
class Animal {
  name: string = "";
}

class Dog extends Animal {
  bark() { console.log("Woof!"); }
}

// new () constructor type
function createInstance<T extends Animal>(cls: new () => T): T {
  return new cls();
}

const myDog = createInstance(Dog);
myDog.bark(); // ✅

// ---------------------------------------------------------------------
//      Default Generic Type with Constraints: Example
// ---------------------------------------------------------------------
// default extend is string
function wrapValue<T extends string | number = string>(value: T): { value: T } {
  return { value };
}

wrapValue("hi");  // T = string
wrapValue(42);    // T = number
//wrapValue();    // ❌ missing argument

// -----------------------------------------------------------------------------------------------------------
//     Constraining with Multiple Conditions: Use & (intersection type) to combine constraints.
// -----------------------------------------------------------------------------------------------------------
interface Identifiable {
  id: string;
}
interface Timestamped {
  createdAt: Date;
}

function printInfo<T extends Identifiable & Timestamped>(item: T) {
  console.log(`ID: ${item.id}, Created: ${item.createdAt}`);
}

printInfo({ id: "123", createdAt: new Date() }); // ✅

// ----------------------------------
//      Generic Classes: Example
// ----------------------------------
class Box<T> {
  content: T;
  constructor(content: T) {
    this.content = content;
  }
  getContent(): T {
    return this.content;
  }
}

const stringBox = new Box<string>("Books");
const numberBox = new Box<number>(42);

// ----------------------------------
//      Generic Classes: Example
// ----------------------------------
interface Quizz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class syllabus<T> {
    // any array i.e course[] or quizz[]
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }

}

export {}