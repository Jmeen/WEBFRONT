// date : 날짜와 시간
let now = new Date(); // 현재시간
console.log('now:',now);
let time = new Date(2021, 7, 30);// 월정보는 0부터 
// 2021년 8월 30일
console.log('time:',time);
let time1 = new Date(2012,8,24,13,30,0); // 년 월 일 시 분 초
console.log('time:',time1);
console.log("년도",time1.getFullYear());  // 년도
console.log("월",time1.getMonth()+1); //월정보는 0부터
console.log("일",time1.getDate()); // 일
console.log("요일", time1.getDay()); // 일요일 0

// set메서드
time1.setFullYear(2021);
console.log("변경된 년도",time1.getFullYear());  
// 이ㅏ날은 무슨 요일?
console.log("요일", time1.getDay()); // 일요일 0