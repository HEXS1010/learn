// parameter di constructor function

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function (name) {
        console.log(`hello ${name}, my name is ${this.firstName}`);
    }
}

const aswa = new Person("aswa", "meda");
aswa.sayHello("hexs");


const udin = new Person("udin", "nugraha");
udin.sayHello("hexs");

console.log(aswa);
console.log(udin);