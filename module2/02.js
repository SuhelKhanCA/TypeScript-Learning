function greet(person, date) {
    // error TS2554: Expected 2 arguments, but got 1
    console.log("Hello ".concat(person, ", today is ").concat(date, "!"));
}
greet("Brendan");
