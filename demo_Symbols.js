var _a;
var sym1 = Symbol("key");
var sym2 = Symbol("key");
console.log(sym1 === sym2);
var obj = (_a = {},
    _a[sym1] = "value",
    _a);
console.log(obj[sym1]);
