// continue
// secara sederhana continue akan tetap mencetak nilai yang belum tercetak

// contoh
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i + "\n");
}

// dalam loop ini bisa di lihat no 5 tidak tercetak karena 5 bernilai true jadi continue akan mencetak sisanya dia akan melewatkan angka yang emang salah

// contoh menggunakan label js
let text = "";

loop1: for (let j = 1; j < 5; j++) {
    loop2: for (let i = 1; i < 5; i++) {
        if (i === 3) {
            continue loop1;
        }
        text += i;    
    }
}

console.log(text);
// artinya jika 
// continue loop1
// j = 1 itu masuk ke loop2 
//  i = 1 maka hasilnya (1)
//  i = 2 maka hasilnya (2)
// ========================
// j = 2 masuk lagi ke loop2 tapii i mulai dari 1 lagi
//  i = 1 maka hasilnya (1)
//  i = 2 maka hasilnya (2)
// ========================
// j = 3 masuk lagi ke loop2 sama mulai dari i = 1
//  i = 1 maka hasilnua (1)
//  i = 2 maka hasilnua (2)
// ========================
// j = 4 masuk lagi ke loop2 sama mulai lagi dari i = 1
//  i = 1 maka hasilnya (1)
//  i = 2 maka hasilnya (2)
// ========================
// outputnya 12121212

// continue loop2
// j = 1 itu masuk ke loop2 
//  i = 1 maka hasilnya (1)
//  i = 2 maka hasilnya (2)
//  i = 3 maka ini ke skip 
//  i = 4 maka hasilnya (4)
// knp i = 4 masih ikut ? karena ini continue artinya lewatkan bukan berhaenti. dan ini seterusnnya hingga outputnya 
// 124124124124