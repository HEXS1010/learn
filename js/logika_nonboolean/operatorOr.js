// operator or di non boolean

// operator logika or membaca dai kiri ke kanan
// operator ini akan mengambil nilai pertama yang truthy
// jika tidak ada satupun yang bernilai truthy, maka yang terakhir yang akan di ambil(kanan)

console.log("hello" || '');
console.log("==================");
console.log("" || []);
console.log("==================");
console.log("0" || "NOL"); // dua duanya truthy tapi karena yang sebelah kiri duluan truthy maka yang diambil adalah "0" = string kosong yah
console.log("==================");
console.log("NOL" || "0"); 
console.log("==================");
console.log(0 || "NOL"); 
console.log("==================");
console.log(null || "NULL"); 
console.log("==================");
console.log(undefined || "UNDEFINED"); 
console.log("==================");
// jika keduanya falsy
console.log(0 || false); // yang diambil sebelah kanan
console.log("==================");

// kapan digunakan ini ?

const person = {
    firstName: "",
    lastName: "project"
}

const name = person.firstName || person.lastName;
console.log(name); 

// apa beddanya nullish ? yang (??)
// nah bedanya kalau dalam firstname ada null baru dia keluar lastname
// jika tidak ada maka kosong jadi kita mau ambil yang ada bukan maksa harus firstname aja




