// Return function

function fn_A() {
    console.log('hello');
    return function() {
        console.log('world');
    }
}

var myFunc = fn_A();//hello

//myFunc sekarang berisi function yang //dikirim kembali oleh fn_A 
myFunc();//wor;d