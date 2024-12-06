const employee = [
    { name: 'ksd', age: 35, department: 'design' },
    { name: 'kjh', age: 21, department: 'development' },
    { name: 'csh', age: 32, department: 'test' },
    { name: 'tom', age: 32, department: 'development' },
    { name: 'july', age: 32, department: 'development' },
    { name: 'mike', age: 32, department: 'test' },
];

const developerAgeList = employee.filter(e => e.department === 'development')
                                .map(e => e.age)
                                .reduce((a, b) => a+b);
console.log(developerAgeList);                            
