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

// contoh function generator kompleks

function* buatGanjil(value) {
    for (let i = 1; i <= value; i++) {
        if (i % 2 === 1) {
            yield i;
        }
    }
}


const numbers = buatGanjil(100);
for (const number of numbers) {
    console.log(number);
}

