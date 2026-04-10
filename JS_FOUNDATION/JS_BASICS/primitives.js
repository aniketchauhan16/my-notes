let balance = 120;
let anotherbalance = new Number(120);
console.log(balance); // number
console.log(anotherbalance); //object
console.log(typeof balance);
console.log(typeof anotherbalance);

let isactive = true;
let isreallyactive = new Boolean(true); // not recommended

let firstname;
let lastname = null;
console.log(firstname); //undefined
console.log(null); //null

//Strings
let mystring = "Hello";
let mystringOne = "HOLA";
let username = "Aniket";

let OldString = mystring + " " + "Aniket";
console.log(OldString);
let NewGreet = `Hello ${username} !`;
let demoOne = `Value = ${2 * 2}`;
console.log(NewGreet);
console.log(demoOne);

let sm1 = Symbol("Aniket");
let sm2 = Symbol("Aniket");
console.log(sm1 == sm2); // false as symbol is known for its unique identity
