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
function gugudan(){
console.log("구구단");
let forresult = "";
for (let dan = 2; dan <= 9; dan++) {
    // 단 루프
    forresult += dan + "단"+ "\n";
    for(let i = 1; i<=9; i++){
        forresult+=dan+" x "+i+" = "+dan*i+"\n";
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
let line = 5;
let stars ="";
while(line>0){
    let col = 1;
    while(col<=line){
        stars += "*";
        col++;
    }
    stars+="\n";
    line --;
}
console.log(stars);