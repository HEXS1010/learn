// closure
// adalah kombinasi function dan bundel referensi ke data sekitar
// kalau local scope tidak dapat diakses di luar local scope nya 
// dengan closure kita bisa membuat sebuah function di locak scope dan referensi ke data sekitar local scope tersebut, kelauar scopenya 

function createAdder(value) {
    const owner = "hexs";
    function add(param) {
        console.log(owner);
        return value + param;
    }

    return add;
}

const addTwo = createAdder(2);
function addTwo(param) {
    console.log("hexs");
    return 2 + param;
}