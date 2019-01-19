interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 object"};
printLabel(myObj);


interface SquareConfig {
  color: string;
  width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100};
  if(config.color) {
    newSquare.color = config.color;
  }
  if(config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({color: "black"});

interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20};

let a: number[] = [1, 2, 3, 4];
let ro:ReadonlyArray<number> = a;
console.log(ro[1]);

// ro[2] = 2;
// ro.push(2);
// ro.length = 10;
// a = ro;

interface SearchFunc {
  (source: string, subString: string): boolean;
}

// let mySearch: SearchFunc;
// mySearch = function(source: string, subString: string) {
//   let result = source.search(subString);
//   return result > -1;
// }

let mySearch: SearchFunc;
mySearch = function(src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
}

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date);
}

class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}
