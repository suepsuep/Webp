let result = 0;
console.time('duration1');
for (let i=0; i<=1000; i++) {
    result += i;
}
console.timeEnd('duration1');
console.log('1 ~ 1000: %d', result);

let school = {name: 'Hansung', district: 'Seongbuk-gu'};
console.log('dir = ');
console.dir(school);
console.log('log = ', school);