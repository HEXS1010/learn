// class inheritance

class Employee {
  sayHello(name) {
    console.log(`hello ${name}, My name is Employee ${this.name} `);
  }
}

class Manager extends Employee {
  sayHello(name) {
    console.log(`hello ${name}, My name is Manager ${this.name} `);
  }
}

const aswa = new Employee();
aswa.name = "aswa";
aswa.sayHello("hexs");

const hexs = new Manager();
hexs.name = "hexs";
hexs.sayHello("aswa");

console.log(aswa);
console.log(hexs);
