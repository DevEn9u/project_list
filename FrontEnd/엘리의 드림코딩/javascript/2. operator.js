// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2); // 1은 문자열, 2는 숫자열, 값은 12가 나옴.
console.log(`string literals: 1 + 2 = ${1 + 2}`); // string literals: 1 + 2 = 3 출력됨.
console.log('jimmy\'s notebook'); // single quote가 중간에 생기면 에러가 나기 때문에 \를 입력해준다.
console.log("James' \n\tnotebook") // \n: 스페이스, \t: 탭키

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // subtract
console.log(1 * 1); // multiply
console.log(1 / 1); // devide
console.log(3 % 2); // remainder
console.log(2 ** 3); // exponentiation: 거듭제곱

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;  counter + 1을 한 값을 다시 counter에 할당하는 것을 의미. 여기서는 3
// preIncrement = counter; 그리고 다시 preIncrement에 counter 값을 할당.
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter; 먼저 counter 값을 postIncrement에 할당. 여기서는 위에 preIncrement 변수로 인해 postIncrement = 3; 인 상황
// counter = counter + 1; 그 뒤에 counter의 값에 1을 더함.
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
// 비교연산자

// 6. Logical oporators : ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// ||(or), finds the first truthy value. 항목 중 하나만 true면 다 true. 굳이 check 함수같이 시간이 걸리지만 의미없는 함수를 호출할 필요 없음. 호출해야 한다면, 오래걸리는 함수는 제일 마지막에 배치!
console.log(`or: ${value1 || value2 || check()}`);

// &&(and), finds the fisrt falsy value
console.log(`and: ${value1 && value2 && check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log('omg');
  }
  return true;
}

// !(not)
console.log(!value1); // value 1의 값은 false, !(not)는 값을 반대로 바꿔주기에 console에서 true가 출력됨.

// 7. Equality Operators
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion : type을 변경해서 검사
console.log(stringFive == numberFive); // 같다. 출력값: true
console.log(stringFive != numberFive); // 같지 않다. 출력값: false

// === strict equality, no type conversion : type 변경 안함.
console.log(stringFive === numberFive); // 출력값: false
console.log(stringFive !== numberFive); // 출력값: true

// object equality by reference
const james1 = { name: 'james' }; // james1과 james2는 각각 다른 reference와 object를 가짐
const james2 = { name: 'james' };
const james3 = james1 // james1과 james3은 같은 reference를 가짐.
console.log(james1 == james2); // false
console.log(james1 === james2); // false
console.log(james1 === james3); // true

// equality - puzzler
console.log(0 == false); // true: 0, null, NaN, undefined는 false로 간주될 수 있음.
console.log(0 === false); // false, type이 다르기 때문!)
console.log('' == false); // true
console.log('' === false); // false, type이 다르기 때문!)
console.log(null == undefined); // true
console.log(null === undefined); // false, type이 다르기 때문!)

// 8. Conditional operators: if
// if, else if, else
const name = 'james';
if (name === 'james') {
  console.log('Welcome, James!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('Who are you?');
}

// 9. Ternary opreator: ?
// condition ? value1 : value2; // condition이 true이면 value1, 아니면 value2 실행.
console.log(name === 'james' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks, else if를 많이 사용할 때 사용하면 좋음.
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}

// 11. Loops
// while loop, while the condition is truthy, body code is executed.
let i = 3; 
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first, then check the condition.
do {
  console.log(`do while: ${i}`);  // block({}을 의미)을 먼저 실행하고 나서
  i--;
} while (i > 0) // 조건이 맞는지 안맞는지 검사.

// for loop, for(begin; conditionl; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration: block 안에 let이라는 지역 변수 선언
  console.log(`inline variable for: ${i}`);
}

// nested loops, cpu에 부담을 주기 때문에 피하는 것이 좋음.
for (let i = 0; i < 10; i++) { // for 문 안에 for을 작성하면, 여기선 i: 0, j: 0~9를 출력하고 이후 i: 1, j=0~9를 출력. i값이 9가 될 때 까지 반복.
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break: 반복을 끝냄, continue: 지금 것만 skip 하고 다음 step으론 넘어감

// Q1. iterate from 0 to 10 and print only even numbers (use continue)
  for (let i = 1; i < 11; i++) {
    if (i % 2 === 1){
      continue;
    }
    console.log(i);
}
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
  for (let i = 1; i < 11; i++) {
    if (i > 8) {
      break;
    }
    console.log(i);
  }