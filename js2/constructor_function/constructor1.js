// property di constructor function

function Person() {
    this.firstName = "";
    this.lastName = "";
}

const aswa = new Person();
aswa.firstName = "aswa";
aswa.lastName = "meda";
const udin = new Person();
udin.firstName = "udin";
udin.lastName = "nugraha";

console.log(aswa);
console.log(udin);