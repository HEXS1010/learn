// NaN
// Not a Number

const a = Number("salah");
const b = a + 100;
console.log(`${b}`);

// isNaN function
// mengecek apakah sebuah number itu NaN atau bukan
// untuk melakukan pengecekan kita menggunakan function isNaN
// hasilnya adalah berupa data boolean, true jika NaN, false jika bukan

console.log(`${isNaN(a)}`)