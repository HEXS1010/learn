// while loop
// syntaxnya gini yah

const prompt = require("prompt-sync")();


// while (condition) {
//   // code block to be executed
// }

// contoh
let i = 0;
let text = "";
while (i <= 10) {
    text += "angkanya adalah: " + i + "\n";
    i++;
}

console.log(text);

// contoh dengan bintang

// kotak
let i = 0;
while (i < 6) {
    let baris = "";
    let j = 0;

    while (j < 6) {
        baris += " * ";
        j++;
    }

    console.log(baris);
    i++;
}

// segitiga
let i = 0;
while (i <= 6) {
    let baris = "";
    let j = 0;

    while (j < i) {
        baris += " * ";
        j++;
    }

    console.log(baris);
    i++;
}


// do while 
// ini akan mengeksekusi satu kali kode do sebelum dicek apakah kondisinya benar ?
// kemudian aoan mengulai perulangan selama kondisi benar
// do while berjalan setidaknya sekali meskipun kondisinya salah sejak awal.

// contoh
let i = 0;
let text = "";
do {
    text += "angkanya adalah " + i + "\n";
    i++;
}
while (i < 10);

console.log(text);


// buat input biasa dengan do while
let angka;

do {
    angka = Number(prompt("Masukkan angka lebih dari 10: "));
} while (angka <= 10);

console.log("Angka yang diterima: ", angka);