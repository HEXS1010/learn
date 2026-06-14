// in operator
// adalah operator yang bisa dilakukan untuk mengecek apakah sebuah propeti ada di dalam object atau tidak 
// jika properti tersbut ada di object maka hasilnya true
// jika tidak maka hasilnya false
// tidak hanya object, in juga bisa digunakan untuk mengecek index di array

// cara baca "in" artinya kan dalam jadi misalnya ada object kita bilang aku mau cek nama di dalam object person
// contoh
const person = {
    nama: "aswa",
    umur: 19
}

if ("nama" in person) {
    console.log(`ini namanya : ${person.nama}`);
} else {
    console.log("data tidak ditemukan");
}

// peringatan 
// in operator hanya akan mengecek apakah sebuah properti atau index ada atau tidak 
// jadi walaupun nilai properti atau indexnya undefined atau null, maka tetap akan dianggap ada

// contoh
const orang = {
    firstName: "aswa",
    lastName: undefined
}

const hasil = "lastName" in orang;
console.log(`${hasil}`);

const names = [null, "aswa", null];
const NameHasil = 0 in names;
console.log(`${NameHasil}`);