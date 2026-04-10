function maketea(TypeofTea) {
  return `Making ${TypeofTea}`;
}
let teaorder = maketea("Green Tea");
// console.log(teaorder);

function OrderTea(teaType) {
  function Confirmorder() {
    return `order confirmed for ${teaType}`;
  }
  return Confirmorder();
}
let result = OrderTea("Latte");
// console.log(result);

function maketea(TypeofTea) {
  return `maketea: ${TypeofTea}`;
}
function processteaorder(Teafunction) {
  return Teafunction("Earl Grey");
}
let order = processteaorder(maketea); 
console.log(order);
