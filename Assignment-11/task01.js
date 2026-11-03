
// Name: Daniyal Malik
// Roll Number: 2510303175
// Assignment Number: 11
// Task 1: Block Scope

let level = "outer";

{
    let level = "inner";
    console.log(level);
}

console.log(level);
