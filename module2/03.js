// Adding types
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
// greet("Maddison", Date()); // error TS2345: Argument of type 'string' is not assignable to parameter of type 'Date'
// expected 
greet("Suhel", new Date());
