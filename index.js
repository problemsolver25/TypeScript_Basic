"use strict";
let myName = "Bob";
let numberOfWheels = 4;
let isStudent = true;
let favoriteFood = "Pizza";
let person1 = {
    name: "Alice",
    age: 25,
    isStudent: false,
};
let person2 = {
    name: "Jill",
    age: 30,
    isStudent: false,
    address: {
        street: "456 Elm St",
        city: "Metropolis",
        country: "Fictionland",
        zipCode: 67890
    }
};
function displayInfo(person) {
    console.log(`${person.name} lives at ${person.address?.street}`);
}
displayInfo(person1);
let people = [person1, person2];
let userRole = "member";
let nextUserId = 1;
const users = [
    { id: nextUserId++, username: "user1", role: "guest" },
    { id: nextUserId++, username: "user2", role: "member" },
    { id: nextUserId++, username: "adminUser", role: "admin" }
];
function fetchUserDetails(username) {
    const user = users.find(user => user.username === username);
    if (!user) {
        throw new Error(`User ${username} not found!`);
    }
    return user;
}
let value = 1;
value = "Hi";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
value = [1, 2, 3];
if (Array.isArray(value)) {
    console.log(value.map(x => x));
}
function updateUser(id, updates) {
    const user = users.find(user => user.id === id);
    if (!user) {
        throw new Error(`User with id ${id} not found!`);
    }
    Object.assign(user, updates);
}
updateUser(1, { role: "member" });
updateUser(2, { username: "newUser2" });
function addNewUser(newUser) {
    const user = {
        id: nextUserId++,
        ...newUser
    };
    users.push(user);
    return user;
}
addNewUser({ username: "user4", role: "guest" });
console.log("Users:", users);
const gameScores = [14, 21, 33, 42, 59];
const favoriteThings = ["Raindrops", "Whiskers", "Kittens"];
const voters = [{ name: "Bob", age: 30 }, { name: "Alice", age: 28 }];
function getLastItem(array) {
    return array[array.length - 1];
}
console.log(getLastItem(gameScores));
console.log(getLastItem(favoriteThings));
console.log(getLastItem(voters));
