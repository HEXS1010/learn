// STRING TAMPLET

// biasanya kita menambahkan string lain dengan cara pakai tanda +, nah jika menggunakan string tamplet kita seperti mengambil data variabel, atau bahkan melakukan operasi matematika
// cara menggunakan string tamplet kita pakai backtick (``)

// contoh 

const name = "hexs project";
const firstName = "hexs";
const lastName = "project";
const template = `name : ${name}`;
const template2 = `name : ${firstName} ${lastName}`;

console.log(template);
console.log(template2);