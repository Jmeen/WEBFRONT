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
position = s1.indexOf("Java", position);  // 검색어 없음
console.log("no keyword", position); // 찾는 검색어 없음 -1


// 문자열 치환 : replace
console.log(s1.replace("JavaScript", "JS"));
// String은 불변 자료형. 내부 데이터는 변경되지 않음.
console.log("원본 : ", s1);

// 좌우 화이트 스페이스 제거 : trim
console.log("                 Hello            ".trim());

// String 보충
// " , ' 상관 안한다. 
// escape 문자 : 특수 문자를 포함할 경우.
// \n : 개행(줄바꿈)
// \t : 탭
// \' : 작은따옴표
// \" : 큰 따옴표
// \` : 백틱(Es6, esc아래)
// \$ : 달러기호(ES6)

let message = "He sain, \"Hello\"";
console.log(message);

let temp = 24;
// 현재 온도는 temp도 입니다.
console.log("현재 온도는 " + temp +"도 입니다.");

// ES6 템플릿 문자열
// ` ~ ` : 하나의 문자열
// $ {자바 스크립트 표현식}
message = `현재 온도는 ${temp}도 입니다.`;
console.log(message);

message="예전에는 여러줄의 \n 문자열을 만드는게 \n 쉽지않았습니다.";
console.log(message);
message=`하지만
지금은
너무도 쉽게
만들 수 있습니다.`
console.log(message);