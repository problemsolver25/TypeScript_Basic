### Set up
(https://www.typescriptlang.org/download/)

## Check node and npm
`node -v`
`npm -v`

## Install globally Typescript
`npm install -g typescript`

## OR Install Typescript in a project
`npm install typescript --save-dev`

## check TypeScript version
`tsc -v`

## Install use a local development server
`npm install -g http-server`

## Compile your TypeScript code to Javascript:
`tsc index.ts`

## With `--noEmitOnError`, it stops the compilation until errors are fixed.
`tsc --noEmitOnError index.ts`

- Catch errors early — you won’t accidentally run broken JS.
- Enforce type safety in projects.
- Makes build pipelines safer for large applications.

## Use tsc --watch for development 
`tcs --watch`

## Practise Online
[TypeScript Playground](https://www.typescriptlang.org/play/)

## Why to learn TypeScript

- TypeScript is Dev Tool, wrapper around JavaScript
- *static checking:* TypeScript adds static typing to JavaScript, catching errors during development instead of runtime.
- TypeScript enforces structure with interfaces, types, and classes — making teamwork and scaling smoother..
- Makes reading and maintaining code easier, especially in big projects.
- TypeScript compiles down to JavaScript, so it’s always compatible with browsers.
- Strong typing and tooling make large-scale changes safe.
- Huge adoption in open-source libraries.
- TypeScript simply as “JavaScript with types”

## more..
- Type definitions act as documentation that the computer enforces.
- Type Script catches type errors, but the bigger win is predictable code behavior.
- TypeScript encourages `thinking about your definition, data and logic rigorously`.
- Learning TypeScript makes learning C#, Java, or Rust easier later because you get used to thinking in terms of types, interfaces, and generics.
- It’s a tool to tame complexity, not a requirement to rewrite everything.

## Concept Covered:

- Intro to TypeScript docs, (https://www.typescriptlang.org/docs/handbook/2/basic-types.html)
- **Types** 
    - **1️⃣ Basic Types**
        - `number`, 
        - `string`, 
        - `boolean`, 
    - **2️⃣ Special Types**
        - `null` (Absence of value), 
        - `undefined` (Variable not assigned), 
        - `void` (No return value), 
    - **3️⃣ Object Types**
        - `object` (Represents any non-primitive type, Better to use interfaces or types for structured objects.), 
        - `array`, 
        - `tupples` (Array with fixed length and types, Useful when elements have different types but fixed positions.), 
    - **4️⃣ Type Inference**
        - Type inference (TypeScript auto-detects type, Type inference helps you write less code while staying safe.),  
        - Union `|` (Variables can accept more than one type), 
    - **Others**    
      - `any (any disables type checking. Anything goes, disables type checking) (**Don't use `any`**)
      - `unknown` (Anything unknown, must check type before using)
      - `never` (Values that never happen (errors, infinite loops))
    - **Docs**
      - (https://www.typescriptlang.org/docs/handbook/2/everyday-types.html), 
      - (https://www.typescriptlang.org/docs/handbook/type-compatibility.html#any-unknown-object-void-undefined-null-and-never-assignability)
- **Syntax**, all in lowercase, no uppercase or camel case:
    - **Type annotations:** `let variableName: type = value;`
    - **Type Aliases:** `type AliasName = type;` use type for object, unions, intersections, primitives, or tuples. When you want to compose more complex types. Cannot be reopened/merged like interfaces.
    - **Interfaces:** `interface InterfaceName { propertyName: type; }` use interface for objects. When you want declaration merging / extension (you can extend the same interface in multiple places), describing the structure of classes, objects, APIs.
    - **Functions:** `function functionName(paramName: type): returnType { ... }`
    - **Classes:** `class ClassName { propertyName: type; constructor(paramName: type) { ... } }`
    - **Generics:** `function functionName<T>(param: T): T { ... }` or `function functionName<T extends BaseType>(param: T): T { ... }`
    - **Enums:** `enum EnumName { VALUE1, VALUE2 }`
    - **Union Types:** `let variableName: type1 | type2;`
    - **Intersection Types:** `type CombinedType = Type1 & Type2;`
- `noImplicitAny` 
    - `noImplicitAny` is a TypeScript compiler flag.
    - When enabled, TypeScript will give an error if it cannot infer a type and defaults to any.
    - This helps catch potential bugs and enforces explicit typing.
    - By default (without `noImplicitAny`), it assumes `any` which silently disables type checking.
    - define in `tsconfig.json` → TypeScript forces you to define types explicitly when it can’t infer them, preventing the unsafe default of any.
    ```
    {
        "compilerOptions": {
            "noImplicitAny": true
        }
    }
    ``` 
- **Functions**
    - **1️⃣ Basic & Void Function**
    - **2️⃣ Anonymous Functions & Arrow Functions**
    - **3️⃣ Function with Optional Parameters:** use `?`
    - **4️⃣ Default Parameters:** assign default value to paramter
    - **5️⃣ Rest Parameters:** Use `...` to accept multiple arguments as an array
    - **6️⃣ Function Types:** Define types for function parameters and return type. Syntax: `(parameters) => returnType;`. Use function types for variables, callbacks, and interface definitions.
    - **7️⃣ Function Overloading:** Define multiple signatures for a function. Use function overloading when one function needs to behave differently based on input types.
    - **8️⃣ Optional & Union Types in Functions:** mix optional, default, and union types for flexible yet type-safe. functions.
- **Objects**
    - Type Aliases `type`
    - Optional properties (`?`)
    - Union Type (`|`)
    - Tuple
    - Intersection types
    - Objects as function input/output
    - Inline object types
    - Generics with objects (`<T extends subtype>`)
    - Interfaces (basic `interface`, extending `extends`, declaration merging)
    - Methods inside objects
    - Intersection vs Extension (interface `extends` vs type `&`)
    - Readonly properties (`readonly`)
    - Readonly arrays/tuples
    - Index signatures (objects with dynamic keys)
    - Optional chaining and nullish coalescing
    - Nested objects
    - Function types inside objects
    - Optional vs Required properties in interfaces (and default values in functions)
    - Readonly vs Mutable objects (difference with readonly)
    - Partial, Required, Pick, Omit utility types (to manipulate object types)
- setup Typescript for real projects
- Classes
- Private Public
- Getters and Setters
- Protected
- Why Interface is important
- Abstract class
- Generics
- Generics in Array and Arrow functions
- Generic Classes
- Type Narrowing
- The in operator narrowing
- Instanceof and Type Predicates
- Discriminated Union and Exhaustiveness Checking with never