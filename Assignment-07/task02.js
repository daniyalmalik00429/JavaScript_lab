
// Name: Daniyal Malik
// Roll Number: 2510303175
// Assignment Number: 07
// Task 2: ES6 Class

class Book {
    constructor(title, pages) {
        this.title = title;
        this.pages = pages;
    }

    summary() {
        return this.title + " has " + this.pages + " pages";
    }
}

let book1 = new Book("Algorithms", 320);

console.log(book1.summary());
