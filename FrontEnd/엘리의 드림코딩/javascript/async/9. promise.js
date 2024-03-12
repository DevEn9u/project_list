'use strict';

// Promise is a JavaScript object for asynchronous operation.
// state: 프로미스가 만들어져서 지정한 operation을 수행중일 때 -> pending, operation을 성공적으로 마무리하면 -> fulfilled, 파일을 찾을 수 없거나 네트워크에 문제가 있다면 -> rejected
// Producer vs Consumer

// 1. Producer
// promise는 class이기 때문에 new를 이용.
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files): network 관련이나 파일을 읽는 무거운 작업은 promise를 만들어 비동기적으로 처리하는 것이 좋다.
  console.log('doing something...');
  setTimeout(() => {
    // resolve('james');
    reject(new Error('no network'));
  }, 2000);// network 통신을 하는 것처럼 setTimeout을 설정해서 시간에 delay 부여
});

// 2. Consumer: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  }) // promise 값이 잘 수행이 된다면=then : producer의 resolve callback function을 통해 전달한 값이 value의 parameter로 들어옴.
  // then을 호출하면 promise가 return되고 catch가 등록됨.
  .catch(error => {
    console.log(error);
  })
  .finally(() => { // 성공하든 실패하든 마지막에 호출됨
    console.log('finally');
  });

  // 3. Promise Chaining
  const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  })

  fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num-1), 1000);
    });
  })
  .then(num => console.log(num));
  

  // 4. Error Handling
  const getHen = () => 
    new Promise((resolve, reject) => {
      setTimeout(() => resolve('🐓'), 1000);
    });
  const getEgg = hen => 
    new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error(`error! ${hen} => 🥚`), 1000));
    });
  const cook = egg => 
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(`${egg} => 🍳`), 1000); 
    });

    getHen()
    .then(getEgg) // .then(hen => getEgg(hen))생략가능.
    /**.catch(error => { // 전달되어진 error를 사과 처리. 
      return '🍎' // 계란을 받아오는 것은 실패했지만 사과를 받아와 후라이로 만듬.
    }) */
    .then(cook)
    .then(console.log)
    .catch(console.log);