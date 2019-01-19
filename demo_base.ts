let isDone: boolean = false;

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

let name2: string = "bob";

let age: number = 25;

let sentence: string = `Hello, my name is ${name}, I'll be ${age + 1} years old next month.`;

let list: number[] = [1, 2, 3];

let x: [string, number];
x = ['hello', 10];

enum Color {Red = 1, Green = 4, Blue}

let c: Color = Color.Green;
let colorName: string = Color[2];

console.log(colorName);

let list2: any[] = [100, true, "free"];
list2[1] = 1;

function warnUser(): void {
  console.log("This is my warning message")
}

let u: undefined = undefined;
let n: null = null;

function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error("Something failed");
}

function infiniteLoop(): never {
  while (true) {

  }
}

declare function create(o: object | null): void;

create({prop: 0});
create(null);

// create(42); //Error
