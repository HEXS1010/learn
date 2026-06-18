// setter
// digunakan ketika  kita ingin mengubah nilai property dan bisanya melakukan proses tertentu sebelum menyimpan nilai

const person = {
    firstName: "hexs",
    lastName: "project",

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    
    set fullName(value) {
        const array = value.split(" ");
        this.firstName = array[0];
        this.lastName = array[1];
    }
}

person.fullName = "hexs Mabar";
console.table(person);

person.fullName = "aswa mabar";
console.table(person);

person.fullName = "udin hugraha";
console.table(person);