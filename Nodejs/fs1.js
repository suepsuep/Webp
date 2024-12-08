let fs = require('fs1');

let data = fs.readFileSync('../ex8-03.html', 'utf-8');
console.log(data);
console.log('file read request !!!');