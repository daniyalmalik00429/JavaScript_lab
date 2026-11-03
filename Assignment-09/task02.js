
// Name: Daniyal Malik
// Roll Number: 2510303175
// Assignment Number: 09
// Task 2: Form Validation

function validateForm(name) {
    let errors = [];

    if (name === "") {
        errors.push("Name is required");
    }

    return errors;
}

console.log(validateForm("Asha"));
console.log(validateForm(""));
