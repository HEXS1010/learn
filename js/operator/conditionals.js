// kondosional js

// if atau jika 
let hour = 17;
let greeting;

if (hour < 18) {
    greeting = "good day";
    console.log(greeting);
}

let age = 10;
let text = "kamu tidak boleh berkendara";

if (age >= 18) {
    text = "kamu boleh berkendara";
}

console.log(text);

// bisa menggunakan sebuah if pernyataan didalam pernyataan lain if
let umur = 14;
let country = "USA";
let teks = "kamu tidak bisa berkendar";

if (country == "USA") {
    if (umur >= 16) {
        teks = "kamu bisa berkendara"
    }
}

console.log(teks);

// lebih singkatnya 
let Umur = 12;
let negara = "USA";
let paraf = "kamu tidak bisa berkendara";

if (negara == "USA" && Umur >= 16) {
    paraf = "kamu bisa berkendara";
}

console.log(paraf);



// else statement
let jam = 17;
let salam;

if (jam < 18) {
    salam = "selamat pagi"
} else {
    salam = "selamat siang/sore"
}

console.log(salam);
// jika tidak terpenuhi maka eksekusi ini

let ujian = 59;
let hasil;

if (ujian >= 90) {
    hasil = "kamu dapat nilai: A";
} else if (ujian >= 80) {
    hasil = "Kamu dapat nilai: B";
} else if (ujian >= 70) {
    hasil = "Kamu dapat nilai: C";
} else if (ujian >= 60) {
    hasil = "Kamu dapat nilai: D";
} else {
    hasil = "gk usah sekolah";
}

console.log(hasil);


// ternary operator
// untuk menulis singkat if else dengan cara (condition) ? expression1 : expression2

// contoh
let Age = 17;
let angka = (Age < 18) ? "minor" : "adult";

console.log(angka);
// ini artinya dia akan mengeksekusi nilai true baru false, tanda tanya itu kita anggap sebagia pertanyaan baru di sebelah kananya itu jawabannya seperti itu