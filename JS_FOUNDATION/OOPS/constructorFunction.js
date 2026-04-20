function Person(name, age) {
  this.name = name;
  this.age = age;
}
let identity = new Person("aniz", 19);
// console.log(identity);

function Car(make, model) {
  this.make = make;
  this.model = model;
}
let mycar = new Car("Ferrari", "LaFerrari");
// 1console.log(`my car details: `, mycar);

let mynewcar = new Car("Lambo", "Hurcan");
// console.log(mynewcar);

function Tea(Type) {
  this.Type = Type;
  this.describe = function () {
    return `this is a cup of ${this.Type}`;
  };
}
let LemonTea = new Tea("Lemon Tea");
// console.log(LemonTea.describe());

function animal(species) {
  this.species = species;
}

animal.prototype.sound = function () {
  return `${this.species} makes sound`;
};

let Dog = new animal("dog");
// console.log(Dog.sound());

let Cat = new animal("cat");
// console.log(Cat.sound());

function Drink(name) {
  if (!new.target) {
    throw new Error("Before Drink use new keyword");
  }
  this.name = name;
}

let coffee = Drink("coffee");
console.log(coffee);
