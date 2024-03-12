// number, string, boolean, null, undefined
// 위 값들은 작기 때문에 메모리에 값 그대로 전달됨
let age = 2; // 숫자를 이용한 변수 선언할 때 이해하기 쉬운 naming
let number = 1; // 변수 선언시 메모리에 변수를 위한 공간이 생기고 값이 저장됨.
let number2 = number; // number2 메모리에 저장되고, number의 값이 저장됨.
console.log(number); // 1
console.log(number2); // 1

number2 = 3; // number2 값을 변경시킨다고 해서 number의 값이 변환되지는 않는데, 각각 다른 메모리공간에 저장되기 때문.
console.log(number); // 1
console.log(number2); // 3

// Object
// object는 값이 크기 때문에 메모리에 할당이 되고 이를 가리키는 주소의 역할을 하는 것이 reference이다. reference는 object에 저장됨.
let obj = { // key, value로 구성
  name: 'james', // 각각의 key마다 메모리가 할당. name이라는 key(메모리 공간)에 james라는 value가 들어감. 사람의 주소처럼 object의 위치를 나타내는 reference가 있음(Object 변수나 함수가 저장된 곳)
  age: 15,
};
console.log(obj.name); // obj라는 변수의 reference 속 name이라는 변수의 value를 호출.

let obj2 = obj; // obj2라는 변수의 메모리공간 생김.
console.log(obj2.age);

obj.name = 'john'; // obj와 obj2가 같은 주소를 가리키기 때문에 둘다 바뀜.
console.log(obj.name);
console.log(obj2.name);