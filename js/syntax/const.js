// const javascript
// variabel yang didefinisikan dengan const tidak dapat dideklarasikan ulang
// Variabel yang didefinisikan dengan const tidak dapat Ditetapkan Ulang
// Variabel yang didefinisikan dengan const memiliki Cakupan Blok

// tidak dapat ditugaskan kembali
//contoh
const PI = 3.141592653589793;
PI = 3.14;
PI = PI + 10;

console.log(PI);
// ini err knp ? karena const PI sudah kita isi angka yang tidak boleh diganti dengan cara apa pun

// contoh lain adalah gini
const cars = ["honda", "BWM", "volvo"];

// kita bisa mengubah elementnya
cars[0] = "toyota";
// artinya kita ubah element array di index 0

// kita juga bisa isi element baru kedalam array
cars.push("audi");
console.log(cars);

// contoh yang salah
const name = ["budi", "udin", "agus"];

name = ["saya", "bagas", "anjay"];
// ini akan terjadi error karen kita akan mengganti isi const yang sudah ada variabel, kalau pakai push bisa aja.

// ============= object const ================
// Anda dapat mengubah properti objek konstanta:
const car = {type:"fiat", model:"500", color:"white"};

// bisa mengganti properti
car.color = "red";

// bisa menambahkan properti
car.owner = "jhonson";

console.log(car);


// mendeklarasi ulang sebuah variabel yang sudah ada var menjadi let, const dalam capkupan yagn sama, tidak diperbolehkan:

var x = 2; //diizinkan
const x = 3; //tidak diizinkan

{
    let x = 2; //diizinkan
    const x = 2; //tidak diizinkan
}

{
    const x = 2; //diizinkan
    const x = 2; //tidak diizinkan
}

// mendeklarasikan ulang variabel dengan const, di cakupan yan sama tidak diizinkan
// kalau mendeklarasikan di capukan lain atau di block lain diperbolehkan:
const x = 2; //diizinkan

{
    const x = 3; //diizinkan
}

{
    const x = 4; //diizinkan 
}

