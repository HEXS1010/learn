// PERBANDINGAN

// disini kita belajar operaator perbandingan
// == melihat nilai saja
// === melihat nilai dan tipe
// != melihat nilai aja
// !== melihat nilai dan tipe

// contoh apa bila variabel x = 5
let x = 5;
let y = x == 8;
console.log(y); // false
// knp false ? karena nilainya yang dilihat karena tidak sama sama 5 kalau nilainya sama sama 5 baru true

let a = 5;
let b = a === 5;
console.log(b); // true
// kalau string "5" maka false, karena melihat nilai dan tipe, karena tipenya string maka false walaupun nilainya 5

let p = 5;
let q = p != 8;
console.log(q); //true
// karena melihat nilainnya sama dan masuk akal karena 5 tidak sama dengan 8

let z = 5;
let k = z !== 5;
console.log(k); //true
// kalau string "5" maka false sama seperti tadi.

// lanjut kita belajar juga >, <, >=, <=
let i = 5;
let u = i > 8;
console.log(u); //false

let r = 5;
let t = r < 8;
console.log(t); // true

let j = 5;
let f = j >= 8;
console.log(f); // false

let w = 5;
let l = w <= 8;
console.log(l); // true

// nah kalau ini menarik kalau dia string lihat lah per karakter
let text1 = "20";
let text2 = "5";
let hasil = text1 < text2;
console.log(hasil); // true
// karena yang dibanding adalah "2" dan "5"  jadi jelas 2 lebih kecil dari 5

// contoh lain
let cat = "cat";
let dog = "dog";
let akhir = cat < dog;
console.log(akhir); // true
// karena yang di banding c dan d, apa bila hurufnya sama ?, maka lihat karakter berikutnya

function myUmur() {
  let voteable;
  let age = "hallo";

  age = Number(age);
  if (isNaN(age)) {
    voteable = "input is not a number";
  } else {
    voteable = age < 18 ? "too young" : "old enough";
  }

  console.log(voteable);

}

myUmur();
