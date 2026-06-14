// object ditandai dengan {} siku kurung

/* 
  brand: "honda" (property)
  brand (key)
  "honda" (value)
*/
var car = {};

//notasi objek, lebih disukai

//setiap properti dipisahkan oleh koma & key-value dipisahkan //oleh titik-dua.

//Tidak boleh menggunakan keyword var
var myCar = {
  brand: "Honda",
  year: 2011,
};

//cara yg sama dengan sintaks associative-array
var yourCar = {};
yourCar["brand"] = "Toyota";
yourCar["year"] = 2012;

// sama seperti associative-array, kita mengakses properti dengan key dalam kurung siku atau dot-notation
console.log(yourCar.brand);
console.log(yourCar['brand']);

const person = {};

person["nama"] = "hexs";
person["umur"] = 20;
person["negara"] = "indonesia";

console.table(person);

delete person["umur"];

console.table(person);


const orang = {
  nama: "aswameda",
  umur: 20,
  negara: "indeonesia"
}
console.table(orang);

// mengakses property object

console.info(`nama : ${orang.nama}`);
console.info(`umur : ${orang.umur}`);
console.info(`negara : ${orang.negara}`);