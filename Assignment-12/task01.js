
// Name: Daniyal Malik
// Roll Number: 2510303175
// Assignment Number: 12
// Task 1: applyTwice and addTen

function applyTwice(func, value) {
    let result = func(value);
    result = func(result);
    return result;
}

function addTen(number) {
    return number + 10;
}

console.log(applyTwice(addTen, 5));
