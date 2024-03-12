'use strict';

// Callback Hell Example
class UserStorage { // server에서 user data 받아오는 class
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if ( // 1. id와 password를 입력받아서 server에 전달해서 login을 시도
          (id === 'james' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          resolve(id); // 2. login에 성공하면 id를 받아옴.
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  };

  getRoles(user) {
    return new Primise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'james') { // 4. 받아온 id를 이용해 role을 요청해서 받아옴.
          onSuccess({ name: 'james', role: 'admin'}); // 5. role을 받아오면 user의 name과 role이 들어간 object를 받아옴.
        } else {
          onError(new Error('no access'));
        }
      }, 1000);
    })
  }
};

const userStorage = new UserStorage();
const id = prompt('ID');
const password = prompt('Password');
user.Storage.loginUser(id, password)
.then(user.Storage.getRoles)
.then(user => alert(`Hello ${(user.name)}, you have a ${user.role} role`))
.catch(console.log);


/** 아래 코드를 위 promise를 이용해 then, catch를 이용. 
 * userStorage.loginUser(  // userStorage를 통해 로그인 시도. 
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
  ); **/