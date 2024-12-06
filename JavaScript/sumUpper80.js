const students = [
    { name: 'ksd', age: 31, math: 85, english: 87 },
    { name: 'kjh', age: 19, math: 95, english: 97 },
    { name: 'csh', age: 27, math: 76, english: 80 },
    { name: 'mattue', age: 40, math: 56, english: 65 },
    { name: 'kelly', age: 33, math: 49, english: 100 },
];

const upper80StudentsSum = students.filter(s => s.math > 80)
                            .map(s => s.math)
                            .reduce((a, b) => a+b);

console.log(upper80StudentsSum);
console.log('--------------------');
console.log(students.filter(s => s.math > 80)
            .map(s => s.math));