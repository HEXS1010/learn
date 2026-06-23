// method class

class person {
    constructor(name) {
        this.name = name;
    }

    sayHello(name) {
        console.log(`hello ${name}, my name is ${this.name}`);
    }
}

const aswa = new person("aswa");
console.log(aswa);
aswa.sayHello("aswa");

const hexs = new person("hexs");
console.log(hexs);
hexs.sayHello("hexs");