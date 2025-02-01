// Adding types

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

// greet("Maddison", Date()); // error TS2345: Argument of type 'string' is not assignable to parameter of type 'Date'

// expected 
greet("Suhel", new Date());

