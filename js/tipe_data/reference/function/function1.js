// function 
// adalah blok kode program yang akan berjalan saat kita panggil 

/*
    function menggunakan tanda {}
    funtion juga memiliki parameter
    function sama seperti metematika f(x)
*/

function sayHello() {
    console.log("halo cantik");
}

// cara panggil function
sayHello();
sayHello();
sayHello();

// pemisah aja
console.log("--------------------------------------------")


// funtion juga dapat mengembalikan nilai dengan cara pakai return.

function halo() {
    return "Hello world";
}

console.log(halo());

// kita juga bisa menambahkan parameter
// fungsi parameter sebagai tempat untuk menerima data/input dari luar ketika function dipanggil.

function sum(a, b) {
    return a + b;
}

console.log(sum(2, 4));

function getAge(age) {
    return "umur " + "saya " + age + " tahun";
}

console.log(getAge(12));
console.log(getAge(20));
console.log(getAge(30));
