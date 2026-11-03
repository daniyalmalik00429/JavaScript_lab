
// Name: Daniyal Malik
// Roll Number: 2510303175
// Assignment Number: 14
// Task 2: Using clearTimeout()

let timerId = setTimeout(() => {
    console.log("Not shown");
}, 1000);

clearTimeout(timerId);

console.log("Cancelled");
