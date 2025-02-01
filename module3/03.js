"use strict";
// The functions
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    //   return "hello";
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
var res = addTwo(5);
console.log(res);
var upper = getUpper("suhel");
console.log(upper);
