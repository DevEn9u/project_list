// Objects
// one of the JavaScript's data types.
// a collection of related data and/or function
// nearly all objects in JavaScript are instances.
// object = { key : value };인데, 이는 key(우리가 접근할 수 있는 변수 = property)와 value(property가 가지고 있는 값)의 집합체리는 의미이다.

// 1. Literals and properties
const obj1 ={}; // object를 만드는 방법 1: 'object literal' syntax
const obj2 = new Object(); // object를 만드는 방법 2: class, new를 이용 'object construcror' syntax
// 자바스크립트에서는 const james = {name:'James', age: 6}; 처럼 class 없이 {}를 이용해서 object 생성 가능.

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const james = { name:'James', age: 6 }; // data를 간편하게 관리하고자 object 사용. 
print(james);

// with JavaScript magic (dramatically typed language)
// can add properties later
james.hasJob = true;  // JS는 동적인 언이이기에 이렇게 추가가 가능
console.log(james.hasJob); // 동적인 특징을 이용하면 유지,보수가 힘들 수 있음.

delete james.hasJob; // 삭제도 가능하다.
console.log(james.hasJob); // undefined가 출력됨.

// 2. Computed properties
// key should be always string 
console.log(james.name); // object 출력 방식1 - 기본 방식. dot('.')을 이용하는 경우는 key에 해당하는 값을 가지고 오고싶을 때 사용.
console.log(james['name']); // object 출력 방식2 - computed property, james의 name을 string('') 형태로 출력. 정확히 어떤 key가 필요한지 모를 때, 즉 rintime에서 결정될 때 사용.
james['hasJob'] = true; // computed properties를 이용해 23에서 삭제한 james.hasJob 객체를 true로 만들 수 있다.
console.log(james.hasJob);

function printValue(obj, key) {
  console.log(obj[key]); // console.log(obj.key)로 하면 object 안에 key라는 프로퍼티가 없으므로 인식을 못함. 따라서 computed property를 이용해 key의 value를 받아오게 한다.
}
printValue(james, 'name'); // key값은 항상 string 형태
printValue(james, 'age');

// 3. Property value shorthand 
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'John', age: 3 };
const person3 = { name: 'Mike', age: 4 }; // 4번째, 5번째 person을 만들려면 번거로우니 함수를 이용.

// 4. Constructor Function
const person4 = new Person('James', 20); // 3. 호출할 때도 new 함수명(class)으로 한다.
console.log(person4);
function Person(name, age) { // 1. 이렇게 다른 계산을 하지 않고 object만 출력하는 함수의 이름은 대문자로 함.
  this.name = name; // 2. return 대신 this.name = name; 형식으로 쓴다.
  this.age = age;
}

// 5. in operator: property existence check (key in obj)
// 해당하는 object 안에 key가 있는지 없는지 확인
console.log('name' in james); // true
console.log('height' in james); // false
console.log(james.height); // undefiend, height 라는 key값을 정의하지 않음.

// 6. for..in vs for..of
// project에서 유용하게 쓰일 수 있는 기능
// for (key in obj)
// 모든 key를 받아서 처리하고 싶을 때
console.clear(); // 이전까지의 console 내용을 지움.
for (key in james) { // for loop, james 안에 있는 key값이 모두 출력됨.
  console.log(key);
}

// for (value of iterable)
// objectr가 아니라 배열같이 순차적인 iterable에 쓰임.
const array = [1, 2, 3, 4];
// 이 데이터 값을 모두 뽑으려면 let을 이용해야함.
// 기존 방식이지만 효율적이지 않음.
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// for..of 를 쓰면 쉽게 출력 가능.
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object assign(dest, [obj1, obj2, obj3,...])
const user = { name: 'James', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user); // user의 name은 james에서 coder로 바뀜.

// object를 복사하는 방법
// old way
const user3 = {}; // 텅텅 빈 object 생성
for (key in user) {
  user3[key] = user[key]; // user3의 key에 user의 key 할당.
}
// console.clear();
console.log(user3);

// new way = Object.assign
const user4 = {}; // 텅텅 빈 object 생성
Object.assign(user4, user); // Object는 JS에 기본적으로 탑재된 object중 하나이며 JS의 모든 object는 Object를 상속한다.
// assign(T, U) 함수는 T(target)에 U(source)의 all properties를 copy.
console.log(user4);

// 전달하는 object는 텅텅 비어있고 return 값은 두 개가 섞인 것이니 이런식으로 쓰면 더 좋다.
const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue 출력, 뒤에 나온 변수에 덮어씌어지는 형식.
console.log(mixed.size); // big 출력
