const students = [
    { name: 'ksd', age: 31, math: 85, english: 87 },
    { name: 'kjh', age: 19, math: 95, english: 97 },
    { name: 'csh', age: 27, math: 76, english: 80 },
    { name: 'mattue', age: 40, math: 56, english: 65 },
    { name: 'kelly', age: 33, math: 49, english: 100 },
];

const mathUpper80 = students.filter(s => s.math > 80);
const mathUpper70AndEnglishUpper80 = students.filter(s => s.math > 70 && s.english > 80);

console.log(`mathUpper 80: ${mathUpper80}`);
console.log(`mathUpper 70 and EnglishUpper 80: ${mathUpper70AndEnglishUpper80}`);

console.log('mathUpper80: ', mathUpper80);
console.log('mathUpper70 and EnglishUpper80: ', mathUpper70AndEnglishUpper80);