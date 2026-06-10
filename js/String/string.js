//dengan tanda kutip ganda
var brand = "Honda";
//dengan tanda kutip tunggal
var brand = 'Honda';

//angka yang dilingkupi tanda kutip berubah menjadi string (teks) jadi kita tidak bisa melakukan operasi matematika
var n = '123456';

//penjumlahan string dengan number menyebabkan number dikonversi menjadi string hasilnya adalah penggabungan string
var j = ''+123456; //hasilnya sama dengan string '123456'

//teks yang berisi tanda kutip tunggal harus diawali dan diakhiri dengan kutip ganda 
var error = "Can't find user";

//atau menggunakan escape character "\"
var error = 'Can\'t find user';

// bisa double tanda kutip
let text = 'hidup terus berjalan "jhon"'

console.log(text);

// \' nanti akan muncul ' satu tanda petik
let a = "it\'s"
console.log(a);

// \" double tanda pentik ini uga agar mencegah salah kode 
let b = "belajar terus hingga sukses \"john\""
console.log(b);

// \\ membuat garis miring
let c = "panggilannya adalah udin\\ucup"
console.log(c);

// \b backspace, hapus c lalu ganti d
console.log("ABC\bD");

// \f form feed
console.log("hello\fworld");

// \v vertical tab
console.log("hello\vworld");

// \r carriage return
console.log("hello\rworld");

// \t tab
console.log("budi\tumur:20")