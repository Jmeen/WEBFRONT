// javaScrtpt 문자열
const s1 = "morden JavaScript and Java"; // literal
const s2 = String("modrdern Javascript");

console.log(typeof s1, typeof s2);

//property: .length- 문자열의 길이
// 문자열의 내부 데이터는 인덱스로 접근 가능하다.
console.log("문자열:", s1, "길이",s1.length)

// 문자열 추출 메서드
console.log(s1.charAt(7));
console.log(s1[7]); // 배열처럼 사용할 수 있음. 다만 불변자료형만.

// 부분 문자열 추출
console.log(s1.substr(7));  // 7번 인덱스 ~ 끝까지
console.log(s1.substr(7,10));  // 7번인덱스 ~ 10글자
console.log(s1.substring(7));// 7번 인덱스 ~ 끝까지
console.log(s1.substring(7,17));// 7번 인덱스 ~ 17번 인덱스

// 중요! 문자열 검색 메서드
let position = s1.indexOf("Java") // 처음부터 Java를 검색
console.log("1st Java",position);
position += "JavaScript".length; 
position = s1.indexOf("Java",position);

console.log("2nd Java",position);

position += "Java".length;
position = s1.indexOf("Java", position);
console.log("no keyword", position);