// manipulasi string

let firstName = "Jhon";
let lastName = "Doe";

let fullName = firstName + " " + lastName;
console.log(fullName);

// cara kedua bisa pakai backtick 
// kalau pakai cara yang pertama jika kata katanya banyak akan banyak yang harus di ketik
// cara penulisan `${}`

let fullName2 = `${firstName} ${lastName}`;
console.log(fullName2);


// mengambil bagian dari string berdasarkan index (slice)

let txt = "javascript";

let txt2 = txt.slice(0, 4); // cara bacanya 0 itu startnya kalau 4 itu mau berapa yang diambil 
console.log(txt2);

// contoh selanjutnya

let txt3 = txt.substring(4, 10); 
console.log(txt3);

// mau ganti string lama ke yang baru, tapi ini hanya menerima 2 parameter
let oldText = "halo budi";

let newtext = oldText.replace("halo", "yayan");

console.log(newtext);