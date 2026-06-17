// object method

// karena function juga merupakan salah satu tipe data, jadi function pun sebenarnya bisa ditambahkan sebagai property di object
// function di object kadang disebut juga sebagai object method

// contoh
// const person = {
//     name: "hexs",
//     sayHello: function (name) {
//         console.log(`hello ${name}`);
//     }
// }


// menambah method ke object
const person = {
    name: "hexs"
};

person.sayHello = function (name) {
    console.log(`hello ${name}`);
}

person.sayHello("budi");