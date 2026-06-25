// class getter dan setter

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    const result = value.split(" ");
    this.firstName = result[0];
    this.lastName = result[1];
  }
}

const aswa = new Person("aswa", "meda");
console.log(aswa);
console.log(aswa.fullName);

aswa.fullName = "hexs Project";
console.log(aswa);

