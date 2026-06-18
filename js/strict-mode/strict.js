// strict mode

function useStrictMode() {
    'use strict'
    const person = {
        firstName: "aswa"
    };

    with (person) {
        console.log(firstName);
    }
}