
// Name: Daniyal Malik
// Roll Number: 2510303175
// Assignment Number: 08
// Task 1: Inheritance Using extends

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return "Hi, I am " + this.name;
    }
}

class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
}

let teacher1 = new Teacher("Anita", "Maths");

console.log(teacher1.greet());
