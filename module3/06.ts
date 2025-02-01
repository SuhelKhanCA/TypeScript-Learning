// OBJECT Types

// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
printCoord({ x: 20.0, y: 5.0 });


// OPTIONAL Properties
function printName(obj: { first: string, last?: string }) {
  // Do something on Obj
}
// Both OK
printName({ first: "Alice", last: "Alisson" });
printName({ first: "Bob" });


// OPTIONAL Properties : Potential check
function printName2(obj: { first: string; last?: string }) {

    // console.log(obj.last.toUpperCase());
    
  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }
 
  // A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());
}

printName2({ first: "Alice", last: "Alisson" });
printName2({ first: "Bob" });

export {}