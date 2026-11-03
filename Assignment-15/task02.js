
// Name: Daniyal Malik
// Roll Number: 2510303175
// Assignment Number: 15
// Task 2: Promise Reject

function checkMarks(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 0 && marks <= 100) {
            resolve(marks);
        } else {
            reject(new Error("Marks out of range"));
        }
    });
}

checkMarks(120)
    .then(value => console.log(value))
    .catch(error => console.log(error.message));
