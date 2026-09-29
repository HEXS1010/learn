// type conversion adalah dimana javascript mengubah satu tipe data ke tipe data lain

// dalam type conversion ini di bagi jadi 2 yaitu....

/*
implicit conversion (coercion) adalah konversi tipe data yang dilakukan 
secara otomatis oleh javascript
*/

/*
explicit conversion adalah konversi tipe data yang dilakukan 
secara ekspisit oleh programmer menggunakan metode atau fungsi tertentu
*/


// contoh 
// jika melakukan pertambahan maka akan di conversikan menjadi tipe data string 
let x = "5" + 10;

console.log(x); // 510 string

// jika pengurangan, perkalian dan lain lain maka hasilnya akan number
let y = "5" - 10;
let z = "5" * 10;
let r = "5" / 10;

console.log(y, typeof y); // -5 number
console.log(z, typeof z); // 50 number
console.log(r, typeof r); // 0.5 number
