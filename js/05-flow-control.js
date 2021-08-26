// 연습문제 1
// 2단부터 9단까지
// (for문, while문)

// for (let j = 2; j <= 9; j++) {
//     console.log("-----", j, "단--------")
//     for (let i = 1; i <= 9; i++) {
//         console.log(j, "X", i, "=", j * i);
//     }

// }
// console.log("============= while ============")
// times();
// function times() {
//     let a = 2;
//     let i = 1;
//     while (a <= 9) {
//         console.log(a, "단")
//         i = 1;
//         while (i <= 9) {
//             console.log(a, "X", i, "=", a * i);
//             i++
//         }
//         a++
//     }
// }
function gugudan() {
    console.log("구구단");
    let forresult = "";
    for (let dan = 2; dan <= 9; dan++) {
        // 단 루프
        forresult += dan + "단" + "\n";
        for (let i = 1; i <= 9; i++) {
            forresult += dan + " x " + i + " = " + dan * i + "\n";
        }
    }
    console.log(forresult);
}

// 연습문제 2
// (for문, while문)
// *****
// ****
// ***
// **
// *

// starDotusefor();
function starDotusefor() {
    // let result=String();
    // for(let i = n; i>0; i--){
    //     result += "*";
    //     console.log(result);
    // }
    let line = 5;
    let result = "";
    for (let i = line; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            result += "*";
        }
        result += "\n";
    }
    console.log(result);
}
// let line = 5;
// let stars ="";
// while(line>0){
//     let col = 1;
//     while(col<=line){
//         stars += "*";
//         col++;
//     }
//     stars+="\n";
//     line --;
// }
// console.log(stars);


// es6 : for ... in
// 객체의 속성(property)를 순회한다.
// es6 : for ... of
// 

let obj = {
    name: "홍길동",
    age: 28,
    job: "도적",
    gender: "남"
};

for (let key in obj) {
    //for .. in은 객체의 속성을 순회한다.
    console.log(key, "->", obj[key]);
}

// for ...of는 순회객체(배열 등)에서만 사용.
// for (let value of obj){
//     console.log(value)
// } --> error : obj는 순회객체가 아님


const arr = [5, 1, 4, 3, 2, 9, 8, 0];
for (let key in arr) {
    console.log(key);
}

for (let value of arr) {
    // for ..of : 반복 가능 객체에서 요소를 하나씩
    console.log(value);
}
