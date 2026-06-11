// metode string
let text = "HEXS";
let txt = "PROJECT";
let array = "anjay, bagas, mabar";
let spasi = "            halo               ";
let kata = "aku suka makan ayam, aku suka teh";

// stirng length
// mengembalikan panjang string
console.log(text.length);
console.log("================= .1");

// chartAt
// mengembalikan karakter pada index tertentu dalam sebuah string
console.log(text.charAt(0));
console.log("================= .2");

// charCodeAt
// mengembalikan kode karakter pada index tertentu dalam sebuah string
// dalam bentuk desimal (unicode)
console.log(text.charCodeAt(0));
console.log("================= .3");

// codePointAt
//
console.log(text.codePointAt(0));
console.log("================= .4");

// at
// dapatkan huruf ketigi dari nama
console.log(text.at(2));
console.log(text.at(-1));
console.log("================= .5");

// akses properti []
console.log(text[0]);
console.log("================= .6");

// concat
// menggabungkan dua string atau lebih
console.log(text.concat(" ", txt));
console.log("================= .7");

// slice
// mengekstraksi sebagian dari sebuah string dan mengembalikan bagian yang diekstrasi tersebut dalam string baru
// Metode ini membutuhkan 2 parameter: posisi awal, dan posisi akhir (akhir tidak termasuk).
console.log(array.slice(7, 12));
console.log("================= .8");

// substring
// nilai awal dan akhir yang kurang dari 0 diperlukan sebagai 0 di substring
// bedanya kalau dia -5 misalnya akan dianggap 0 jadi hasilnya yah semuanya
console.log(array.substring(7));
console.log("================= .9");

// toUpperCase
// mengubah huruf menjadi besar
console.log(array.toUpperCase());
console.log("================= .10");

// toLowerCase
// mengubah huruf jadi kecil
console.log(text.toLowerCase());
console.log("================= .11");

// isWellFormed
// mengembalikan nilai true boolean yang menunjukan apakah sebuah string terbentuk dengan benar
// \uD800
// mengecek apakah string valid
console.log(text.isWellFormed());
console.log("================= .12");

// toWellformed
// mengembalikan string baru dimana semua "karakter pengganti tunggal" diganti dengan karakter pengganti unicode(U+FFFD).
// memperbaiki stirng yang tidak valid
console.log(text.toWellFormed());
console.log("================= .13");

// trim
// menghapus spaci dari kedua sisi string
console.log(spasi.trim());
console.log("================= .14");

// trimend
// menghapus spasi kosong di akhir aja
console.log(spasi.trimEnd());
console.log("================= .15");


// cara hitungnya hitung jumalah panjangnya lalu dikurang sama banyak angka yang mau di masukan nah sisanya baru itu padding nya
// padStart
// menambahkan padding pada string di awal
// (target.length, padstring)
console.log(text.padStart(6, "0"));
console.log("================= .16");

// padEnd 
// menambahkan padding pada stirng di akhir
console.log(text.padEnd(7, "x"));
console.log("================= .17");

// repeat
// mengembalikan sebuah string yang berisi sejumlah salinan dari sebuah string
console.log(text.repeat(3));
console.log("================= .18");

// replace
// menggantikan nilai tertentu dengan nilai lain dalam sebuah string
// dia tidak mengubah string asli cuma mengubah output nya aja
console.log(text.replace("HEXS", "PROJECT"));
console.log("================= .19");

// replaceAll
// megubah semua output yang ada 
console.log(kata.replaceAll("aku", "HEXS"));
console.log("================= .20");

// split
// memecah string menjadi array berdasarkan pemisah (separator) yang kita tentukan 
// "," potong setiap kali menemukan ,
// " " diotong setiap menemukan spasi
// "" string dipecah menjadi karakter
// "|" jika ada data pakai ini maka hasilnya akan menjadi ,
// "-" jika ada data pakai (-) maka akan jadi , dipisah pisah
console.log(array.split("-"));
console.log("================= .21");