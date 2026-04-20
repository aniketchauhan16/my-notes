let computer = { cpu: 16, ram: "16gb", storage: 1024 };
let lenovo = {
  screen: "HD",
  __proto__: computer,
};
let tomyhardware = {};
// console.log(`Lenevo`, lenovo.__proto__);

let genricCar = { tyres: 4 };
let Tesla = {
  driver: "AI",
};
Object.setPrototypeOf(Tesla, genricCar);
console.log(`Tesla`, Tesla.tyres);
