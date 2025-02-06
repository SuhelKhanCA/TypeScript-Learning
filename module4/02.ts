// TYPE ALIASES
type Point = {
  x: number;
  y: number;
};

// Use
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

// Type aliases and Union Types
let suhel: User | Admin = { name: "Suhel", id: 22 };
console.log(suhel.id);
suhel = { username: "hc", id: 334 };

export {};
