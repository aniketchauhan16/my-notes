const username = {
  "first name": "Aniket",
  isLoggedin: true,
};

username.firstname = "Mr. A";
username.lastname = "Chauhan";

console.log(username["first name"]);
console.log(username.lastname);
console.log(username);
console.log(typeof username);

let today = new Date();
console.log(today.getDate());

//arrays

let heroes = ["superman", "batman", "spiderman", true];
console.log(heroes[2]);

console.log(1 + "1");

let isValue = true;
console.log(isValue + 1);

let isValued = "2abc";
console.log(Number(isValued)); //Nan  = not an number
console.log(typeof Number(isValued)); // number
console.log(Number(null));
