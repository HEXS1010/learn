// Konversi string dan number

// saat membuat aplikasi, kadang kita input dari pengguna selalu dalam bentuk string
// sedangkan kita ingin mengelola datanya dalam bentuk number
// maka sangat disarankan untuk melakukan konversi tipe data

// contoh masalah tanpa konversi
// ===========penjelasan============
/* mengapa menjadi 11 ? karena saat ada tanda + maka js akan memiliki 2 fungsi
penjumlahan matematika, atau penggabungan string. nah apa bila ada salah satu data string ia akan mengkonversi nilai lainnya menjadi string */
console.log("=================================");
const value1 = "1";
const value2 = 1;

const sum = value1 + value2;

console.log(`${sum}`);

// solusi seperti ini
/* parselnt(string)
mengkonversi dari sring ke number(bilangan bulat)*/

/* parseFloat(string)
mengkonversi dari string ke number (bilangan pecahan) */

/* Number(string)
mengkonversi dari string ke number(bilangan bulat atau pecahan) */

/* number.toString()
mengkonversi dari number ke string */

console.log("======parseInt======");
const a = parseInt("1");
const b = 1;
const c = a + b;
console.log(c);
console.log(`${parseInt("1.9")}`);
console.log(`${parseInt("123anjay")}`);

console.log("======parseFoat======");
console.log(`${parseFloat("1.5")}`);
console.log(`${parseFloat("1")}`);

console.log("======Number======");
console.log(`${Number("1")}`);
console.log(`${Number("1.5")}`);
console.log(`${Number("1.5kg")}`); // artinya dia ketat jika ada kg di belakang maka NaN

console.log("======toString======");
const x = 1;
const y = 1;
const total = a.toString() + b.toString();
console.log(total);
