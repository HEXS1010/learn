// object ditandai dengan {} siku kurung

/* 
  brand: "honda" (property)
  brand (key)
  "honda" (value)
*/
const car = {};

//notasi objek, lebih disukai

//setiap properti dipisahkan oleh koma & key-value dipisahkan //oleh titik-dua.

const car2 = {
  brand: "BMW",
  color: "white",
  year: 2019,
  price: 100000000
}

const output = car2

console.table(output);
console.log(output, typeof output);



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