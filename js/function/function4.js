// sebuah child function bisa mengakses variabel atau function yang dimiliki oleh parent function
// sebaliknya parent function tidak bisa mengakses variabel atau function
// yang dimiliki oleh child

var fn = function() {
    var a = 10;

    function fn_test() {
        var b = 20;
        console.log('#')
    }
}