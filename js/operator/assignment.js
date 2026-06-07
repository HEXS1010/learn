// &&=, ||=, ??=

// operator penugasan logika AND &&=
// digunakan diantara dua nilai.
// jika nilai pertama benar, maka nilai kedua akan diberikan

// y = true && 10
let x = true;
let y = (x &&= 10);

console.log(y); // true

let a = 1;
let b = (a &&= 10); // 10

// ini semua disebut truthy
// truthy adalah Sebuah nilai yang dievaluasi menjadi nilai true di JavaScript
// falsy sebuah nilai yang dievaluasi menjadi nilai false oleh javascript

// truthy dan falsy ini merupakan sebuah sebutan bagi nilai non-boolean yang dievaluasi menjadi boolean karena sifatnya automatic type conversion

// contoh truthy
console.log(Boolean("")); // false
console.log(Boolean(" ")); // true jika ada spasi
console.log(Boolean("0")); // true
console.log(Boolean("asdasd")); // true
console.log(Boolean("'")); // true
console.log(Boolean({})); // true
console.log(Boolean({ a: 1, b: 2 })); // true
console.log(Boolean([])); // true
console.log(Boolean(['',''])); // true

// contoh falsy
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
// console.log(Boolean(Nan)); // false



// sekarang masuk contoh lainnya dalam penerapan ini logika 
let v = false;
let n = v &&= 10; // false
// kenapa false karena logika and apabila ada yang false satu aja maka hsilnya false

let m = undefined;
let w = m &&= 10; // false

// sekarang masuk ke logika ||=
let x = false;
let y = x ||= 10; // 10 atau true

let x = true;
let y = x ||= 10; // true

let x = false;
let y = x ||= true; // true
// kalau logika or mengeksekusi true walaupun ada yang false, apa bila keduanya false baru  hasilnya false

// lanjut logika ??=
// artinya jika nilai pertama tidak terdefinisi atau null, nilai kedua akan diberikan

let x;
x ??= 10; //10
// kenapa 10 ? karena variabel x tidak memiliki nilai jadi masih dianggap undefined maka yang keluar hasilnya 10

// kalau masih bingung ??= ini cuma melihat null dan undefined
// jadi jika ada array kosong, atau 0 akan hasilnya 0 atau [], dia tidak peduli jika nilainya truthy atau falsy yang penting kalau masih ada nilai walaupun kosong tetap tidak akan berubah






