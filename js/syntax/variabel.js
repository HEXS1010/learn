// javascript modern menggunakan let dan const
// javascript lama menggunakan var, tidak disarankan

// const jika nilainya tidak boleh diubah
// gunakan const jika tipe data tidak boleh diubah (array dan objek)
// gunakan let hanya jika anda tidak dapat menggunakan const

// penggunaan let
let x = 5;
let y = 6;
let z = x + y;
console.log(z);

// penggunaan const
const a = 6;
const b = 5;
const z = a + b;
console.log(z);

// garis bawah javascript (_)
// Pengidentifikasi yang mengandung _ adalah nama variabel yang valid
let _lastName = "jhonson";
let _x = 2;
let _100 = 5;
// Kebiasaan di kalangan programmer profesional adalah memulai nama variabel "privat" dengan garis bawah.

// mendeklarasikan let
let carName;
carName = "honda";
console.log(carName);

// mendeklarasikan variabel menggunakan const
const carName = "honda";
// campuran
const price1 = 5;
const price2 = 6;
let total = price1 + price2;
console.log(total);