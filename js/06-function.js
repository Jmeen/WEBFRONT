// 함수 선언식
function sum(a, b) { // 매개변수 a,b를 입력으로 받는다.
    return a + b; // return은 함수 종료, 출력데이터를 반환할 수 있음.
}
// 함수 호출
console.log("sum :", sum(2, 4));

// 함수 표현식 : 이름이 없는 함수 -> 익명 함수
// 익명함수는 그 자체로 독립된 객체. - 변수에 할당될 수 있다.
// 다른 함수의 매개변수로 전달될 수 있다.
const asum = function (a, b) {
    return a + b;
}

console.log(typeof asum, "asum :", asum(10, 20));

// 익명 함수의 활용
// 1. 즉시 실행 함수
let initText;
(function (number) {
    let textLiset = ["홀수", "짝수"];
    if (number % 2 == 0) {
        initText = textLiset[1];
    } else {
        initText = textLiset[0];
    }
    console.log(`인수 ${number}를 이용하여 즉시 실행하였습니다.`)
})(5);
console.log(initText);
// console.log(textLiset); -> 스코프가 종료

console.log("arguments===")
// 함수의 매개변수
// javascript는 선언부의 매개변수 갯수와 상관없이
// 모든 매개변수가 arguments라는 이름의 배열로 전달.
function getNumberTotal() { // 매개변수를 선안하지 않음
    // console.log(arguments, arguments.length);
    // 모든 매개변수가 전달된다.
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == "number") {
            result += arguments[i];
        }
    }
    return result;
}

console.log(getNumberTotal());
console.log(getNumberTotal(1, 2, 3, 4, 5));
console.log(getNumberTotal(1, 2, "3", 4, 5));

console.log("callback")
// 함수는 문법적 기능이 아니라, 독립된 객체

function usingcallback(val1, val2, func) {
    // 기능을 미정 상태로 두고
    // 함수 호출 시 외부로부터 실행 로직을 전달.
    // 거꾸로 호출 : callback 방식
    if (typeof func == "function") {
        func(val1, val2);
    }
}
usingcallback(7, 5, function (v1, v2) {
    console.log(v1 + v2) // 실행 로직을 호출시 주입
})


usingcallback(7, 5, function (v1, v2) {
    console.log(v1 * v2) // 실행 로직을 호출시 주입
})

// 화살표 함수 , 매개변수 없음.
const f1 = function () { return "hello" };
const f1arrow = () => "Hello";
// 두 함수의 스코프 this가 다르다. 화살표함수는 독자스코프를 가지고있지 않다.


console.log(f1(), typeof f1);
console.log(f1arrow(), typeof f1arrow);

// 화살표함수, 매개변수 한개
const f2 = function (name) { return "Hello" + name };
const f2arrow = (name) => "Hello" + name;

console.log(f2("아이유"), typeof f2);
console.log(f2arrow("아이유"), typeof f2arrow);

// 매개변수 여러개
const f3 = function (a, b) { return a + b };
const f3arrow = (a, b) => a + b;

console.log(f3(7, 5), typeof f3);
console.log(f3arrow(7, 5), typeof f3arrow);

// 콜백함수를 전달할때 사용
usingcallback(40, 50,((v1,v2)=>console.log(v1 + v2)));