// recursive function
// adalah kemampuan function memanggil function dirinya sendiri
// kadang memang ada banyak problem, yang lebih mudah diselesaikan menggunakan recursive function, sperti contohnya kasus factorial

// pakai loop
function factorial(value) {
    let result = 1;
    for (let i = 1; i <= value; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5));

// faktorial recursive
// tanpa loop jadinya

function factorialRecursive(value) {
    if (value === 1) {
        return 1;
    } else {
        return value * factorialRecursive(value - 1);
    }
}
console.log(factorialRecursive(170));

function numberLoop(value) {
    if (value === 1) {
        return 1;
    } else {
        return value + numberLoop(value - 1);
    }
}

console.log(numberLoop(10));