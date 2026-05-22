// LOGIKA JAVASCRIPT

// !: kebalikan(negasi)
// &&: logika (AND)
// ||: logika OR

// ! negasi
var a = true;
console.log(a);//true
console.log(!a);//false

var b = false;
console.log(!b);//true
// akhir

// && AND
var a = true;
var b = true;

console.log(a && b);//true

a = false;
console.log(a && b);//false

a = b = false;
console.log(a && b);//false

a = b = true;
var c = false;
console.log(a && b && c);//false
// akhir


// || OR
var a = true;
var b = true;

console.log(a || b);//true

a = false;
console.log(a || b);//true

a = b = false;
console.log(a || b);//false

b = true;
var c = false;
console.log(a || b || c);//true
// akhir

// kuis
var a = true;
var b = false;
var c = false;
var d = true;

console.log(a || b && !c && !d)

// cara mengerjakannya dari !, &&, ||