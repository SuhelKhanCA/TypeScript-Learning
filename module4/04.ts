// Extending an interface

interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

function getBear(name:string, honey:boolean) {
    this.name = name;
    this.honey = honey;

    return this;
}

const bear = getBear("Dog", true);
console.log(bear.name);
console.log(bear.honey);

export {}