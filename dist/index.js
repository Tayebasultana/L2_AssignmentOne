"use strict";
// Problem one
function formatString(input, toUpper) {
    return toUpper === false ? input.toLocaleLowerCase() : input.toUpperCase();
}
console.log(formatString("Hello", false ));
