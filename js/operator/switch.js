// switch
// Berdasarkan suatu kondisi, switch memilih satu atau lebih blok kode untuk dieksekusi

// kadang kita hanya butuh menggunakan kondisi sederhana di if statement, seperti hanya menggunakan perbandingan ==
// switch adalah statement percabangan yang sama dengan if, namun lebuh sederhana cara pembuatannya
// kondisi di switch statement hanya untuk perbandingan ==

// cara kerja
// switch (expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//   // code block
// }

// Beginilah cara kerjanya:
// 1. Ekspresi switch dievaluasi sekali
// 2. Nilai ekspresi tersebut dibandingkan dengan nilai dari setiap kasus
// 3. Jika ditemukan kecocokan, blok kode yang terkait akan dieksekusi
// 4. Jika tidak ada kecocokan, tidak ada kode yang dieksekusi.

// contoh
let day;

switch (new Date().getDay()) {
  case 0:
    day = "senin";
    break;
  case 1:
    day = "selasa";
    break;
  case 2:
    day = "rabu";
    break;
  case 3:
    day = "kamis";
    break;
  case 4:
    day = "jumat";
    break;
  case 5:
    day = "sabtu";
    break;
  case 6:
    day = "minggu";
    break;
}

console.log(day);
console.log("========================");
// artinya dia mengambil hari di komputer kita yang di eksekusi adalah case yang betul jadi kalau salah dia lewati

let x = 0;
switch (x) {
  case 0:
    text = "off";
    break;
  case 1:
    text = "on";
    break;
  default:
    text = "no value";
}

console.log(text);
console.log("========================");

const nilai = "B";

switch (nilai) {
  case "A":
    console.log("dewa jirrr");
    break;
  case "B":
  case "C":
    console.log("hacker");
    break;
  case "D":
    console.log("pro");
    break;
  case "E":
    console.log("noob");
    break;
  default:
    console.log("plenger jirrr, gk udah sekolah!!");
}
