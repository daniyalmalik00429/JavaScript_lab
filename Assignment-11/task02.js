
// Name: Daniyal Malik
// Roll Number: 2510303175
// Assignment Number: 11
// Task 2: Closures

function makeCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
