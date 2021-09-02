function logicA() {
    console.log("begin LogicA");
    setTimeout(() => {
        console.log("callbackA called");
        console.log("bagin LogicB");
        setTimeout(() => {
            console.log("callbackB called");
        }, 2000);
        console.log("end logicB");
    }, 2000); // 2초 후에 콜백 함수 수행

    console.log("end LogicA");
}
logicA();

function LogicPromise() {
    console.log("begin LogicPromise");
    // 비동기 처리를 위한 Promise 객체 생성
    return new Promise((resolve, reject)=>{
        // resolve : 성공했을떄 값을 전달
        // reject : 실패했을 때 사유를 전달
        setTimeout(() => {
            resolve("success");
            // 비동기 처리에 성공하면 resolve 함수를 실행한다.
        }, 2000);
        console.log("end LogicPromise");
    })
}

function testLogicPromise() {
    console.log("testLogicPromise");
    LogicPromise().then(value => {
        //성공했을때
        console.log("promise success : ", value);
    })
    .catch(reason=>{
        // 실패했을 때
        console.log("Promise failed :", reason);
    })
}
// testLogicPromise();

// async/ await는 Promise를 좀더 쉽게 다룰수 있게 해준다.
async function asyncFunc(){
    console.log("async Function");
    return "success";
}
// asysc함수는 항상 promise를 반환한다.
// asyncFunc().then(value=>{
//     console.log(value);
// }).catch(reason=>{
//     console.log(reason);
// });