'use strict'
// Object-orinted programming
// class: template, 정의만 내린 것이라 메모리에 저장 X
// object: instance of a class, 메모리에 저장 O
// Javascript classes
// - introduce in ES6
// - syntactical sugar over prototype-based inheritance : 기존에 존재하던 prototype에 편리함을 제공하고자 문법만 추가한 것

// 1. Class declarations
class Person {
  // constructor, 나중에 object를 만들 때 필요한 data를 전달
  constructor(name, age) {
    //fields, 전달된 data를 field에 할당.
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const james = new Person('james', 25); // create new object
console.log(james.name);
console.log(james.age);
james.speak();

// 2. Getter and setters // 실수를 해도 방어적으로 만들어주는 역할
// 
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() { // age라는 getter를 정의하는 순간 35번째 줄의 this.age는 메모리에 올라가있는 데이터를 읽어오는 것이 아니라 바로 getter를 호출.
    return this._age;
  }

  set age(value) {// set은 값을 설정하기 때문에 value를 받아와야 함.
                  // 35번째의 this.age = age가 원래는 메모리에 age를 할당하지만 setter를 정의하는 순간 기존 방식이 아니라 setter를 호출함.
                  // this.age = value라고 하면 계속해서 setter를 호출하는 무한 호출이 됨.
                  // 그래서 this.age를 this._age로 표현.
    // if (value < 0) {
    //   throw Error('age can not be negative'); 
    // } 좀 공격적인 방법
    this._age = value < 0 ? 0 : value;
    // Ternary value '?', condition ? value1 : value2, condition이 true면 value1, false면 value2 실행. 좀 gentle한 방법
    
  }
}
const user1 = new User('Steve', 'Jobs', -1) // 실수로 -1이라고 한다면?
console.log(user1.age); // -1이 출력이 되지만 말이 안됨. 여기서 get을 보자.

// 3. Fields (public, private) // 최근에 생김.
class Experiment { // constructor 없이 field 정의 가능.
  publicField = 2; // 외부에서 접근 가능
  #privateField = 0; // hashtag가 붙음. class 내부에서만 값이 보여지고 변경 가능.
}
const experiment = new Experiment ();
console.log(experiment.publicField); // 2가 출력됨.
console.log(experiment.privateField); // undefined로 출력됨.

// 4. Static properties and methods // 이것도 최근에 생김. 
class Article {
  static publisher = 'Dream coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined 출력. static은 object마다 할당되어지는 것이 아니라 class 자체에 붙어있음.
console.log(Article.publisher); // 출력됨.
Article.printPublisher(); // class 이름을 활요해서 함수 호출

// 5. Inheritance
// a way for one class to extend another class.
// 공통되는 것들을 여러 번 작성하지 않고 재사용 가능.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {} // extends 키워드를 이용해 Shape를 연장 → 이렇게만 정의해도 Shape class의 fields & methods가 포함됨.
class Triangle extends Shape {
  draw() { // 필요한 함수만 재정의하는 것을 overriding이라 함.
    super.draw();
    console.log('🔺'); // draw()함수를 overriding 해서 Shape class에 정의된 draw() 함수가 호출되지 않음. 이럴때 super.를 사용하면(super.draw()) 부모의 method 호출됨.
  }
  getArea() { // 삼각형의 너비 공식은 사각형과 다르기에 재정의.
    return (this.width * this.height) / 2;
  }
  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue'); // 103rd line 호출
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
// 왼쪽에 있는 object가 오른쪽에 있는 object의 인스턴스인지, 즉 왼쪽에 있는 object가 오른쪽에 있는 class를 이용해서 만들어졌는지 아닌지 확인
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true, js에서 만든 모든 object, class는 js의 object를 상속함.
console.log(triangle.toString());