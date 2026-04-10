let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "chai") {
    break;
  } else selectedTeas.push(teas[i]);
}
//console.log(selectedTeas);

cities = ["london", "newyork", "Paris", "berlin"];
visitedCities = [];
for (let n = 0; n < cities.length; n++) {
  if (cities[n] === "paris" || cities[n] === "Paris") {
    continue;
  } else {
    visitedCities.push(cities[n]);
  }
}
// console.log(visitedCities);

let numbers = [1, 2, 3, 4, 5];
let smallnumbers = [];
for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallnumbers.push(num);
}
//console.log(smallnumbers);

let teamenu = ["chai", "Green tea", "herbal tea", "black tea"];
prefferedteas = [];
for (const teas of teamenu) {
  if (teas === "herbal tea") {
    continue;
  }
  prefferedteas.push(teas);
}
// console.log(prefferedteas);

let citypopulation = {
  London: 890000,
  "New York": 820000,
  Paris: 220000,
  Berlin: 180000,
};
let largecities = {};
for (const city in citypopulation) {
  if (citypopulation[city] < 300000) {
    continue;
  }
  largecities[city] = citypopulation[city];
}

let teanames = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
teanames.forEach(function (tea) {
  if (tea === "chai") {
    return;
  }
  availableTeas.push(tea);
});
// console.log(availableTeas);

let myworldcities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let travelledcities = [];
myworldcities.forEach((citie) => {
  if (citie === "Sydney") {
    return;
  }
  travelledcities.push(citie);
});
//console.log(travelledcities);

let nums = [2, 5, 7, 9];
let doublednumbers = [];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 7) {
    continue;
  }
  doublednumbers.push(nums[i] * 2);
}
// console.log(doublednumbers);

let teaTypes = ["chai", "Green Tea", "Black Tea", "Jasmine Tea", "Herbal Tea"];
let shortTeas = [];
for (const Ts of teaTypes) {
  if (Ts.length > 10) {
    break;
  }
  shortTeas.push(Ts);
}
// console.log(shortTeas);
