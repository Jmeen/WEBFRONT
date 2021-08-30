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
    
    let result = data.every(x=>{
        return x.age > 25;
    });
    console.log('-----every : age>25', result)


}
testEvery();