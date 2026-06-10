// interpolasi

const firstName = ["jhon", "udin", "agus", "sugiono"];
const lastName = ["doe", "bin ayam", "anjay", "mabar"];

let text = "";

for (let i = 0; i < firstName.length; i++) {
    text += `welcome ${firstName[i]}, ${lastName[i]}!\n`;
}
console.log(text);

// contoh lain

let price = 10;
let VAT = 0.25;

let total = `total: ${(price * (1 + VAT)). toFixed(2)}`;
console.log(total);

