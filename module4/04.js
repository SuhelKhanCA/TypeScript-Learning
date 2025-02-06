// Extending an interface
function getBear(name, honey) {
    this.name = name;
    this.honey = honey;
    return this;
}
var bear = getBear("Dog", true);
console.log(bear.name);
console.log(bear.honey);
