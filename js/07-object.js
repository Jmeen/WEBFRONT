// 객체의 생성
const person = new Object(); // 빈 객체
// 필요할 때 동적으로 속성 추가.
person.name = "Jamein"; // 문자열
person.age = 30;
person.showinfo = function () {
    // 메서드
    let message = `name : ${this.name} , Age : ${this.age}`
    console.log(message);

}
person.showinfo();  // 속성에 접근시 . 으로 구분

// JSON(JavaScript Object Notation) !! 중요 !!
// 키 : 값
// 속성은 , 로 구분
const person2 = {
    name: "jason",
    age: 30,
    showinfo: function () {
        console.log(`name : ${this.name} , Age : ${this.age}`)
    }

}

person2.showinfo();

// prototype 상속
const member = function (name, position) {
    //함수를 생성자로 활용
    this.name = name;
    this.position = position;
}

let m1 = new member("강백호", "PF");
let m2 = new member("서태웅", "SF");

console.log(m1);
console.log(m2);

// javascript는 동적으로 속성과 메서드를 추가할 수 있다.
m1.sayHi = function () {
    console.log(`${this.name}님이 당신을 부릅니다.`)
}
// 동적 추가된 속성, 메서드는 해당 객체에서만 활용.
m1.sayHi();
// m2.sayHi(); error 발생.
console.log(m1);
console.log(m2);

// 원래 객체의 prototype(공유영역)을 이용하면
// 해당 객체를 new한 모든 객체들이 속성을 공유할 수 있다.
//OOP의 상속 개념을 구현 가능.

console.log("m1 ", m1.constructor);
console.log("m2 ", m2.constructor);

console.log("menber prototype", member.prototype);

// prototype 영역에 속성 추가
// 해당 객체를 이용해 new한 모든 객체가 공유.
member.prototype.introduce = function(){
    console.log(`name : ${this.name}, position ${this.position}`);
}

m1.introduce();
m2.introduce();
console.log("menber prototype", member.prototype);

// 기존 객체들에도 동적으로 속성을 추가할 수 있다.
String.prototype.seyHello=function(){
    return "Hello!!!!" + this;
}

console.log("둘리".seyHello());