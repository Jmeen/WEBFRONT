"use strict";

// array

// 1. 배열의 선언
const arr1 = new Array();
const arr2 = [1, 2, 3];

// 2. Index position
const fruits = ["apple", "banana"];
console.log(fruits);
console.log(fruits.length);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

// 3. looping over
// for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// for +
for (let value of fruits) {
  console.log(value);
}
// for each
fruits.forEach((fruits) => console.log(fruits));

// addition, deletion, copy
fruits.push("berry", "peach");
console.log(fruits);
fruits.pop();
console.log(fruits);

fruits.unshift("lemon");
console.log(fruits);

fruits.shift();
console.log(fruits);

// shift,  unshift는 pop, push보다 느리다. 매우 느리다!.

// 특정 포지션 삭제

fruits.push('peach','lemon','melon')
console.log(fruits);


fruits.splice(1,1)
console.log(fruits);

fruits.splice(2,1,"grafe","hanom")
console.log(fruits);

const fruts2 = ["mango"];

const newfruits = fruits.concat(fruts2);
console.log(newfruits);


console.log(newfruits.toLocaleString());

fruits = ["apple", "berry", "grafe", "hanom", "lemon", "melon", "mango"];
console.log(fruits.toLocaleString());