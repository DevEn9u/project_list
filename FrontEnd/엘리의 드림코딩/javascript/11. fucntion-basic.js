// 함수의 기본

// 1. 함수의 선언
function doSomething() { // 이 함수는 console에 log를 출력하는 기능을 수행하고 끝나는 함수.
  console.log('hello');
}

function add(a, b) { // add 함수에 a,b라는 인자를 받아옴.
  const sum = a + b; // sum이라는 변수에 a+b의 값을 할당.
  return sum;        // return을 작성하지 않으면 값이 할당만 됨. 
}

// 2. 함수의 호출
doSomething();

const result = add(2, 3);
console.log(result);
// add(2, 3) 함수를 호출하면 2와 3이 더해지기만 할 뿐, 다른 변수에 저장해서 호출해야 더한 값이 나옴.
// const result = add(2, 3); 를 입력하면, result라는 변수를 정의함과 동시에 add(2, 3) 함수가 호출됨.

//-------------------------------------------


// 위의 예제의 이름과 변수에 1만 붙여 함수를 인자로 전달하는 예제 작성.
function doSomething1(add1) { // doSomehing 함수는 add1 함수를 받아옴.
  console.log(add1); // add1 함수 받아온 것을 출력.
  const result1 = add1(2, 3); // add1 함수 호출, 인자를 숫자 2와 3으로 전달.
  console.log(result1); // 위의 예시처럼 result1 변수를 정의함과 동시에 add1(2, 3) 함수 호출.
} 

function add1(a, b) {
  const sum1 = a + b; 
  return sum1;
}

doSomething1(add1); // 함수의'이름만' 전달. 즉 domSomething 함수를 호출하게 되면 add1 함수 자체가 전달되고, 함수가 나옴.

// doSomething1(add1(2, 3)); doSomething 함수를 호출할 때 인자로 add1 함수를 전달함. 하지만 이건 틀린 방법.
// 이유는 함수를 전달하기 전에 add1(2, 3)이라는 함수를 호출해버림. 이렇게 하면 doSomething() 전에 add1() 먼저 호출이 되면서 add1의 코드가 실행되면서 값이 전달된 sum이라는 값이 doSomthing()의 값으로 전달됨. 따라서 doSomething1(add1(2, 3));는 add1 함수를 전달한 것이 아니라 함수의 값이 전달된 것임.

// doSomething1(add1()); 로 하면 숫자가 아니기 때문에 값이 NaN이 출력됨. 이유는 add1의 값인 sum, 여기서는 숫자가 아니기에 NaN이고 그게 doSomething으로 전달되었기 때문.