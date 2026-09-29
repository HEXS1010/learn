// string ini berfungsi sebagai representasi teks

// contoh

let nama = 'hexs'; // menggunakan petik satu
let nama2 = "budi"; // menggunakan petik dua
let nama3 = `siti`; // menggunakan backtick

// kita juga bisa mengakses karakter dalam string

let buah = "apel";

console.log(buah[0]); // a
console.log(buah[1]); // p
console.log(buah[2]); // e
console.log(buah[3]); // l


// kita juga bisa mengetahui panjang kata dalam string
let txt = "hello";

console.log(txt.length);

// kalau mau textnya huruf besar semua
let txt2 = "anjay";

console.log(txt2.toUpperCase());
console.log(txt2.toLowerCase());

// kita juga bisa menghapus spasi dalam string
let txt3 = "             Anjay Mabar            ";

console.log(txt3.trim());