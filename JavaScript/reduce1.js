const scores = [10, 20, 30, 40 ,50];

const sum = scores.reduce((a, b) => (a+b)); // 0부터 시작
const sumWithInitValue = scores.reduce((a, b) => (a+b), 10); // 10부터 시작

console.log('sum :', sum);
console.log('sumWithInitValue :', sumWithInitValue);