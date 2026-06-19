// constructor di class

// di class kita bisa menambahkan constructor, cimana dengan menggunakan constructor, kita juga bisa menambahkan parameter saat pertama kali membuat objectnya

// kuncinya constructor

class Person {
    constructor(name) {
        console.log(`membuat person ${name}`);
    }
}

const aswa = new Person("aswa");
console.log(aswa);