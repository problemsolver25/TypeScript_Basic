let score: number | string = 33
score = 44;
score = "55";

// Union 
type User = {
    name: string,
    id: number,
}
type Admin = {
  username: string,
  id: number
}

// Jack can be User or Admin
let jack: User | Admin = {
  name: "Jack",
  id: 23
}
jack = {
  username: "jack123",
  id: 23
}

const getDbId = (id: number | string) => {
    // making some API calls,
    if (typeof id === "string") {
        console.log(`id is: ${id.toLowerCase()}`)
    } else {
        console.log(`DB id is: ${id+2}`)
    }
}
getDbId(3);
getDbId("YYYY001");

let data1: number[] = [1, 2, 3];
let data2: string[] = ["1", "2", "3"];

// it cannot be mixmatch, it can be either all numbers or all string
let data3: string[] | number[] = [4, 5, 6]; // data3 = ["1", 2, 3] ❌ Error

let data4: (string|number)[] = ["7", 8, 9] // ✅ this works

let pi:3.14 = 3.14 // ✅ it will only have 3.14
// pi = 3.145 ❌ Error

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "window" // ✅ 
// seatAllotment = "crew" ❌ Error

export {}