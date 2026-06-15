// recursive function
// adalah kemampuan function memanggil function dirinya sendiri
// kadang memang ada banyak problem, yang lebih mudah diselesaikan menggunakan recursive function, sperti contohnya kasus factorial

function factorial(value) {
    let result = 1;
    for (let i = 1; i <= value; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5));