class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return `Hello, ${this.greeting}`;
  }
}

let greeter = new Greeter("Caico");


class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`Woof! Woof!`);
  }
}

const dog = new Dog("momo");
dog.bark();
dog.move(10);

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }

  move(distanceInMeters = 45) {
    console.log(`Galloping...`);
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
console.log(sam.name);

// 当成员被标记成 private时，它就不能在声明它的类的外部访问
class tool {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

// new tool("Pen").name;//Error

// protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问。例如：
class Person {
  protected name: string;
  constructor(name:string) {
    this.name = name;
  }
}

class Emplyee extends Person {
  department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`
  }
}

let howard = new Emplyee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name);

// 构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。
class Person2 {
  protected name: string;
  protected constructor(theName: string) {
    this.name = theName;
  }
}

class Caico extends Person2 {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`
  }
}

let caico = new Caico("Caico", "XiaoPao");
console.log(caico.getElevatorPitch());
// let person2 = new Person2();//Error

// 可以使用 readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
class Octopus {
  readonly name: string;
  readonly numberOflegs: number = 8;
  constructor(theName: string) {
    this.name = theName;
  }
}

let dad = new Octopus("Man with the 8 strong legs");

// 静态属性
class Grid {
  static origin = {x: 0, y: 0};
  calculateDistanceFromorigin(point: {x: number; y: number;}) {
    let xDist = (point.x - Grid.origin.x);
    let yDist = (point.y - Grid.origin.y);
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
}
