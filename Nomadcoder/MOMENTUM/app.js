'use strict'
// make caculate

const calculate = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  times: function (a, b) {
    return a * b;
  },
  power: function (a, b) {
    return a ** b;
  }
}

console.log("add(5, 4): " + calculate.add(5, 4))
console.log("minus(5, 4): " + calculate.minus(5, 4))
console.log("divide(5, 4): " + calculate.divide(5, 4))
console.log("times(5, 4): " + calculate.times(5, 4))
console.log("power(5, 4): " + calculate.power(5, 4))