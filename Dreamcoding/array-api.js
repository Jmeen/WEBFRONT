// Q1. make a string out of an array
// 주어진 배열을 스트링으로 변환하세요
{
  const fruits = ["apple", "banana", "orange"];
  // 강사 풀이
  const result = fruits.join("|");
  console.log(result);
  // 내 풀이
  console.log(fruits.toLocaleString());
}

// Q2. make an array out of a string
// 주어지는 스트링을 array로 반환한다.
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  // 두번째 인자는 옵션이다. 어디까지 배열로 만들것인지 리밋을 설정한다.
  const result = fruits.split(",", 2);
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
// 주어진 배열의 순서를 거꾸로 해보세요.
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  // 배열 자체를 변화시키고, 변환된 값도 return한다.
  console.log(array);
}

// Q4. make new array without the first two elements
// 1,2번 요소를 제외한 새로운 배열을 만드세요.
{
  const array = [1, 2, 3, 4, 5];

  // splice는 원본을 자르기때문에 쓰면 안돼욤.
  const result = array.slice(2, 5);
  console.log(result);
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
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
// 점수가 90점인 학생을 찾으세요.
{
  // const result = students.find(function (student, index) {
  //   return student.score === 90;
  // });

  const result = students.find((student) => student.score === 90);
  console.log(result);

  // students.forEach((Student.name, Student.score) => function(){}
  //   if(Student.score=90){
  //     return Student.name
  //   }
}

// Q6. make an array of enrolled students
// 학생들 중 수업을 등록한 학생들만 배열로 골라내어라.
{
  // const result1 = students.filter(function(student){
  //   return student.enrolled===true;
  // })

  const result1 = students.filter((student) => student.enrolled === true);
  console.log(result1);

  // 내 풀이
  let result = [];
  students.forEach(function(student){
    if(student.enrolled == true)
      result.push(student);
  })
  console.log(result)
}

// Q7. make an array containing only the students' scores
// studnet 배열에서 점수만 뽑아와서 배열을 만드세요.
// result should be: [45, 80, 90, 66, 88]
{
 // 강사 풀이
 const result1 = students.map((student)=>student.score);
 console.log(result1)
 
  // 내 풀이
  const result = [];
  students.forEach((student) => result.push(student.score));
  console.log(result)
}

// Q8. check if there is a student with the score lower than 50
// 학생들 중 점수가 50점 아래인 학생이 있는지 확인하시오.
{
  // 있는지 없는지 boolean으로 나타내고 싶을경우.
  const result1 = students.some((student) => student.score < 50);
  console.log(result1)

  // every는 모든 요소가 충족해야 true값이 추출된다. !를 이용하면 반대값 추출
  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2)

  // 내 풀이
  const result = students.filter((student) => student.score < 50);
  console.log(result)
}

// Q9. compute students' average score
// 학생들의 평균 점수를 구해요
{
  // const sum = students.reduce((prev, curr) => {
  //   console.log("---");
  //   console.log(prev);
  //   console.log(curr)
  //   return prev + curr.score;
  // },  0);

  const sum = students.reduce((prev, curr) => prev + curr.score, 0);

  console.log(sum / students.length);
}

// Q10. make a string containing all the scores
// 학생들의 모든 점수를 스트링으로 변환해라.
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join(", ");

  console.log(result)
}

// Bonus! do Q10 sorted in ascending order
// 10번문제를 오름차순으로 정렬하세요.
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .sort((a, b) => b - a)
    .join(", ");
  ;
  
console.log(result)
}
