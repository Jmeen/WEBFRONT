// 함수 선언식
function sum(a, b) { // 매개변수 a,b를 입력으로 받는다.
    return a + b; // return은 함수 종료, 출력데이터를 반환할 수 있음.
}
// 함수 호출
console.log("sum :", sum(2, 4));

// 함수 표현식 : 이름이 없는 함수 -> 익명 함수
// 익명함수는 그 자체로 독립된 객체. - 변수에 할당될 수 있다.
// 다른 함수의 매개변수로 전달될 수 있다.
const asum = function(a, b) {
    return a + b;
}

console.log(typeof asum, "asum :", asum(10,20));

// 익명 함수의 활용
// 1. 즉시 실행 함수
let initText
(function(number){
    let textLiset = ["홀수", "짝수"];
    if(number%2 == 0){
        initText = textLiset[1];
    } else {
        initText = textLiset[0];
    }
    console.log(`인수 ${number}를 이용하여 즉시 실행하였습니다.`)
})(5);
console.log(initText);
// console.log(textLiset); -> 스코프가 종료

