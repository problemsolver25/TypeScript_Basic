// --- Basic variable declarations with types ---
let myName: string = "Bob"           // string type
let numberOfWheels: number = 4       // number type
let isStudent: boolean = true        // boolean type

// --- Type alias for simple types ---
type Food = string
let favoriteFood: Food = "Pizza"     // using type alias

// --- Type alias for complex objects ---
type Address = {
    street: string,
    city: string,
    country: string,
    zipCode: number
}

// --- Type alias for Person object with optional Address ---
type Person = {
    name: string,
    age: number,
    isStudent: boolean,
    address?: Address   // optional property
}

// --- Example Person objects ---
let person1: Person = {
    name: "Alice",
    age: 25,
    isStudent: false,
}

let person2: Person = {
    name: "Jill",
    age: 30,
    isStudent: false,
    address: {
        street: "456 Elm St", 
        city: "Metropolis",
        country: "Fictionland",
        zipCode: 67890
    }
}

// --- Function demonstrating optional chaining ---
function displayInfo(person: Person) {
  console.log(`${person.name} lives at ${person.address?.street}`);
}

// undefined for address since person1 has no address
displayInfo(person1);

// --- Array of Person objects---
let people: Person[] = [person1, person2]

// Generic array type
//let people: Array<Person> = [person1, person2]

// --- User role type using union ---
type UserRole = "guest" | "member" | "admin"

// --- User type and utility type Partial ---
type User = {
    id: number,
    username: string,
    role: UserRole
}

// --- User type and utility type Partial ---
type UpdatedUser = Partial<User>

// --- Example user variables ---
let userRole: UserRole = "member"
let nextUserId = 1;

const users: User[] = [
    { id: nextUserId++, username: "user1", role: "guest" },
    { id: nextUserId++, username: "user2", role: "member" },
    { id: nextUserId++, username: "adminUser", role: "admin" }
];

// --- Fetch user by username with error handling ---
function fetchUserDetails(username: string): User {
    const user = users.find(user => user.username === username);
    if (!user) {    
        throw new Error(`User ${username} not found!`);
    }   
    return user;
}

// --- Example of `any` type with runtime type checking ---
let value: any = 1
value = "Hi"
if (typeof value === "string") {
    console.log(value.toUpperCase()); // safe to call string methods
}
value = [1,2,3]
if (Array.isArray(value)) {
    console.log(value.map(x => x)); // safe to call array methods
}

// --- Update user properties using Partial<User> ---
function updateUser(id: number, updates: UpdatedUser): void {
    const user = users.find(user => user.id === id);
    if (!user) {
        throw new Error(`User with id ${id} not found!`);
    }
    Object.assign(user, updates); // merge updates into existing user
}

updateUser(1, { role: "member" });
updateUser(2, { username: "newUser2" });

// --- Add new user while automatically assigning id ---
function addNewUser(newUser: Omit<User, "id">): User {
    const user: User = {
        id: nextUserId++,
        ...newUser
    }
    users.push(user)
    return user;
}

addNewUser({ username: "user4", role: "guest" })
console.log("Users:", users)

// --- Arrays of numbers, strings, and objects ---
const gameScores = [14,21,33,42,59]
const favoriteThings = ["Raindrops", "Whiskers", "Kittens"]
const voters = [{ name: "Bob", age: 30 }, { name: "Alice", age: 28 }]

// --- Generic function to get last item of an array (string[] or number[] or json)---
function getLastItem<PlaceholderType>(array: PlaceholderType[]): PlaceholderType | undefined {
    return array[array.length - 1]
}   

// --- Generic function to get last item of an array ---
console.log(getLastItem(gameScores))
console.log(getLastItem(favoriteThings))
console.log(getLastItem(voters))

export {}