/*

Variabel adalah sebuah nama yang mewakili sebuah nilai.
Variabel bisa diisi dengan berbagai macam nilai seperti string
(teks), number (angka), objek, array, dan sebagainya.

*/

// dalam javascript untuk yang sekarang lebih banya meggunakan let dan const abaikan var

// let adalah variabel yang dimana dapat di ubah 
let x = 5; 

console.log(x);

x = 10; // mengubah nilai x menjadi 10

console.log(x);

// sekarang kita masuk ke const
const y = 2
console.log(y); 

y = 5; // ini akan error karena const tidak bisa di ubah nilainya
console.log(y);


// dalam variabel dapat diisi string, boolean, number, object, array dan masih banyak lagi

let sapa = "hallo dunia";
let angka = 20;
let kamuSukaAku = false;
let person = {
    name: "budi",
    age: 30
}
let list = [1, 2, 3, 4, 5];