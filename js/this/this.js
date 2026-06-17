// this 
// adalah referensi ke object milik siapa 
// tiap lokasi kata kunci this merupakan referensi pemiliknya
// dalam object method this merupakan referensi ke object pemilik function
// di global scope, this merupakan referensi ke global 
// di dalam function, this merupakan referensi ke global
// di function dengan strict mode, this adalah undefined
// dalam event, this merupakan referensi ke element yang menerima event

console.log(this);

function sample() {
    console.log(this);
    
    function inner() {
        console.log(this);

    }
    inner();
}

sample();

const person = {
    name: "hexs",
    sayHello: function (value) {
        console.log(`hello ${value} my name is ${this.name}`);
    }
} 

person.sayHello("budi");
person.sayHello("project");