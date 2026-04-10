let sum = 0;
let i = 0;
while (i <= 5) {
  sum += i;
  i++;
}
// console.log(sum);

let j = 5;
countdown = [];
while (j >= 1) {
  countdown.push(j);
  j--;
}
console.log(countdown);

/* because of prompt we have to run this code in browser console
let teaCollection = [];
let tea;

do {
  tea = prompt(`Enter Your Favourite tea (type "stop" to finsih)`);
  if (tea !== "stop") {
    teaCollection.push(tea);
  }
} while (tea !== "stop"); */

let total = 0;
let k = 1;
do {
  total += k;
  k++;
} while (k <= 3);
console.log(total);

let multipliednumbers = [];
let numbers = [2, 4, 6];
for (let index = 0; index < numbers.length; index++) {
  multipliednumbers.push(2 * numbers[index]);
}
console.log(multipliednumbers);

let cities = ["paris", "london", "new york", "tokyo"];
let citylist = [];
for (let n = 0; n < cities.length; n++) {
  citylist.push(cities[n]);
}
console.log(citylist);
