// ----------------------------------
// Narrowing is when TypeScript 
// reduces a broad type (like string | number) 
// to a more specific type (like string) 
// based on runtime checks.

// It allows the compiler to safely access properties or methods 
// that exist only on that specific type.
// ----------------------------------

// -----------------------------------------------------------------------------
//      Basic Narrowing with typeof:
//      this doesn't work when its number[] now you can't check each and everycase
// -----------------------------------------------------------------------------
function printValue(value: string | number) {
  if (typeof value === "string") {
    // ✅ TypeScript knows value is a string here
    console.log(value.toUpperCase());
  } else {
    // ✅ Here value must be number
    console.log(value.toFixed(2));
  }
}

printValue("hello"); // HELLO
printValue(3.1415); // 3.14

function provideId(id: string | null) {
    if(!id) {
        console.log("Please provide ID")
        return;
    }
    id.toLowerCase();
}

// Checking truthiness narrows string | null → string.
function printAll(strs: string | string[] | null) {
  // !!!!!!!!!!!!!!!!
  //  DON'T DO THIS!
  //   This doesn't conside str == null
  // !!!!!!!!!!!!!!!!
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

// -------------------------------------
//      Narrowing with instanceof: 
//      instanceof narrows the type to the actual class.
// -------------------------------------
class Dog { bark() { console.log("Woof!"); } }
class Cat { meow() { console.log("Meow!"); } }

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); // ✅ safe
  } else {
    animal.meow(); // ✅ safe
  }
}

// --------------------------------------------------------------
//      Narrowing with Property Checks:
//      The in operator narrowing
//      key in object narrows the type based on existence of property.
// --------------------------------------------------------------
interface Bird { fly: () => void; }
interface Fish { swim: () => void; }

function move(animal: Bird | Fish) {
  if ("fly" in animal) {
    animal.fly(); // ✅ narrowed to Bird
  } else {
    animal.swim(); // ✅ narrowed to Fish
  }
}
// ---------------------------------------------
//      Custom Type Guard: Using type predicates:
//      write your own type guard function
// ---------------------------------------------
interface User { name: string; }
interface Admin { name: string; role: string; }

function isAdmin(user: User | Admin): user is Admin {
  // return ("role" in user) ? true: false;
  return (user as Admin).role !== undefined ? true: false;
}

const person: User | Admin = Math.random() > 0.5 
  ? { name: "Alice" }               // User
  : { name: "Bob", role: "Admin" }; // Admin

console.log(person)
if (isAdmin(person)) {
  console.log(person.role); // ✅ narrowed to Admin
} else {
  console.log(person.name); // ✅ narrowed to User
}

// -------------------------------
//      Discriminated Union
// -------------------------------
interface Circle {
    kind: "circle",
    radius: number
}
interface Square {
    kind: "square",
    side: number
}
interface Rectangle {
    kind: "rectangle",
    length: number,
    height: number
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
    if(shape.kind ==="circle") {
        return Math.PI * shape.radius **2;
    }
    if(shape.kind ==="square") {
        return shape.side * shape.side; 
    }
    if(shape.kind ==="rectangle") {
        return shape.length * shape.height; 
    }
}

// -------------------------------
//      Exhaustiveness Checking
// -------------------------------
function getArea(shape: Shape) {
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius **2;
        case "square":
            return shape.side * shape.side; 
        case "rectangle":
            return shape.length * shape.height; 
        default:
            const _defaultforshape: never = shape;
            return _defaultforshape;
    }
}