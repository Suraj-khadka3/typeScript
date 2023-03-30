var user = { name: "suraj", age: 20, isBlack: false };
// const user:User = { name: "suraj", age: "20", isBlack: "false" };
// cant be used as a User interface is already drawn
function addition(a, b) {
    return a + b;
}
function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6));
}
var someString = "hllo";
var someNumber = 200;
// doSomething({ description: "GT10", someArg: 5 > 10 });
console.log(addition(1, 2));
console.log(someString, user.name);
var symbol = Symbol('key');
var id = Symbol("key");
console.log(symbol, id);
