const arr1 = [1, 2, 3];
const arr2 = [];
for (let i=0; i<arr1.length; i++) {
    arr2.push(arr1[i]*2);
}
console.log(arr2);

const arr3 = arr1.map(function(a) { // 고차 함수
    return a*2;
});

console.log(arr3);

const arr4 = arr1.map(a => a*2);
console.log(arr4);
