"use strict";

// scyncronous callback
function printImmediately(print) {
  print();
}

// Ascyncronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

// java script는 동시적이다.
// 코드블럭은 호이스팅 후 실행된다.
// hoisting : var, function 을 최상단으로 올려주는 것.

console.log("1"); // 동기

// setTimeout(function () {
//   console.log("2");
// }, 1000);

setTimeout(() => console.log("2"), 1000); // 비동기

console.log("3"); // 동기

printImmediately(() => console.log("hello")); // 동기

printWithDelay(() => console.log("async callback"), 2000); // 비동기

// callback hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (id === "a" && password === "1234") {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user == "a") {
        onSuccess({ name: "aa", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 2000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    //성공했을떄
    userStorage.getRoles(
      user,
      (userWithRole) => {
        //  롤 가져오기
        alert(
          `hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
