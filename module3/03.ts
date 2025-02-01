// The functions

function addTwo(num: number): number {
  //   return "hello";
  return num + 2;
}

function getUpper(val: string) {
    return val.toUpperCase();
}

const res = addTwo(5);
console.log(res);

const upper = getUpper("suhel");
console.log(upper);


// Declaring function with static-types
function signUpUser(name: string, email: string, isPaid: boolean) {
    // Do some operation
}

signUpUser("suhel", "suhel@s.com", false);

// default param.
let loginUser = (name: string, email: string, isPaid: boolean = false) => {
    // Do some operation

};
// calling w/o passing isPaid
loginUser("suhel", "suhel@ms.com");


// DEFINING return type
function getValue(val: number): boolean{
    if (val > 5) {
        return true;
    }
    // return "200 OK"; // not assignable to boolean
    return false;
}


const getHello = (s: string): string => {
  return "some strings";
};


const superheros = ["Superman", "thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]

superheros.map((hero): string => {
  return `hero is ${hero}`;
});


function consoleError(errmsg: string): void {
  console.log(errmsg);
}

// 'never' type
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}


export {};
