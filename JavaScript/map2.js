const listEmployee = [
    { name: 'ksd', age: 35, salary: 5000 },
    { name: 'kjh', age: 21, salary: 3000 },
    { name: 'csh', age: 32, salary: 6000 },
];

const raisedSalaryList = listEmployee.map(e => e.salary*1.1);
raisedSalaryList.forEach(s => console.log(`salary: ${s}`));
raisedSalaryList.forEach(s => console.log(s));