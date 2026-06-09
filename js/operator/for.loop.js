// loop disini kita belajar pakai for, while, do while


// for
const cars = ["BMW", "HONDA", "YAMAHA", "VOLVO", "AUDI", "FORD"];
let text = ""; 

for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "\n";
}

console.log(text);
console.log(cars.length);

// \n itu agar dia kebawah

let kata = "";

for (let i = 0; i < 5; i++) {
    kata += "angkanya adalah " + i + "\n";
}

console.log(kata);



// contoh lain kita akan ubah .length dengan membuat dia jadi variabel agar nulisnya tidak panjang

const makanan = ["nasgor", "ayam goreng", "ayam bakar", "piscok", "jasuke"];

let pan = makanan.length;

let i = 0;

let huruf = "";

for (; i < pan; i++) {
    huruf += (i + 1) + ". " + makanan[i] + "\n";
}

console.log(huruf);
// disini terlihat ada titik koma sendiri karena i kita udah buat sendiri di luar loop startnya jadi kita tinggal tambahkan titik koma.


// kalau ini loop tanpa ujung
// for (;;) {
//     console.log("anjay");
// }


// loop lainnya sama jika kita pakai for ini artinya kita loop secara colom aja 

// kotak
for (let i = 0; i < 5; i++) {
    let baris = "";
    for (let j = 0; j < 5; j++) {
        baris += " * ";
    }

    console.log(baris);
}

// segitiga
for (let i = 0; i <= 5; i++) {
    let baris = "";

    for (let j = 0; j < i; j++) {
        baris += " * ";
    }

    console.log(baris);
}


