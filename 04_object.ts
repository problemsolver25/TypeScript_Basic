// objects are used by functions as input or output
// type alias
type User = {
    id: number;
    name: string;
    isActive: boolean;
    email?: string; // optional property
}

type ID = string | number;   // union
type Coordinates = [number, number]; // tuple

// intersection type
type UserWithLocation = User & {
    role: string,
    locations: string[]; // multiple locations
    logActivities(): void;
};

const user1: User = {
    id: 1,
    name: "John",
    isActive: true,
};
const user2: User = {
    id: 2,
    name: "Jill",
    isActive: true,
    email: "jill@example.com",
};

// always returns only a User (extra props are lost).
const createUser = (user: User): User => {
    return user;
}
console.log(createUser(user1));
console.log(createUser(user2));

const admin: UserWithLocation = {
    id: 3,
    name: "Alice",
    isActive: true,
    role: "Admin",
    locations: ["Toronto", "New York"],

    // optional property, so you can include it or not
    email: "alice@example.com",

    logActivities() {
        console.log(`${this.name} has role ${this.role} and manages ${this.locations.join(", ")}`);
    }
};

// method inside object
admin.logActivities(); 
// Output: "Alice has role Admin and manages Toronto, New York"

// Generics, syntax <T extends User> ensures T has at least User properties 
const createUserExtn = <T extends User>(user: T): T => {
  return user;
};
console.log(createUserExtn(user1));
console.log(createUserExtn(user2));
const user3 = createUserExtn(admin);
console.log(user3);
console.log(user3.logActivities());

// inline object type
const createCourse = (course: { name: string, price: number }): { name: string, price: number } => {
    return course;
}
console.log(createCourse({ name: "TypeScript", price: 100 }));

// interface is another way to name an object type
// type v/s interface:
// a type cannot be re-opened to add new properties,
// an interface which is always extendable.

interface Point {
  x: number;
  y: number;
}
 
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });

// Extending an interface
// Base interface
interface Animal {
  name: string;
}

// Extended interface
interface Bear extends Animal {
  honey: boolean;
}

// Example function that returns a Bear
const getBear = (): Bear => {
  return {
    name: "Baloo",
    honey: true
  };
}

// Adding new fields to an existing interface
// Original Window interface
interface EgWindow {
  title?: string;
}

// adding new property
interface EgWindow {
  ts: {
    transpileModule(code: string, options: object): string;
  };
}

// ✅ Create a real object
const egWindow: EgWindow = {
  title: "Example Window",
  ts: {
    transpileModule: (code: string, options: object) => {
      return `Transpiled code: ${code}`;
    }
  }
};

const src = 'const a = "Hello World"';
const output = egWindow.ts.transpileModule(src, {});
console.log(output); // "Transpiled code: const a = "Hello World""

type Card = {
    number: number,
    expiry: Date,
    cvv: number,
    pincode: string
}
// readonly
type UserReadonly = {
  readonly _id: number,
  name: string,
  cardDetails?: Card,
};

const card:Card ={
    number: 188888888,
    expiry: new Date(),
    cvv: 505,
    pincode: "XXX XXX"
}
const u: UserReadonly = { _id: 1, name: "Alice", cardDetails: card };
// u._id = 2; // ❌ Error
console.log(u)

// Readonly arrays/tuples
const coords: readonly [number, number] = [10, 20];
// coords[0] = 5; // ❌ Error

// Index signatures (objects with dynamic keys)
type StringMap = { [key: string]: string };
const colors: StringMap = { primary: "red", secondary: "blue" };

// Optional chaining and nullish coalescing
console.log(user2.email?.toUpperCase() ?? "No email"); 

// Nested objects
type Company = {
  name: string;
  employees: User[];
};
const myCompany: Company = { name: "Tech Corp", employees: [user1, user2] };
console.log(myCompany)

// Function types inside objects
type Calculator = {
  add: (a: number, b: number) => number;
  multiply: (a: number, b: number) => number;
};
const calc: Calculator = {
  add: (x, y) => x + y,
  multiply: (x, y) => x * y
};

type PartialUser = Partial<User>; // all properties optional
type PickUser = Pick<User, "id" | "name">; // select specific keys
type OmitEmail = Omit<User, "email">; // remove keys




export {}