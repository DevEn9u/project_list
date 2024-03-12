function add(num1, num2) {
  return num1 + num2;
}
const sum = add(3, 5); // num1에는 3, num2에는 5가 지정되고 함수가 호출되면서 함수의 코드블럭이 실행되면서 3과5가 더해진 8이라는 값이 return되며 sum이라는 변수에 할당됨.
// 함수 add 안에는 add의 위치를 알려주는 reference가 들어있음.

const doSomething = add; // doSomething이 선언되면서 생긴 메모리의 공간에는 add가 가리키는 ref가 복사돼서 들어감. 즉 doSomething과 add는 똑같은 함수를 가리킴.

const result = doSomething(2, 3);
console.log(result);
const result2 = add(2, 3);
console.log(result2); // result와 result2의 값이 동일.

function print(a, b) { // 인자는 사용자로부터 받아옴. 하지만 이러면 의미없는 naming
  console.log(`${a + b}, ${b}`);
}
print(3, 22); // 25, 22 출력

function print2(name, age) { // 인자를 의미있는 name을 붙임.
  console.log(`name: ${name}, age: ${age}`);
}
print2('John', 22);


// 함수를 다른 함수의 인자로 전달.
function divide(num1, num2) {
  return num1 / num2;
}
function surprise(operator) {
  const result = operator(2, 3);
  // 받아온 operator인자를 실행해서 결과값을 내 result에 할당.
  // operator의 인자값으로 2, 3을 넣었는데 넣지 않으면 아래 surprise(add)를 실행했을 때 NaN이 출력됨.
  // operator(2, 3) 은 add(2, 3)과 동일.
  console.log(result); // opeator 인자의 실행 결과값을 출력
}

surprise(add); // surprise 함수의 operator 인자에 add의 reference가 복사됨. 즉 add 함수를 실행하는 것과 동일.
surprise(divide); 