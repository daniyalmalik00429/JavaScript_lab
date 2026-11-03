
// Name: Daniyal Malik
// Roll Number: 2510303175
// Assignment Number: 14
// Task 3: Using setInterval()

let count = 0;

let intervalId = setInterval(() => {
    count++;

    console.log("Tick " + count);

    if (count === 3) {
        clearInterval(intervalId);
    }
}, 200);
