// INTERFACE

interface Point {
  x: number;
  y: number;
}
// another way to create object
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });


interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail: () => string
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}

// Re-opening --> Adds one more property
interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

// while defining type u have to specify all the properties
const suhel: Admin = {
  dbId: 22,
  email: "suhel@suhel.com",
  userId: 2211,
  role: "admin",
  githubToken: "github",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "suhel50", off: 50) => {
    return 10;
  },
};
suhel.email = "h@hc.com";
// suhel.dbId = 33

export {}