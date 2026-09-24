// Arrow function

// adalah alternatif pemebuatan function yang lebih sederhana dari function biasanya
// namun terdapat limitasi dan juga tidak bisa digunakan disemua situasi 
// kekurangan arrow function

// tidak memiliki fitur argument object
// tidak bisa menggunakan function generator
// tidak bisa mengakses this
// tidak bisa mengakses super

const sayHello = (name) => {
    const say = `hello ${name}`;
    console.log(say);
}

sayHello("hexs");

// arrow function tanpa blok
// artinya tanpa {}
// hanya satu baris

const hello = (names) => console.log(`hello ${names}`);

hello("hexs");

// arrow function return value
const sum =(first, second) => first + second;

console.log(sum(100, 50));

// arrow function tanpa kurung parameter
const person = nama => console.log(`hello ${nama}`);

// anonymous function
giveName(function (name) {
    console.log(`hello ${name}`);
});


// arrow sebagai sebagai parameter
giveName((name) => console.log(`hello ${name}`));