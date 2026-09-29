// operator ini cara singkat untuk menulis if-else

// cara nulis
// conditional ? expressionIfTrue : expressionIfFalse;

// contoh dasar
let age = 20;
let status = age >= 18 ? "dewasa" : "anak-anak";
console.log(status); // output: dewasa

// contoh dengan perbandingan
let nilai = 85;
let grade = nilai >= 80 ? "A" : nilai >= 70 ? "B" : nilai >= 60 ? "C" : "D";
console.log(grade); // output: A

// contoh dengan string
let nama = "Budi";
let sapaan = nama ? "Halo " + nama : "Halo tamu";
console.log(sapaan); // output: Halo Budi

// contoh dengan angka
let angka = 0;
let hasil = angka !== 0 ? 100 / angka : "tidak bisa dibagi nol";
console.log(hasil); // output: tidak bisa dibagi nol

// contoh nested ternary (bisa lebih dari 2 kondisi)
let suhu = 25;
let cuaca = suhu > 30 ? "panas" : suhu > 20 ? "hangat" : suhu > 10 ? "sejuk" : "dingin";
console.log(cuaca); // output: hangat

// contoh dengan function
function cekGenap(angka) {
    return angka % 2 === 0 ? "genap" : "ganjil";
}
console.log(cekGenap(4)); // output: genap
console.log(cekGenap(7)); // output: ganjil

// contoh dengan boolean
let isLoggedIn = true;
let pesan = isLoggedIn ? "Selamat datang!" : "Silakan login dulu";
console.log(pesan); // output: Selamat datang!

// contoh dengan null/undefined
let user = null;
let namaUser = user ? user.name : "Guest";
console.log(namaUser); // output: Guest

// contoh praktis: diskon belanja
let totalBelanja = 150000;
let diskon = totalBelanja > 100000 ? totalBelanja * 0.1 : 0;
let totalBayar = totalBelanja - diskon;
console.log("Diskon: " + diskon); // output: Diskon: 15000
console.log("Total bayar: " + totalBayar); // output: Total bayar: 135000

// contoh praktis: cek stok barang
let stok = 5;
let pesanStok = stok > 0 ? "Stok tersedia: " + stok : "Stok habis";
console.log(pesanStok); // output: Stok tersedia: 5

// contoh praktis: validasi form
let email = "user@example.com";
let isValidEmail = email.includes("@") ? "Email valid" : "Email tidak valid";
console.log(isValidEmail); // output: Email valid

// contoh praktis: hitung gaji lembur
let jamKerja = 45;
let jamNormal = 40;
var gajiPokok = 5000000;
var rateLembur = 50000;
var jamLembur = jamKerja > jamNormal ? jamKerja - jamNormal : 0;
var totalGaji = gajiPokok + (jamLembur * rateLembur);
console.log("Jam lembur: " + jamLembur); // output: Jam lembur: 5
console.log("Total gaji: " + totalGaji); // output: Total gaji: 5250000
