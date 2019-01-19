var isDone = false;
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
var name2 = "bob";
var age = 25;
var sentence = "Hello, my name is " + name + ", I'll be " + (age + 1) + " years old next month.";
var list = [1, 2, 3];
var x;
x = ['hello', 10];
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 4] = "Green";
    Color[Color["Blue"] = 5] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
var colorName = Color[2];
console.log(colorName);
var list2 = [100, true, "free"];
list2[1] = 1;
function warnUser() {
    console.log("This is my warning message");
}
var u = undefined;
var n = null;
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}
function infiniteLoop() {
    while (true) {
    }
}
