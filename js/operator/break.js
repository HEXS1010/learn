// Break
// break memiliki fungsi untuk menghentikan loop

// contoh
let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  text += "angkanya adalah " + i + "\n";
}

console.log(text);

//  artinya dia akan berhenti sampai 2, urutannya 0,1,2, karena dia akan di hentikan jika nilainya sampai di index 3

// label javascript
// Label adalah pengenal yang diikuti oleh titik dua ( : ).
// lebelname: statement;

// Label mendahului sebuah pernyataan atau blok kode.
// Labelname: {
//     stetament
// }

// label jeda
// break labelname;

// contoh
let txt = "";

loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) {
      break loop1;
    }
    txt += i;
  }
}

console.log(txt);



const name = ["budi", "agus", "udin", "sugiono"];
let kata = '';
list: {
    kata += name[0] + "\n";
    kata += name[1] + "\n";
    break list;
    kata += name[2] + "\n";
    kata += name[3] + "\n";

}

console.log(kata);
// artinya saat nama budi dan agus tercetak list akan di berhentikan jadi yang lain gk tercetak