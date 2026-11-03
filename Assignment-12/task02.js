
// Name: Daniyal Malik
// Roll Number: 2510303175
// Assignment Number: 12
// Task 2: Callback and Arrow Function

function formatMarks(marks, callback) {
    return callback(marks);
}

console.log(
    formatMarks(76, (marks) => "Marks: " + marks + "/100")
);
