// We can declare a class in javascript like above

function Book(title, pages, isbn) { // {1}
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

    var book = new Book("My Title", "200", "100");


function Car(model, age, colour) { // {2}
    this.model = model;
    this.age = age;
    this.colour = colour;

    this.turnOn = function() {
        console.log("The " + this.model + " car in turned on");
    }
}

    var car = new Car("Ferrari", "2019", "Black")

    car.turnOn() // The Ferrari car in turned on



Book.prototype.printTitle = function() {
    console.log(this.title);
};

// We can simplify using this code above:

class Book { // class name
    constructor(title, pages, isbn) { // constructor
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }
    printIsbn() { // method
        console.log(this.isbn);
    }
}

// To create a object

let book = new Book('title', 'pag', 'isbn');
console.log(book.title); // outputs the book title
book.title = 'new title'; // update the value of the book title
console.log(book.title); // outputs the book title

console.log(typeof(book)); // Object

// Inheritance

class ITBook extends Book { // {1}
    constructor(title, pages, isbn, technology) {
        super(title, pages, isbn); // use of the super constructor
        this.technology = technology;
    }

    printTechnology() {
        console.log(this.technology);
    }
}

let jsBook = new ITBook('Learning JS Algorithms', '200', '1234567890', 'JavaScript');
console.log(jsBook.title); // output Learning JS Algorithms
console.log(jsBook.printTechnology()); // output JavaScript
console.log(jsBook.printIsbn()); // print the Isbn inherit from class Book method

// Getters and Setters

class Person {
    constructor(name) {
        this._name = name; //use of _atributte -> private attribute
    }
    get name() { // // use of get
        return this._name;
    }
    set name(value) { // use of set
        this._name = value;
    }
}

let lotrChar = new Person('Frodo');

console.log(lotrChar.name); // To use the get or set functions, we can simply refer to their names as if it was a simple attribute
lotrChar.name = 'Gandalf'; // To use the get or set functions, we can simply refer to their names as if it was a simple attribute
console.log(lotrChar.name);
lotrChar._name = 'Sam'; // The _name attribute is not private, and we can still access it
console.log(lotrChar.name);

// To not acess a attribute, we can use the # symbol