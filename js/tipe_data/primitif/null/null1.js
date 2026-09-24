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

// null coalescing operator
// adalah null dan undefined
// nullist coalescing operator (??) adalah operator yang mirip dengna ternary operator, yang membedakan adalah
// pada kondisi, jika bernilai null atau undefined, baru value defaultnya diambil 

// contoh tanpa nullist
let parameter = null;

let data = parameter;

if (data === undefined || data === null) {
    data = "nilai default";
}

console.log(data);

// contoh dengan nullist
data = parameter ?? "nilai default";

console.log(data);