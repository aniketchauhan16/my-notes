let car = {
  make: "Toyota",
  model: "Camry",
  year: 2005,
  start: function name() {
    return `${this.model} car got started in ${this.year}`;
  },
};
// console.log(car.start());

Array.prototype.aniket = function () {
  return `custom method ${this}`;
};

let myArray = [1, 2, 3];
// console.log(myArray.aniket());
let mynewArray = [1, 2, 3, 4, 5];
// console.log(mynewArray.aniket());

class vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    return `${this.model} is manufacured by ${this.make}`;
  }
}
class bike extends vehicle {
  drive() {
    return `${this.make} This is an Inheritance example`;
  }
}

let myBike = new bike("Apache", "RR310");
// console.log(myBike.start());
// console.log(myBike.drive());

class bankaccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  getbalance() {
    return `$ ${this.#balance}`;
  }
}
let credit = new bankaccount();
// console.log(credit.deposit(100));

let account = new bankaccount();
// console.log(account.getbalance());

//Abstraction

class CoffeeMachine {
  start() {
    return `Starting to make your Coffee`;
  }

  brewing() {
    return `Brewing Fresh Coffee For you ....`;
  }

  PushButton() {
    let msg1 = this.start();
    let msg2 = this.brewing();
    return `${msg1} + ${msg2}`;
  }
}

let myCoffee = new CoffeeMachine();
// console.log(myCoffee.start());
// console.log(myCoffee.brewing());

let myezCoffee = new CoffeeMachine();
// console.log(myezCoffee.PushButton());

//Polymorphism
class Bird {
  fly() {
    return `Flying....`;
  }
}

class Penguin extends Bird {
  fly() {
    return ` Penguins cant fly`;
  }
}

let mybird = new Bird();
let myPenguin = new Penguin();
// console.log(mybird.fly());
// console.log(myPenguin.fly());

//Static

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// let myaddition = new Calculator();
// console.log(myaddition.add(2,3)); cant access add

// console.log(Calculator.add(2, 3));

// getters & setters

class Employee {
  #salary;
  constructor(name, salary) {
    if (salary > 0) {
      throw new Error("Salary Cant be -ve");
    }
    this.name = name;
    this.#salary = salary;
  }
  get salary() {
    return `You arent allowed to check this out`;
  }
  set salary(value) {
    if (value < 0) {
      return `Salary cant be -ve`;
    } else {
      this._salary = value;
    }
  }
}
let emp = new Employee("Alice", -50000);
console.log(emp.salary);
