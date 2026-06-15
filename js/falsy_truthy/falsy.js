// falsy
// adalah value yang ketika dalam konteks bollean, dia dianggap false
// ini adalah salah satu fitur unik dari javascript yang berguna, namun kadang juga sering membingungkan
// jadi javascript, kondisi itu tidak hanya boolean tapi diluar boolean pun bisa, namun kita harus tahu berbedanya data falsy atau yang dianggap false

// data falsy
// data yang dianggap falsy
// false
// 0, -0
// "",'', ``
// null
// undefined
// NaN

// contoh 
const data = "";

if (data) {
    console.log("true");
} else {
    console.log("false");
}

// hasilnya false