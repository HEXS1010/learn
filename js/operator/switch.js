// switch
// Berdasarkan suatu kondisi, switch memilih satu atau lebih blok kode untuk dieksekusi

// cara kerja
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}
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