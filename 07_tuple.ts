// Tuples are know for length and when you different types of elements
let Tuser1: string[] = ["ABC"]
let Tuser2: (string | number)[] = [1, "ABC"]

// 1st element always string, 2nd element always number, 3rd element always boolean
let Tuser3: [string, number, boolean] = ["ABC", 1, true]

let rgb: [number, number, number];
rgb = [255, 255, 255]

type User = [number, string]
let newUser:User = [123, "user@example.net"]
newUser[0] = 456;
newUser[1] = "user@example.org"

export {}