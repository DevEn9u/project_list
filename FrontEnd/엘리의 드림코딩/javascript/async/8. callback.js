'use strict';

// JavaScript is synchronous(동기적이다).
// Execute the code block by order after hoisting.
// hoisiting: var, function declaration
// asynchronos는 비동기적, 언제 코드가 실행될 지 예측 불가한 것.
console.log('1');
setTimeout(() => console.log('2'), 1000); // setTimeout: 브라우저 API, 지정시간이 지나면 전달한 콜백함수를 호출. 1000ms(1초)가 지나면 호출(이런것이 비동기적 실행 방법)
console.log('2');
console.log('3');

// Synchronous callback
function PrintImmdiately(print) {
  print();
}
PrintImmdiately(() => console.log('hello')); // 1, 2, 3, hello 출력되고 2 출력.
// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout); // printWithDelay 함수는 전달 받은 print와 timeout을 setTimeout에 요청.
}
printWithDelay(() => console.log('async callback'), 1500); // 1, 2, 3, hello, 2, async callback 출력.


// Callback Hell Example
class UserStorage { // server에서 user data 받아오는 class
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if ( // 1. id와 password를 입력받아서 server에 전달해서 login을 시도
        (id === 'james' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id); // 2. login에 성공하면 id를 받아옴.
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  };

  getRoles(user, onSuccess, onError) {
    if (user === 'james') { // 4. 받아온 id를 이용해 role을 요청해서 받아옴.
      onSuccess({ name: 'james', role: 'admin'}); // 5. role을 받아오면 user의 name과 role이 들어간 object를 받아옴.
    } else {
      onError(new Error('no access'));
    }
  }
}

const userStorage = new UserStorage();
const id = prompt('ID');
const password = prompt('Password');
userStorage.loginUser(  // userStorage를 통해 로그인 시도. 
  id, // 받아온 id와 password를 전달하고 onSuccess와 onError를 전달
  password,
  (user) => { // login에 성공했다면 userStorage의 getRoles에서 사용자의 role 받아옴.
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(`Hello ${(userWithRole.name)}, you have a ${userWithRole.role} role`);
      },
      error => {
        console.log(error);
      }
      );
  },
  (error) => {console.log(error)} // error 발생시 출력.
  );