'use strict'

// Array 🙌 

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // n번째 index 출력
console.log(fruits[fruits.length - 1]); // 가장 마지막 index 출력

// 3. Looping over an array
// print all fruits
// a. for
for(let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) { // fruit 이라는 변수를 생성.
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit)); // arrow function 활용.

// 4. Addition, deletion, copy 
// push: add an item to the end
fruits.push('peach', 'orange');
console.log(fruits);

// pop: remove an item from the end
fruits.pop(); // 맨뒤 아이템 제거
fruits.pop(); // 여러 번 사용가능.
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('peach', 'orange');
console.log(fruits);

// shift: remove an item to the beginning
fruits.shift(); // 맨 앞 아이템 제거
console.log(fruits);

// note! shift, unshift are slower than pop, push.
// 앞의 item을 다루는데 첫 번째 위치한 아이템을 두 번째로 옮기고 새 item을 첫 번째 자리에 옮기는 식의 방식이기 때문.

// splice: remove an item by index position 
fruits.push('strawberry', 'grape', 'lemon');
console.log(fruits);
fruits.splice(1, 3); // fruits.splice(a, b): a는 지우려는 시작 지점, b는 끝나는 지점. 끝나는 지점을 정하지 않으면 시작 지점부터 끝까지 다 지움.
console.log(fruits);
fruits.splice(1, 1, 'grape', 'watermelon'); // 두 번째 인덱스를 지우고 그 위치에 grape와 watermelon 추가.
console.log(fruits);

// combine two arrays
const fruits2 = ['kiwi', 'cherry'];
const newFruits = fruits.concat(fruits2); // fruits와 fruits2 배열을 합침
console.log(newFruits);

// 5. Searching  
// indexOf: find the index
console.log(fruits);
console.log(fruits.indexOf('grape')); // 몇번째 인지 보여줌.
console.log(fruits.indexOf('kiwi')); // 없으면 -1을 출력.

// includes
console.log(fruits.includes('lemon')); // 포함하면 true
console.log(fruits.includes('kiwi')); // 포함하지 않으면 false

// lastIndexOf
fruits.push('orange');
console.log(fruits);
console.log(fruits.indexOf('orange')); // orange가 2개일 때 먼저 있는 위치
console.log(fruits.lastIndexOf('orange')); // 제일 마지막 위치한 것의 위치
