// MORE ON FUNCTIONS

// Parameter type annotation
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

// Would be a runtime error if executed!
// greet(42); // Compile time : error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'

// Return type annotation
function getFavoriteNumber(): number {
  return 26;
}

// Functions Which Return Promises
async function getFavoriteNumberPromise(): Promise<number> {
  return 26;
}

// Anonymous Functions
const names = ["Alice", "Bob", "Eve"];

// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});

// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});


