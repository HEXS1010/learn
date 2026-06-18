// destructuring 
// adalah fitur yang bisa digunakan untuk membongkar value - value di array atau object ke dalam variable-variable
// fitur ini sangat mempermudah kita ketika ingin mengambil data dari array atau object tanpa harus melakukan pengambilan data satu persatu

const names = ["hexs", "project", "mabar", "nice", "udin", "budi", "siregar"];

const [firstName, middleName, lastName, ...others] = names;

console.log(firstName);
console.log(middleName);
console.log(lastName);
console.log(others);
