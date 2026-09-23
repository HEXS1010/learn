// selanjutnya kita bakal belajar operasi pembanding

/*
    == sama dengan (yang di lihat hanya nilainya saja)
    != tidak sama dengan (yang di lihat hanya nilainya saja)
    === sama dengan (yang dilihat itu nilai dan tipe datanya)
    !== tidak sama dengan (yang dilihat itu nilai dan tipe datanya)
    > lebih besar dari
    < lebih kecil dari
    >= lebih besar atau sama dengan
    <= lebih kecil atau sama dengan

*/

let a = 20;
let b = "20";

console.log(a == b); // true
console.log(a === b); // false

// jadi tau kan sekarang bedanya

let c = 10;
let d = "10";

console.log(c != d); // false
console.log(c !== d); // true

let e = 5;
let f = 10;

console.log(e > f); // false
console.log(e < f); // true
console.log(e >= f); // false
console.log(e <= f); // true
