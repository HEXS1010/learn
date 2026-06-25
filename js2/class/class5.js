// super constructor

class Employee {
  constructor(firstName) {
    this.firstName = firstName;
  }

  sayHello(name) {
    console.log(`hello ${name}, My name is Employee ${this.firstName} `);
  }
}

class Manager extends Employee {
    constructor(firstName, lastName) {
        super(firstName);
        this.lastName = lastName;
    }

  sayHello(name) {
    console.log(`hello ${name}, My name is Manager ${this.firstName} `);
  }
}

const aswa = new Employee("aswa");
aswa.sayHello("hexs");

const hexs = new Manager("hexs", "project");
hexs.sayHello("aswa");

console.log(aswa);
console.log(hexs);
