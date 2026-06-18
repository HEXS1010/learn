// get
// digunakan ketika ingin mengambil atau menghasilkan nilai dari suatu property

// contoh 
const person = {
    firstName: "hexs",
    lastName: "project",

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

person.firstName = "aswa";
console.log(person.fullName);