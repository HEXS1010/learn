// SEARCH METHODS
let name ="HEXS PROJECT";
let regex = /\d/;
// indexOf
// mengembalikan nilai index kemunculan pertama sebuah string dalam sebbuah string atau engembalikan -1 jika string tersebut tidak ditemukan
console.log(name.indexOf("h")); // -1 artinya tidak di temukan
console.log(name.indexOf("H")); // 0 artinya H ada berada di index 0
console.log(name.indexOf("XS")); // 2 artinya XS mulai dari index 2
console.log("======================== .1");

// lastIndexOf
// mengembalikan index kemunculan terakhir dari text tertentu dalam sebuah string
console.log(name.lastIndexOf("E")); // dia mengambil huruf dari belakang walaupun di depannya ada E
console.log("======================== .2");

// search
console.log(regex.test("HEXS"));
console.log("======================== .3");
console.log("======================== .4");
console.log("======================== .5");
console.log("======================== .6");
console.log("======================== .7");
console.log("======================== .8");