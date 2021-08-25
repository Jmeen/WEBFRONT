// 한줄 주석
/* 
    여러줄 주석
    : JavaScript 주석은 C,java와 동일
*/
// 내장객체 Console
console.info("정보메시지 ");
console.debug("디버그 메세지");
console.warn("경고 메세지");
console.log("에러 메세지");

console.log("Hello JavaScript");

// 연속으로 데이터를 출력 -> ,로 구분
console.log("String", 2021, true);

// 현재 플랫폼 정보 출력
console.log("process version : ", process.version);
console.log("Process platform:", process.platform);

// 객체의 속성 접근
console.log(Math.PI); // Math 객체의 속성인 PI
console.log(Math.max(1, 2, 5, 7, 8, 9));

console.log("-----------------------");

// var, let, const
var testvar = 10; // 전통적인 할당 방법: 가급적 사용 지양
let testlet = "let ";  // let -> 변경 가능
const testconst = "const"  // Const => 변경 불가. 
// 상수처럼 활용. 선언과 동시에 할당해야함.

console.log("testvar :", testvar);
console.log("testlet", testlet);
console.log("testconst", testconst);

// 값의 변경
testvar = "changed";
testlet = "changed";
// testconst =  "changed"; ==> 변경할 수 없다.

console.log("testvar :", testvar);
console.log("testlet", testlet);
console.log("testconst", testconst);

console.log("-----------------------");

// JavaScript는 동적 타입 언어
// 데이터 타입이 고정되지 않고
// 데이터가 할당 되었을 때, 그 타입이 결정.

let v = "This is String";
// 데이터의 타입을 체크
console.log(typeof(v));

// 다른 데이터 타입 할당
v=2021;

console.log(typeof(v));
