// operator && and
// operator and membaca dari kiri ke kanan
// operator ini akan mengambil nilai pertama yang falsy 
// jika tidak ada satu pun yang bernilai falsy, maka yang terakhir yang akan diambil (kanan)

console.log("hello" && ''); // string kosong
console.log("==================");
console.log("" && []); // string kosong
console.log("==================");
console.log("0" && "NOL"); // dua duanya truthy tapi karena yang sebelah kanan duluan truthy maka yang diambil adalah "NOL"
console.log("==================");
console.log("NOL" && "0"); 
console.log("==================");
console.log(0 && "NOL"); 
console.log("==================");
console.log(null && "NULL"); 
console.log("==================");
console.log(undefined && "UNDEFINED"); 
console.log("==================");
// jika keduanya falsy
console.log(0 && false); // yang diambil sebelah kanan
console.log("==================");

// ingat aja ambil yang falsy jika keduanya truthy ambil yang kanan selesai

