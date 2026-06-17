// function generator

// adalah function yang digunakan untuk membuat data generator
// generator adalah data yng bisa di interasi seperti array

// membuat function generator mengunakan tanda bintang setelah function

// dan untuk mengembalikan data tiao iterasi, bisa digunakan kata kunci yied yang diikuti datanya

// contoh sederhana

function* creatNames() {
    yield "hexs";
    yield "project";
}

const names = creatNames();
for (const name of names) {
    console.log(name);
}