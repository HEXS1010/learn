// string adalah tipe data yang berisi teks, string diapit oleh tanda petik tunggal atau ganda

// contoh 
const nama = "budi"; // string dengan tanda petik ganda
const nama2 = 'udin'; // string dengan tanda petik tunggal

console.log(nama);
console.log(nama2);


// kita juga bisa yang namanya menggunakan stiring tamplet
// contoh 

const firstName = "budi";
const lastName = "hardano";
const fullName = `nama lengkap : ${firstName} ${lastName}`; // string tamplet menggunakan backtick (``)

// knp kita pakai string tamplet ?, karena lebih mudah 

const namaPanjang = firstName + " " + lastName;
console.log(namaPanjang);

// memang terlihat sama, tetapi jika datanya banyak akan panjang saat ketiknya 

// Esxape Sequence
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