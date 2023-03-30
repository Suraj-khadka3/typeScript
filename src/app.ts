interface User {
  name: string;
  age: number;
  isBlack: boolean;
}
const user: User = { name: "suraj", age: 20, isBlack: false };
// const user:User = { name: "suraj", age: "20", isBlack: "false" };
// cant be used as a User interface is already drawn

function addition(a: number, b: number): number {
  return a + b;
}
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};

function doSomething(fn: DescribableFunction): void {
  console.log(fn.description + " returned " + fn(6));
}

let someString : "hello" = "hllo"
let someNumber : 100 = 200
// doSomething({ description: "GT10", someArg: 5 > 10 });

console.log(addition(1, 2));
console.log(someString, user.name);

let symbol = Symbol('key')
const id : unique symbol = Symbol("key")
console.log(symbol, id)