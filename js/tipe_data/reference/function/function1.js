// function 
// adalah blok kode program yang akan berjalan saat kita panggil 


function sum(a,b) {
    //signature, nama = sum, parameter = a & b
    return a + b;
    //body
};

// eksekusi function, tampilkan hasil di console
console.log(sum(1,2));


// karena function juga merupakan sebuah data, kita bisa menulis kode diatas
// sebagai sebuah variabel yang berisi function tanpa nama (anonim):

var sum = function(a, b) {
    return a + b;
};