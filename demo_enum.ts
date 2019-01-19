enum Direction {
  Up = 1,
  Down,
  Left,
  Right
}

console.log(Direction.Left);

// 数字枚举
enum Response {
  NO = 0,
  Yes = 1
}

function respond(recipient: string, message: Response): void {
  console.log(recipient + message);
}

respond("Princess Caroline", Response.Yes);
