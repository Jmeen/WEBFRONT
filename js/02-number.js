//javaScript의 Number
//int, float을 가리지 않음. 산술 연산 가능.

let n1 = 2021; // literal
let n2 = Number(2021); // number객체를 이용 생성

console.log(n1,"==",n2,"?",n1==n2);
console.log(typeof n1, typeof n2);

// 다양한 수치 데이터 입력
const hex = 0xff0000; // 16진수는 앞에  0x를 붙인다.
const oct = 0o10; // 8진수는 앞에 0o 붙인다.

console.log(hex, oct);

// Math 객체 활용 : 수학 내장 객체
console.log("Math ----------");
console.log("Pi상수 : ", Math.PI);
console.log("최댓값 Max :", Math.max(1,5,3,8,56,123,2));
console.log("최솟값 min", Math.min((1,5,3,8,56,123,2)));

// math 반올림
console.log(Math.round(5.344), Math.floor(56.232), Math.trunc(33.22));

// 그외 Number객체가 가진 상수들
console.log("표현할 수 있는 최대 정수", Number.MAX_SAFE_INTEGER);
console.log("표현할 수 있는 가장 큰 수", Number.MAX_VALUE);
console.log("표현할 수 있는 최소 정수", Number.MIN_SAFE_INTEGER);
console.log("표현할 수 있는 가장 작은 수", Number.MIN_VALUE);

console.log("-=-----casting 타입 변환 ---------   ");
// 중간에 데이터 타입이 변경될 수 있다.-> 형변환이 필요한 경우 많다.
// parse계열 메소드 ; parseint, parseFloat

console.log("011", parseInt("011"));
console.log("011",parseInt("011",2)); // 2진수 011를 변환
console.log("0xFF", parseInt("0xff",16)); // 16진수 FF를 변환
console.log("123.456", parseInt("123.456"));
console.log("123.456", parseFloat("123.456"));

// parse 계열의 메서드는 단순히 String, number변환뿐만 아니라.
// 다른 타입으로 변경도 가능하다.
console.log("PI", parseInt(Math.PI)); // Float -> int 변환

// 중요. Nan -> 숫자로 변환 할 수 없는 문자열을 변환하면 Nan(Not a Number)
let v = (parseInt("ABDCE"));
console.log(v);

// nan 이 포함된 산술 연산 -> nan

// number 타입 변수가 Nan인가?
console.log(isNaN(v));

//Infinity
v=1/0;
console.log("1/0 = ",v,typeof v);

// infinity가 포함된 연산식 -> infinity
console.log(v+2021  );

// 유한수치인지 확인 isFinite 함수
console.log("1/0 is FInite?", isFinite(1/0));
console.log("2021 is FInite?", isFinite(2021));
console.log("Nan is Finite?", isFinite(parseInt("abd312")));