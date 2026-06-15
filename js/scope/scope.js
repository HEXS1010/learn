// scope
// merupakan area akses sebuah data
// ada 2 jenis scope, global scope dan lokal scope

// global scope
let counter = 0;

function hitMe() {
    // lokal scope hitMe
    counter++;
}

hitMe(); // artinya dia bisa mengakses global akses
hitMe();

console.log(counter);

// lokal scope

function one() {
    let oneVariable = "oneVariable"; 
}

function two() {
    let twoVariable = "twoVariable";
}

one();
two();

// console.log(oneVariable); // error karena berada di lokal scope
// console.log(twoVariable);

// nested function scope
