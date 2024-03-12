// 1. Use strict
// vanilla js는 flexible함.
// 변수를 할당 안하고 'a = 6'이라고 선언을 하면 오류가 안나기 때문에 문제 발생 가능.
// strict 모드는 오류 생겨서 어디서 문제가 발생했는지 알 수 있음.
'use strict'; 

// 2. Variable, rw(read/write)
// let 변수 (added in ES6)

let globalName = 'global name'; // 전역 변수
{ // block 변수
  let name = 'james';
  console.log(name);
  name = 'hello';
  console.log(name);
}
console.log(name);
console.log(globalName);

// var 변수는 더 이상 사용하지 않음!
// var hoisting이 일어나기 때문.
// 호이스팅 : move declaration from bottom to top
// - 변수가 어디에서 선언되든 상관없이 항상 맨 위로 끌어올려주는 것

// 3. Constant, r(read only)
// 선언하고 나면 값이 변하지 않는(Immutable) 데이터 타입
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes

// 4. Variable Types
// primitive(값 자체가 메모리에 저장), single item: number, string, bollean, null, undefined, symbol
// object(너무 커서 메모리에 다 저장되지 않음.), box container
//  - 만약 const james 라고 선언하게 되면 james가 가리키고 있는 곳에는 ref(실제로 object를 가리키고 있는 곳)가 있고, ref를 통해 실제로 object가 담겨있는 메로리를 가리킴. const james로 선언하면 james가 가리키는 포인터만 잠궈서 다른 object로 변경이 불가능하지만 james.name이나 james.age는 변경 가능
// function, first-class function

const count = 17 // integer
const size = 17.1 // decimal number
console.log(`value: ${count}, type: ${typeof count}`)
console.log(`value: ${size}, type: ${typeof size}`)

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt - 숫자 뒤에 n을 붙임
const bigInt = 1234566789099998881234411424n; // 숫자는 (-2**53) ~ (2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const james = 'James';
const sentence = 'hello' + james;
const helloJames = `hello ${james}`; // template literals (string)
// 백틱(`)과 `${}` 를 이용하면 + 기호 없이 간편하게 string을 만들 수 있음.
console.log(helloJames);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true; // true
const test = 3 < 1; // false

// null
// 직접 empty값으로 지정.
let nothing = null;

// undefined
// 값이 지정되지 않음.
let x

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(symbol1 === gsymbol2); // true