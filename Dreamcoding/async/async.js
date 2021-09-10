"use strict";
// async & await
// promise를 깔끔하게 사용하는 방법

// 1. async
// function fetchUser(){
//   return new Promise((resolve , reject)=>{
//      // do network request in 10 seconds..
//     resolve("jaemin")
//   });
// }

async function fetchUser() {
  // do network request in 10 seconds..
  return "jaemin";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return "apple";
}

async function getBanana() {
  await delay(2000);
  return "banana";
}

//   function getBanana(){
//     return delay(3000)
//     .then(()=>"banana")
//   }
// }

// 콜배지옥!!!
// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }
// pickFruits().then(console.log);

async function pickFruits() {
  const applePromise = getApple();
  const BananaPromise = getBanana();

  const apple = await applePromise;
  const banana = await BananaPromise;
  return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

// 3. useful Promise API
function pickallpromise(){
  return Promise.all([getApple(),getBanana()])
  .then(fruits => fruits.join("+"))
}
pickallpromise().then(console.log)

function pickonlyone (){
  return Promise.race([getApple(),getBanana()]);
}
pickonlyone().then(console.log);