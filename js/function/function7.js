// self invoking function

(function() {
    console.log('self-invoking function');
}());

//self-invoking function dengan parameter 
(function(name) {
    console.log('halo,' + name);

}('boss'));

// rest parameter
// fitur dimana kita bisa mengirimkan data sebanyak banyaknya pada satu paramenter, dan secara otomatis akan di konversi menjadi array
// untuk membuat rest paramenter, ada ketentuan 
// rest parameter hanya boleh ada stu function, tidak boleh lebih dari satu
// rest parameter hanya boleh berada diposisi paling akhir, tidak boleh di depan atau di tengah kecuali memang cuma ada 1 paramenter
// di bahasa pemrograman lain, ada juga yang bilang ini adalah variable argument

function sum(nama, ...data) {
    let total = 0
    for (const item of data) {
        total += item;
    }
    console.log(`total ${nama} is ${total}`);
}

sum("orange", 10, 20, 30, 50 ,90);

// spread sytax
// kadang kita terlanjur memiliki data berupa array
// tapi untungnya kita juga bisa mengirim array ke rest parameter
// kita bisa gunakan (titik tiga kali) diikuti dengan array nya ketika menggali function
// fitur ini dinamakan spread syntax

const values = [10, 10, 10, 10, 10, 10, 10];
sum("test", ...values);
