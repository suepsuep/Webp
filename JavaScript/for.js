const userList = [
    {name: 'ksd', age: 31, score: 85},
    {name: 'kjh', age: 13, score: 95},
    {name: 'pch', age: 35, score: 76},
];

for (const user of userList) { // for 구문
    console.log('user1:', user);
}

userList.forEach(function(a) { // forEach 구문
    console.log('user2:', a);
})

userList.forEach(a => console.log('user3:', a)); // forEach 화살표 함수