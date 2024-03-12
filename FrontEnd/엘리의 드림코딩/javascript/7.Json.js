// Json (JavaScript Object Notation)

// 1. Object to Notation
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const cat = {
  name: 'cheese',
  color: 'gray',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(cat);
console.log(json);

json = JSON.stringify(cat, ['name', 'color']); // name과 color만 json으로
console.log(json);

json = JSON.stringify(cat, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'lemon' : value; // key가 name이 오면 무조건 lemon으로 설정하고, name이 아니면 original value 사용
});
console.log(json);

// 2. Json to Object
// parse(json)
json = JSON.stringify(cat);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
}); // json에서 obj로 변환
console.log(obj);
cat.jump();
// obj.jump(); // 처음 obj에서 json으로 serialize된 것을 다시 obj화하면서 jump() 함수는 포함되지 않았기 때문에 출력되지 않는다.

console.log(cat.birthDate.getDate());
console.log(obj.birthDate.getDate()); // birthDate는 string이기 때문에 출력 안됨, 하지만 36번 함수에서 key 값이 birthDate면 새로운 object인 Date를 만들 것으로 설정하여 출력되게 만듬.
// 
// 
// 결론은 json은 stringify와 parse를 각각 callback function을 이용하여 통제할 수 있다는 것.
