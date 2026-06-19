// constructor inheritance
// didalam concstructor, kita bisa memanggil construcctor lain, dengan begitu kita bisa mewarisi semua property yang dibuat di constructor lain tersbut

// cara menggilanya constructor.call(this, parameter)

function Employee(firstName) {
    this.firstName = firstName;
    this.sayHello = function (name) {
        console.log(`hello ${name}, My name is ${this.firstName}`);
    }
}

function Maneger(firstName, lastName) {
    this.lastName = lastName;
    Employee.call(this, firstName);
}

const aswa = new Maneger("hexs", "project");
console.log(aswa);