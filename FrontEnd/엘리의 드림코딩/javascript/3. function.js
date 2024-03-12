// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value  
// 
// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing 하나의 함수는 하나의 일만 함.
// naming: doSomething - command형태로 verb 형태로
// e.g. createCardAndPoint -> createCard, createPoint 함수를 깨끗하게 만드는 고민이 필요!
// function is object in JS
function printHello() {
  console.log('Hello');
}
printHello(); // 하지만 이 함수는 단순히 'Hello'만 출력하기 때문에 의미가 없음.

function log(message) { // 매개변수로 message를 전달하면,
  console.log(message); // 전달받은 메시지가 화면에 출력됨.
}
log('Hello@');

// 2. Parameters 
// premitive parameters: passed by value(메모리에 value가 그대로 저장되므로 value가 전달됨.)
// object parameters: passed by reference(메모리에 ref가 저장되어지므로 reference가 전달됨.)
function changeName(obj) { // 이 함수는 전달된 obj의 name을 coder로 바꿈
  obj.name = 'coder';
}
const james = { name: 'james' }; // 메모리 어딘가에 name: 'james'가 저장됨
changeName(james);
console.log(james); // → { name: 'coder' }; 출력됨.

// 3. Default Parameters
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!'); // => console 출력값: Hi! by unknown

// 4. Rest Parameters - ...형태(배열형태로 전달됨)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) { // 배열 출력 방법 1
    console.log(args[i]);
  }

  for (const arg of args) { // 배열 출력 방법 2
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'james');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local varibale
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello, kid';
  }
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b; // return 값이 없는 함수는 retuern undefined; 가 생략된 것임.
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1,2)}`);

// 7. Early return, early exit 
// bad case
function upgradeUser(user) {
  if (user.point > 10) { //user.point 값이 10보다 크면 무언갈 실행해라
    // long upgrade logic
  }
}
// good case
function upgradeUser(user) {
  if (user.point <= 10) { //user.point 값이 10 이하이면 빨리 return해서 함수를 종료.
   return;
  }
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable / 변수에 할당이 되고
// can be passed as an argument to other functions / parameter로 전달되고
// can be returned by another function / return이 됨

// 1. Function Expression
// a funcion declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the executution reaches it.
const print = function() { // 이름 없는 함수(anonymous function)
  console.log('print');    // 변수에 할당, 변수는 함수를 가리킴.
};
print();
const printAgain = print; // 다른 변수(printAgain)에 할당
printAgain();             // 마찬가지로 printAgain은 함수를 가리킴.
const sumAgain = sum;     // 66번 line에서 만든 sum 함수를 sumAgain에 할당.
console.log(sumAgain(1,2));

// 2. Callback function using function expression
function randomQuiz (answer, printYes, printNo) { // answer과, 정답이 맞을 때 호출할 함수 printYes, 틀릴 때 호출할 함수 printNo를 전달함. 매개변수로 함수 객체를 전달해서 호출 함수 내에서 매개변수 함수를 실행하는 것.
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
const printYes = function () { // anonymous function
  console.log('yes!');
};
const printNo = function print() { // named function
  console.log('no!');              // 디버깅할 때 stack traces에 함수이름이 나오게 하기 위함.
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function 
// always anonymous
// const simplePrint = function () { // 기존의 function impression
//   console.log('simplePrint!');
// };
const simplePrint = () => console.log('simplrPrint!'); // arrow function 이용
const add = () => a + b; 
// arrow function을 사용하지 않는다면
// const add = function () {
//  return a + b; 
// }

// IIFE: Immediately Invoked Function Expression, 선언함과 동시에 함수 호출
// function hello() {
//   console.log('IIFE');
// } 
// 라는 함수가 있다면, 괄호로 양끝을 묶고 다시 함수호출용 괄호()를 써준다.
(function hello() {
  console.log('IIFE');
})()

// Quiz
// function calculate(command, a, b)
// command : add, subtract, divide, multiply, remainder

function calculate(command, a, b) {
  switch(command) {
   case 'add':
    return a + b;
   case 'subtract':
    return a - b;
   case  'divide':
    return a / b;
   case  'multiply':
    return a * b;
   case  'remainder':
    return a % b;
  default:
    throw Error('unknown command');
  }
}
console.log(calculate ('add', 2, 3));