// 어떤 데이터 타입도 boolean이 될 수 있고 true가 될 수 있음.
// false: 0 , -0, ''(empty string), null, undefined
// true: -1, 'something'(string), [](empty array)
let num; // 변수 num에 값을 할당하지 않으면 undefined
if (num) { // num은 undefined, 즉 false
  console.log('true!');
  }

  num && console.log(num); // num이 true이면 console.log(num) 출력
  

// 실제 사용
let obj = {
  name: 'James',
};
if (obj) {
  console.log(obj.name);  
}

obj && console.log(obj.name); // 위 if문과 동일한 대신 깔끔하기에 이렇게 씀(연산자를 쓰는 이유)
