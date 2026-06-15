// optional chaining 
// adalah operator (?) merupakan operator yang digunakan untuk mengamankan ketika kita ingin mengakses property sebuah obeject dari data nullish
// jika kita mencoba mengakses property dari sebuah object dari data nullish tanpa menggunakan optional chaining, maka akan terjadi error

// contoh
const person = {
    address: {
        country : "indonesia"
    }
};

// const country = person.address.country;

// console.log(country);
// akan error karena country tidak ada dalam person

// kalau pakai if bisa cuma akan panjang
// if (person.address !== undefined && person.address !== null) {
//     country = person.address.country;
// }

// kalau pakai ini lebih singkat dan jelas
let country = person?.address?.country;
// kalau ini tetap undefined karena masih gak ada country kalau kita isi

console.log(country);