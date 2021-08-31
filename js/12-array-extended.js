function testForEach() {
    // forEach 메서드 : 배열의 요소를 하나씩 콜백에 전달
    let source = ['banana', 'orange', 'apple', 'mango'];
    console.log("----- for each")
    source.forEach(item => {
        // 콜백함수의 인자가 1개 : 개별요소
        console.log(item);
    })

    source.forEach((item, index) => {
        // 콜백함수의 인자가 2개 : 개별 요소, 배열 내의 인덱스
        console.log(`${index}번째 요소는 ${item}`);
    })

    source.forEach((item, index, arr) => {
        // 콜백 함수의 인자가 3개 : 개별요소, 인덱스, 배열 자체
        console.log(`배열 ${arr}의 ${index}번째 요소 ${item}`)

    })

}
testForEach();

function testSome() {
    let data = [
        { name: '홍길동', age: 28 },
        { name: '장길산', age: 35 },
        { name: '전우치', age: 25 }
    ]
    // some이나 any : 조건을 만족하는 데이터가 1개 이상 있을 때.
    let result = data.some(x => {
        return x.age > 25;
    })
    console.log('-----some : age>25', result)

}

testSome();

function testEvery() {
    let data = [
        { name: '홍길동', age: 28 },
        { name: '장길산', age: 35 },
        { name: '전우치', age: 25 }
    ]
    // every : 모든 요소가 콜백 함수의 조건을 만족시킬때 true 반환

    let result = data.every(x => {
        return x.age > 25;
    });
    console.log('-----every : age>25', result)


}
// testEvery();

function testFilter() {
    console.log("====== Filter")
    let source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // source로 부터 짝수 요소만 필터링해보자.
    let result = [];
    // 기존방식
    for (let i = 0; i < source.length; i++) {
        //판별
        if (source[i] % 2 == 0) {
            result.push(source[i]);
        }
    }
    console.log('원본:', source);
    console.log('짝수 필터링:', result);

    // ex6 방식
    result = source.filter(item => item % 2 == 0);
    console.log('짝수 필터링:', result);
}
testFilter();

function testMap() {
    console.log("===== Map");
    let source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let result = [];

    // 모든 요소를 2배 한 배열을 만들어라
    // 기존방식
    for (let i = 0; i < source.length; i++) {
        result.push(source[i] * 2);
    }
    console.log("2배:", result);

    // ES6 방식
    result = source.map(item => item * 2);
    console.log("2배:", result);
}
// testMap()

function testReduce() {
    let source = [12, 4, 19, 33, 86];
    // callback
    // acc : 직전까지의 누산값
    // value :현재 요소의 값
    // idx : 현재 요소의 인덱스
    // arr : 누산에 사용되는 배열 자체
    let sum = source.reduce((acc, value, idx, arr) => {
        console.log(`이전 값은 ${acc}`);
        console.log(`${arr}의 ${idx}번째 요소는 ${value}`);
        // 직전 누산값와 현재 누산값을 연산하여 리턴
        return acc + value;
    }, 0); // 초깃값
    console.log('원본 : ', source);
    console.log('누계값(reduce):', sum);
}
testReduce();

function testReduce2() {
    // map 함수를 reduce 함수로 시뮬레이션
    let source = [12, 4, 19, 33, 86];
    // 요소를 받아와서 짝수면 짝수, 홀수면 홀수
    // 내부 요소를 변경하라.
    let result = source.reduce((acc, value) => {
        console.log(`현재 누산기 : ${acc}`);
        console.log(`${value}는 ${value % 2 == 0 ? '홀수' : '짝수'}`)
        acc.push(value % 2 == 0 ? "짝수" : "홀수");
        return acc;
    }, []);
    console.log(result)
}
testReduce2();
