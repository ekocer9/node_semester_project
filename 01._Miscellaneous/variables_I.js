console.log("Hello World")
//Default always use const or let
const name = "Enes"

const me = {
}
me.name = name
console.log(me);

// const is constant NOT in the value but in the assignment
// meaning that it cannot be reassigned and this also HAS to be assigned

// SynteaxError: Missing initializer in const declaration
// const test;

const hobbies = ["coding", "eating"];

hobbies.push("sleeping")

// hobbies = []
// hobbies = ""

me.hobbies = hobbies

console.log(me)
