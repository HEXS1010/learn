// sebuah child function bisa mengakses variabel atau function yang dimiliki oleh parent function
// sebaliknya parent function tidak bisa mengakses variabel atau function
// yang dimiliki oleh child

var fn = function() {
    var a = 10;

    function fn_test() {
        var b = 20;
        console.log('#fn_test');
        console.log(a);
    }

    function fn_test2() {
        console.log('#fn_test2');
        console.log(a);

        function fn_test2_child() {
            console.log('##fn_test2_child');
            console.log('a');

            console.log(a);
            console.log('##call fn_test()');

            fn_test();
        }

        fn_test2_child();
    }

    fn_test();
    fn_test2();

    console.log('fn');
    // console.log(b);
}

fn();
