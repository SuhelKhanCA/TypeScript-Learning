// UNION Types

let score: number | string = 33
score = 44
score = "55"

function printId(id: number | string) {
//   console.log(id.toUpperCase()); Error
// Property 'toUpperCase' does not exist on type 'string | number'.
// Property 'toUpperCase' does not exist on type 'number'.
}

// TYPE NARROWING
function printIdCorrected(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}

// IF SAME PROPERTY --> No narrowing need
// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}


// Note : Application
let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle"
// seatAllotment = "crew" // Not assignable