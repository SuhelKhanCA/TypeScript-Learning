// Types in : Array

const superHeros: string[] = [];

// const heroPower: number[] = []
const heroPower: Array<number> = [];

// Type Alias
type User = {
  name: string;
  isActive: boolean;
};

const allUsers: User[] = [];

// 2D array
const MLModels: number[][] = [
  [255, 255, 255],
  [142, 50, 221],
];

// putting values to these arrays
superHeros.push("spiderman");
heroPower.push(2);
allUsers.push({ name: "Khan", isActive: true });

console.log(superHeros)
console.log(heroPower)
console.log(MLModels)
console.log(allUsers)
