
// Name: Daniyal Malik
// Roll Number: 2510303175
// Assignment Number: 06
// Task 3: Catch Invalid JSON

let jsonText = '{name: Rohan}';

try {
    let obj = JSON.parse(jsonText);
    console.log(obj);
}
catch (error) {
    console.log("Invalid JSON");
}
