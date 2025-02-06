"use strict";
// INTERFACE
Object.defineProperty(exports, "__esModule", { value: true });
// another way to create object
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });
// while defining type u have to specify all the properties
var suhel = {
    dbId: 22,
    email: "suhel@suhel.com",
    userId: 2211,
    role: "admin",
    githubToken: "github",
    startTrail: function () {
        return "trail started";
    },
    getCoupon: function (name, off) {
        return 10;
    },
};
suhel.email = "h@hc.com";
