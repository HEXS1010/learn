//


// tanpa with statement
const person = {
    name: "hexs",
    umur: 30,
    country: "indonesia"
}

console.log(person.name);
console.log(person.umur);
console.log(person.country);


console.log("=============================");
// dengan with statement

const buah = {
    name: "apple",
    color: "red",
    size: "small"
}

with (buah) {
    console.log(name);
    console.log(color);
    console.log(size);

}

// tidak di rekomendasikan di pakai
// hal ini dikarenakan with statement kadang membuat sebuah kode menjadi ambigu