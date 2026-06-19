// parameter di constructor function

function Person() {
    this.firstName = "";
    this.lastName = "";
    this.sayHello = function (name) {
        console.log(`hello ${name}, my name is ${this.firstName}`);
    }
}

const aswa = new Person();
aswa.firstName = "aswa";
aswa.lastName = "meda";
aswa.sayHello("hexs");


const udin = new Person();
udin.firstName = "udin";
udin.lastName = "nugraha";
udin.sayHello("hexs");

console.log(aswa);
console.log(udin);