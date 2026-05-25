// closure
// function fn_A() {
//     var b = 'hello';
//     return function() {
//         return b;
//     }
// }

// var fn_B = fn_A();


// console.log(fn_B);

// console.log(b);



// contoh kode diatas juga bisa kita ubah sehingga fn_A langsung membuat closure dan menyimpannya sebagai fn_B seperti dibawah


var fn_B;

function fn_A() {
    var b = 'hello';
    //buat closure & simpan sebagai fn_B
    fn_B = function() {
        return b;
    }
};

fn_A();
console.log(fn_B()); //hello
