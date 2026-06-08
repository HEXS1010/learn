// loop disini kita belajar pakai for, while, do while


// for
const cars = ["BMW", "HONDA", "YAMAHA", "VOLVO", "AUDI", "FORD"];
let text = ""; 

for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "\n";
}

console.log(text);
console.log(cars.length);

// \n itu agar dia kebawah

let kata = "";

for (let i = 0; i < 5; i++) {
    kata += "angkanya adalah " + i + "\n";
}

console.log(kata);
