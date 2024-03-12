// async와 await은 promise chaining 을 더 간편하게 작성하게 해줌.
// async & await
// clear style of using promise

// 1. async
async function fetchUser() { // 함수 앞에 async를 붙이면 자동으로 code블럭들이 
    // do network requset in 10 secs...라고 가정 
    return 'james';  // promise로 변환됨.
  };


const user = fetchUser();
user.then(console.log);
console.log(user); 

// 2. await
// async가 붙은 함수에서만 사용 가능.
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

async function getApple() {
  await delay(1000); // await을 쓰게되면 delay가 끝날때까지 기다려줌.
  return '🍎';
};

async function getBanana() {
  await delay(1000);
  return '🍌';
};
/** async를 사용하지 않는 chaining
function getBanana() {
  return delay(1000)
  .then(() => '🍌');
} **/

async function pickFruits() { // 지저분한 코드
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
};

pickFruits().then(console.log);


// 3. Useful Promise API
function pickAllFruits() { // all API: 모든 Promise들을 다 받을 때까지 모아줌
  return Promise.all([getApple(), getBanana()]) // getApple, getBanana의 promise를 모두 전달
  .then(fruits => fruits.join(' + '));

}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
} // race API는 promise중 가장 먼저 값을 return한 것이 전달됨.

