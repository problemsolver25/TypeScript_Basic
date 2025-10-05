// Use .ts for plain TypeScript code (logic, utilities, functions, classes).
// Use .tsx for TypeScript code that includes React JSX components.
// What a JSX Component Is
//  - A component is a reusable piece of UI in React.
//  - A JSX component is a React component that returns JSX.
//  - Components can be functional or class-based, but functional components are most common today.
var user = { "name": "Alice", "age": 30 };
console.log("User:", user.name, "Age:", user.age);

// TypeScript will throw an error if you try to access a property that doesn't exist on the object
// Type checking in action:
console.log(user.email); // throws error in TS, but works in JS (undefined)
