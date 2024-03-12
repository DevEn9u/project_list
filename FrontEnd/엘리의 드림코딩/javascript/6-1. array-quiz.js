// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const str1 = fruits.join(); // join: Adds all elements of an array separated by the specified separator string.
  const str2 = fruits.join('-'); // 구분자 '-' 
  const str3 = fruits.join(''); // 구분자 없음
  console.log(str1)
  console.log(str2)
  console.log(str3)
}


// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const arrFruits = fruits.split(',', 2); // 콤마 단위로 index 분리, 2는 처음 2개만 배열로 만들게 함.
  console.log(arrFruits);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const revArray = array.reverse(); // reverse: 배열자체 순서를 바꾸고 return값을 바뀐 값으로 출력하는 api
  console.log(revArray);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const arrayShift = array.splice(0,2);
  console.log(arrayShift); // 삭제된 값
  console.log(array); // 삭제된 이후 배열
} // 하지만 new array를 만들어야하기 때문에 splice는 사용 불가, slice 사용.
{
  const array = [1, 2, 3, 4, 5];
  const arrayShift = array.slice(2, 5); // slice는 end 부분이 exclusive하기 때문에 (2, 4) 라고 하면 2번째 index부터 3번째 index까지만 삭제 된다. 4번째 index를 받아오기 위해서 (2, 5)
  console.log(arrayShift);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{ 
  const result = students.find((student) => student.score === 90);
  // callback함수 이용, return값이 boolean 형태여야하고, true면 출력됨.
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled === true);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);

  // map의 다른 사용법
  const arr = [1, 2, 3, 4];
  const multi = arr.map((x) => x * 2);
  console.log(multi);
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50); // true 출력
  console.log(result);

  const result2 = !students.every((student) => student.score >= 50); // every는 모든 student가 해당되어야 출력됨, 여기서 모든 학생의 점수가 50점 이상인 것의 !(반대)이므로 true 출력: 50점 미만의 학생이 있어서 false인데 그것의 반대이기때문.
  console.log(result2);
}

// Q9. compute students' average score
{
 // const result = students.reduce((prev, curr) => {
 // console.log('------');
 // console.log(prev);
 // console.log(curr);
 //  return prev + curr.score;
 // }, 0); 간단하게 만든식은 아래
 const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
  .map((student) => student.score)
  .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
  .map((student) => student.score)
  .sort((a, b) => a - b)
  .join();
  console.log(result);
}
