// Type safety and calling method

let message: string = "Hello World!";

let ans = message.toLowerCase();
console.log(ans);


// message(); // Error --> Not a function : Type 'String' has no call signatures.


// Potential risk of static-typing
function showPrb(msg) {
    return msg.toLowerCase();
}


let str = showPrb("This Is Going to work");
console.log(str)
let num = showPrb(404);
console.log(num)


export {};
