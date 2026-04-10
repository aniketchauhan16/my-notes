let teaFlavors = ["Black Tea", "Green Tea", "Oolong Tea"];

const firstTea = teaFlavors[0];
console.log(firstTea);

let cities = ["London", "Tokyo", "Paris", "New York"];
const favCity = cities[2];
console.log(favCity);

let teaTypes = ["Herbal Tea", "White Tea", "Masala Chai"];
teaTypes[2] = "Jasmine Tea";
console.log(teaTypes[2]);

let citiesvisited = ["Delhi", "Dehradun"];
citiesvisited[citiesvisited.length] = "Meerut"; // length funcn = 2 which is in human lang so index of 2 is basically empty
citiesvisited.push("Baghpat");
console.log(citiesvisited);

let teaOrders = ["chai", "iced tea", "matcha", "Earl Grey"];
console.log(teaOrders);
const lastOrder = teaOrders.pop();
console.log(teaOrders);
console.log(lastOrder);

// for objects cALL by refernce for primitives call by value;
let PopularTeas = ["Green Tea", "Oolong tea", "chai"];
let softcopytea = PopularTeas;
PopularTeas.pop();
console.log(softcopytea);

let PopularTeas2 = ["Green Tea", "Oolong tea", "chai"];
let hardcopytea = [...PopularTeas2]; //copies the array contents into a new array
PopularTeas2.pop();
console.log(hardcopytea);

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Seoul"];
// let worldCities = europeanCities + "," + asianCities; gives us output in string not array!
let worldCities = europeanCities.concat(asianCities); // gives output in array!
console.log(worldCities);

let Teamenu = ["masala chai", "oolong", "green tea", "chai"];
let menulength = Teamenu.length;
console.log(menulength);

let CityBucketList = ["kyoto", "london", "cape town", "Vancouver"];
let isLondonInList = CityBucketList.includes("london");
console.log(isLondonInList);
