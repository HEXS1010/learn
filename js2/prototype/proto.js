// prototype inheritance


// peototype inheritance salah (1)
function Employee (name){
    this.name = name;
}

function Manager(name) {
    this.name = name;
}

Manager.prototype = Object.create(Employee.prototype);
// Manager.prototype = Employee.prototype; // cara yang salah

Manager.prototype.sayHello = function (name) {
    console.log(`hello ${name}, My name is manager ${this.name}`);
}

Employee.prototype.sayHello = function (name) {
    console.log(`hello ${name}, My name is Employee ${this.name}`);
} 

// prototype inheritance salah (2)

const employee = new Employee("budi");
employee.sayHello("joko");

const manager = new Manager("aswa");
manager.sayHello("joko");