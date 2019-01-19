let sym1 = Symbol("key");
let sym2 = Symbol("key");
console.log(sym1 === sym2);

let obj = {
  [sym1]: "value"
}
console.log(obj[sym1]);
