// typeof: memeriksa tipe data sebuah variabel
// instanceof: untuk mengecek apakah sebuah data merupakan instance (object) dari sebuah class
// hasOwenProperty: untuk mengecek apakah sebuah object memiliki properti (key)


var a = {
    name: 'bob',
    die: function() {}
};

console.log(a.hasOwnProperty('name')); //true console.log(a.hasOwnProperty('die'));//true console.log(a.hasOwnProperty('kill'));//false

var b = 100;
var c = '100';
var d = function() {};

console.log(typeof a); //object

console.log(typeof b); //number

console.log(typeof c); //string

console.log(typeof d); //function

var myClass = function() {
    var name;

}

var myObject = new myClass();

console.log(myObject instanceof myClass); //true







// salah satu kegunaan introspeksi adalah untuk melakukan validasi data. misalkan kita membuat function
// yang hanya menerima data bertipe string
// maka kita bisa melakukan validasi menggunakan typeof
function validateName(value) {
    if (typeof value == 'string'){
        //kode yang dieksekusi jika value benar bertipe string
    }
}


let data;

if (typeof data === "number") {
    console.log("Number");
} else if (typeof data === "string") {
    console.log("String");   
} else if (typeof data === "boolean") {
    console.log("Boolean");
} else if (typeof data === "function") {
    console.log("Function");
} else {
    console.log("object");
}