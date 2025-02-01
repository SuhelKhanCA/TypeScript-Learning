"use strict";
// Object Types
Object.defineProperty(exports, "__esModule", { value: true });
// The parameter's type annotation is an object type
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
printCoord({ x: 20.0, y: 5.0 });
// Optional Properties
function printName(obj) {
    // Do something on Obj
}
// Both OK
printName({ first: "Alice", last: "Alisson" });
printName({ first: "Bob" });
function printName2(obj) {
    // console.log(obj.last.toUpperCase());
    var _a;
    if (obj.last !== undefined) {
        // OK
        console.log(obj.last.toUpperCase());
    }
    // A safe alternative using modern JavaScript syntax:
    console.log((_a = obj.last) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
printName2({ first: "Alice", last: "Alisson" });
printName2({ first: "Bob" });
