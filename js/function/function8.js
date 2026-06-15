// Return function

function fn_A() {
    console.log('hello');
    return function() {
        console.log('world');
    }
}

var myFunc = fn_A();//hello

//myFunc sekarang berisi function yang //dikirim kembali oleh fn_A 
myFunc();//world

// function sebagai value
// function tidak hanya bisa digunakan sebagai kode program yang dieksekusi, tapi bisa juga sebagai value
// artinya, function bisa disimpan di variable, bisa juga dikirim melalui perameter function lainnya

function sayHello(name) {
    console.log(`hello ${name}`);
}

sayHello("udin");

const say = sayHello;

say("budi");


// function di parameter
function giveMeName(callback) {
    callback("hexs");
}

giveMeName(sayHello);
giveMeName(say);