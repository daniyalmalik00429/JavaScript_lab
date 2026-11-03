
// Name: Daniyal Malik
// Roll Number: 2510303175
// Assignment Number: 13
// Task 1: Using reduce()

let prices = [120, 45, 300];

let total = prices.reduce((sum, price) => {
    return sum + price;
}, 0);

console.log(total);
