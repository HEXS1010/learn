// type conversion adalah dimana javascript mengubah satu tipe data ke tipe data lain

// dalam type conversion ini di bagi jadi 2 yaitu....

/*
implicit conversion (coercion) adalah konversi tipe data yang dilakukan 
secara otomatis oleh javascript
*/

// contoh 
// jika melakukan pertambahan maka akan di conversikan menjadi tipe data string 
let x = "5" + 10;

console.log(x); // 510 string

// jika pengurangan, perkalian dan lain lain maka hasilnya akan number
let y = "5" - 10;
let z = "5" * 10;
let r = "5" / 10;
let p = "abc" - "20"

console.log(y, typeof y); // -5 number
console.log(z, typeof z); // 50 number
console.log(r, typeof r); // 0.5 number
console.log(p, typeof p); // NaN number kecuali di tambah


/*
explicit conversion adalah konversi tipe data yang dilakukan 
secara ekspisit oleh programmer menggunakan metode atau fungsi tertentu
*/

// contohnya 

let num = 300;
let string = String(num); // kita yang ubah 
console.log(string, typeof string);

// cara lain
let text = num.toString();
console.log(text, typeof text);


// ubah ke number
let string2 = "100";
let num2 = parseInt(string2);
console.log(num2, typeof num2);

// kalau mau dia ada koma nya jangan pakai parseInt karena akan genap/ dibulatkan 
let string3 = "57.35";
let num3 = parseFloat(string3);

console.log(num3, typeof num3);