// null 
// merupakan representasi data kosong
// null berbeda dengan undefined, null berarti veriabel sudah ditambahkan valuenya, hanya saja variabelnya null
// sedangkan undefined adalah variabel belum ditambahkan value apapun

let firstName = [];

if (firstName === undefined) {
    console.log("UNDEFINED");
} else if (firstName === null) {
    console.log("NULL");
} else {
    console.log(firstName);
}