//MODULE IMPORT
//default import
import multiply from "./mathOperationsM.js";
console.log(multiply(5, 8));

//named import
import { add, subtract } from "./mathOperationsM.js";
console.log(add(2, 9));
console.log(subtract(2, 5));
