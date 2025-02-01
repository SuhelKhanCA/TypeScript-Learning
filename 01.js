"use strict";
// Type safety and calling method
Object.defineProperty(exports, "__esModule", { value: true });
var message = "Hello World!";
var ans = message.toLowerCase();
console.log(ans);
// message(); // Error --> Not a function : Type 'String' has no call signatures.
// Potential risk of static-typing
function showPrb(msg) {
    return msg.toLowerCase();
}
var str = showPrb("This Is Going to work");
console.log(str);
var num = showPrb(404);
console.log(num);
