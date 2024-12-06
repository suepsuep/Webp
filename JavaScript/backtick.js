let num1 = 1;
let num2 = 2;
let result = 3;

// 기존 문자열 방식
const s1 = num1 + ' 더하기 ' + num2 + '는 \"' + result + '\" 입니다';

// 템플릿 리터럴 방식 (백틱 사용)
const s2 = `${num1} 더하기 ${num2}는 \"${result}\" 입니다`;

console.log(s1); // 기존 방식
console.log(s2); // 템플릿 리터럴 방식

