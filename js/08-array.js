// 배열 생성 ; array 객체로 생성
const v1 = new Array(10); // 10개짜리 빈 배열 생성
const v2 = new Array(); // 빈배열 
const v3 = new Array(2021, "String", true); // 어떤 객체든 집어넣을 수 있다.

// .length 속성 : 요소의 갯수
console.log('v1 :', v1, v1.length);
console.log('v2 :', v2, v2.length);
console.log('v3 :', v3, v3.length);

// 리터럴로 생성 (추천)
const v4 = [];
const v5 = [2021, "string", true];

// 배열 타입 확인시 typeof를 사용하면 안된다.
console.log("v4 :", v4, typeof (v4));
console.log('v5 : ', v5, typeof (v5));

// 배열 타입확인 : Array.isArray 활용
console.log('v4 : ', v4, Array.isArray(v4)); // v4가 Array 인가?
console.log('v5 : ', v5, Array.isArray(v5)); // v4가 Array 인가?

// 기본 값으로 채우기 : fill 메서드
const v6 = new Array(10).fill(1);  // 1로 10개가 채워진 배열
console.log("v6 : ", v6);
v6.fill("default"); // v6를 default로 채움
console.log("v6 : ", v6);

// C, Java의 배열보다 다양한 용도로 활용.
const person = {
    name: '홍길동',
    age: 28
}
// 객체의 속성 -> 배열처럼 접근 가능
console.log(person.name, person['name']);
console.log(person.age, person['age']);

// 인덱스를 엄격히 체크하지 않음.
const arr = []; // 빈배열
console.log(arr, arr.length);
// 인덱스 범위 벗어난 접근
arr[10] = 2021;
console.log(arr, arr.length);

console.log('======= 배열의 메서드')
const veges = ['배추', '무', '쪽파']
const sources = ['소금', '고춧가루', '새우젓']

console.log(veges, sources);

// 배열합치기 : concat
const items = veges.concat(sources);
console.log("concat : ", items);

// 배열 요소 합치기 : join
console.log("join :", items.join(",")); // 요소를 ,로 합치기

console.log("======= push & pop")
// push : 배열 맨 뒤에 새 요소 추가
// pop : 배열 맨 뒤의 요소 추출 후 제거
// push+pop : stack처럼 활용 가능.
let fruits = ['banana', 'apple', 'mango', 'orange'];
console.log(fruits);
fruits.push("수박");
console.log(fruits);
console.log('pop:', fruits.pop());// 맨 뒤 요소 추출
console.log('pop:', fruits.pop());// 맨 뒤 요소 추출
console.log('pop:', fruits.pop());// 맨 뒤 요소 추출
console.log('stack : ', fruits);

// shift : 배열의 맨 앞에서 요소추출 후 제거
// push + shift = queue 자료형
fruits = ['banana', 'apple', 'mango', 'orange'];
fruits.push('수박');
console.log(fruits)
console.log('shift : ', fruits.shift()); // 맨 앞 요소 추출
console.log('shift : ', fruits.shift()); // 맨 앞 요소 추출
console.log('shift : ', fruits.shift()); // 맨 앞 요소 추출
console.log('queue : ', fruits);

console.log("======= splice")
// splice : 요소 삭제와 삽입을 한번에 할 수 있다.
fruits = ['banana', 'apple', 'mango', 'orange'];
console.log("원본 : ", fruits);
// 인수가 1개일때 
console.log('splice2 : ', fruits.splice(2));
console.log('원본: ', fruits);
// 인수가 2개일 때 : 1번째 인수 인덱스 부터 2번째 인수 갯수만큼 추출 후 제거
fruits = ['banana', 'apple', 'mango', 'orange'];
console.log("원본 : ", fruits);
console.log('splice 2,1: ', fruits.splice(2, 1));
console.log('원본: ', fruits);

// 인수가 3개 이상이상 : 1번쨰 인수 인덱스 부터, 2번째 인수 갯수만큼 추출후 제거, 3번째 이후 인수들을 삽입
fruits = ['banana', 'apple', 'mango', 'orange'];
console.log("원본 : ", fruits);
console.log('splice 2,1,etc: ', fruits.splice(2, 1, 'kiwi', 'guaba'));
console.log('원본: ', fruits);

console.log("======= reverse")
// Reverse : 배열의 순서를 뒤집는다.
fruits = ['banana', 'apple', 'mango', 'orange'];
console.log("원본 : ", fruits);
fruits.reverse();  // 배열 순서 뒤집기
console.log('reversed : ', fruits);

console.log("======= slice");
// slice : 배열의 일부 추출, 원본이 유지된다.
let slices = fruits.slice(1, 3);
console.log("조각 : ", slices);
console.log("원본 : ", fruits);

console.log("======= sort");
console.log("원본 : ", fruits);
fruits.sort(); // 기본적으로 오름차순
console.log("sort(asc) : ", fruits);

// 사용자의 규칙으로 정렬할 경우, 키 함수를 정의
fruits.sort(function (v1, v2) {
    if (v1 == v2) return 0;  // 반환값이 0이면 순번이 같다.
    if (v1 < v2) return 1;   // v1이 더 작으면 뒤로
    if (v1 > v2) return -1;  // v1이 더 크면 앞으로  --> 내림차순
});
console.log("sort(user Defind):", fruits)

// split : 특정 구분자 기준으로 문자열 분리 -> Arrays 반환
const str = "javascript is something strange than other languages";
let chunks = str.split(" ") // 공백으로 분리
console.log("split:", chunks);

// loop 1:
for (let i = 0; i<chunks.length; i++){
    console.log("Word", chunks[i]);
}

// loop 2 :
for (let word in chunks){
    console.log("word",chunks[word]);
}