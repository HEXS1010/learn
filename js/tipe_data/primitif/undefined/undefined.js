// undefined adalah tipe data yang dimana kita tidak memberikan nilai pada variabel.
// contoh

let nama;
console.log(nama, typeof nama); // output: undefined

// jika kita ingin memberikan nilai pada variabel, kita bisa melakukannya seperti ini:

nama = "budi";
console.log(nama, typeof nama); // output: budi

let umur = undefined; 

if (umur === undefined && umur === null) {
    console.log("umur belum diisi");
} else {
    console.log("umur sudah diisi");
}

console.log(umur, typeof umur);