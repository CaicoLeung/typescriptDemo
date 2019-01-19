var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Left);
// 数字枚举
var Response;
(function (Response) {
    Response[Response["NO"] = 0] = "NO";
    Response[Response["Yes"] = 1] = "Yes";
})(Response || (Response = {}));
function respond(recipient, message) {
    console.log(recipient + message);
}
respond("Princess Caroline", Response.Yes);
