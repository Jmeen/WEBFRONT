"use strict";

// promise is a Javascrip object for asynchronous operation
// 비동기적인것 수행할때 콜백대신 사용
// 1. state : pending => fulfilled or rejected
// 수행중인지, 성공했는지, 실패했는지/
// 2. Producer vs Consumer

// 1. Producer
// 새로운 promise가 만들어 질때는, excuter라는 함수가 자동으로 실행된다.
const promise = new Promise((resovle, reject) => {
  // doing some heavy work(network, read Files)
  console.log("doing somthing...");
  setTimeout(() => {
    // resovle('jaemin');
    reject(new Error("No Network"));
  }, 2000);
});

// 2. Consumer  : than, catch, finally
promise
  .then((value) => {
    console.log(value);
  })

  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

//3 promise chaining
const fetchNumber = new Promise((resovle, reject) => {
  setTimeout(() => {
    resovle(1);
  }, 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resovle, reject) => {
      setTimeout(() => resovle(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// ERROR Handling
const getHen = () =>
  new Promise((resovle, reject) => {
    setTimeout(() => resovle("치킨"), 1000);
  });

const getEgg = (hen) =>
  new Promise((resovle, reject) => {
    setTimeout(() => reject(`error!! ${hen} => 계란`), 1000);
  });

const cook = (egg) =>
  new Promise((resovle, reject) => {
    setTimeout(() => resovle(`${egg} => 후라이`), 1000);
  });

getHen()
  .then(getEgg)
  // .catch(error=>{
  //   return "빵"
  // })
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal))
  .catch(console.log)
// 순서를 변경해가면서 에러 처리하는데 생각을 해보자.

// 5. callback hell -> promise